import { SYSTEM_PROMPT } from '../utils/intentPrompt'
import { sanitizeBlocks } from '../../utils/answerBlocks'
import type { AnswerResult } from '../../types/answer'

type Msg = { role: 'user' | 'assistant'; content: string }

// Simple per-IP limiter (resets on restart). Swap for Redis/Upstash if you scale to multiple instances.
const hits = new Map<string, number[]>()
function limited(ip: string, max = 20, windowMs = 60_000) {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter(t => now - t < windowMs)
  recent.push(now)
  hits.set(ip, recent)
  return recent.length > max
}

export default defineEventHandler(async (event): Promise<AnswerResult> => {
  const config = useRuntimeConfig(event)
  if (!config.anthropicApiKey) throw createError({ statusCode: 503, statusMessage: 'AI disabled' })

  if (limited(getRequestIP(event, { xForwardedFor: true }) ?? 'anon')) {
    throw createError({ statusCode: 429, statusMessage: 'Too many requests' })
  }

  const body = await readBody<{ question?: unknown; history?: unknown }>(event)
  const question = typeof body?.question === 'string' ? body.question.trim().slice(0, 300) : ''
  if (!question) throw createError({ statusCode: 400, statusMessage: 'Missing question' })

  const history: Msg[] = (Array.isArray(body?.history) ? body.history : [])
    .filter((m: any) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
    .slice(-4)
    .map((m: any) => ({ role: m.role, content: m.content.slice(0, 1500) }))
  while (history.length && history[0].role !== 'user') history.shift()

  let raw = ''
  try {
    const r = await $fetch<{ content: { type: string; text: string }[] }>('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': config.anthropicApiKey,
        'anthropic-version': '2023-06-01'
      },
      body: {
        model: config.anthropicModel || 'claude-haiku-4-5',
        max_tokens: 2000,
        // The site content is large and identical on every request, so let Anthropic cache it.
        system: [{ type: 'text', text: SYSTEM_PROMPT, cache_control: { type: 'ephemeral' } }],
        messages: [...history, { role: 'user', content: question }]
      },
      timeout: 30_000
    })
    raw = r.content?.find(c => c.type === 'text')?.text ?? ''
  } catch {
    throw createError({ statusCode: 502, statusMessage: 'Upstream error' })
  }

  // Never trust model output: keep only the fields and block types the page can render.
  let parsed: any
  try { parsed = JSON.parse(raw.match(/\{[\s\S]*\}/)![0]) } catch {
    throw createError({ statusCode: 502, statusMessage: 'Bad model output' })
  }

  const reply = typeof parsed.reply === 'string' ? parsed.reply.slice(0, 600) : ''
  const blocks = sanitizeBlocks(parsed.blocks)
  if (!reply && !blocks.length) throw createError({ statusCode: 502, statusMessage: 'Empty model output' })

  return {
    reply,
    blocks,
    followups: (Array.isArray(parsed.followups) ? parsed.followups : [])
      .filter((f: unknown) => typeof f === 'string')
      .map((f: string) => f.slice(0, 80))
      .slice(0, 3)
  }
})
