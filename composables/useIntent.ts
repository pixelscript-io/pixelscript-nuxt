import { fallbackAnswer, SUGGESTED_QUESTIONS } from '~/utils/answerBlocks'
import type { AnswerResult } from '~/types/answer'

export type { AnswerResult } from '~/types/answer'

type Msg = { role: 'user' | 'assistant'; content: string }

// The four suggested questions on the landing screen (label + hotkey).
export const INTENTS = SUGGESTED_QUESTIONS

// Conversation state shared across the page and the header. useState keeps it alive
// when the visitor opens a case study and comes back, instead of resetting to the idle prompt.
export function useIntentState() {
  const phase = useState<'idle' | 'loading' | 'answer'>('intent-phase', () => 'idle')
  const q = useState('intent-q', () => '')
  const input = useState('intent-input', () => '')
  const res = useState<AnswerResult | null>('intent-res', () => null)
  const history = useState<Msg[]>('intent-history', () => [])
  // Bumped on every new question or reset so stale in-flight answers are ignored.
  const seq = useState('intent-seq', () => 0)

  function reset() {
    seq.value++
    phase.value = 'idle'
    q.value = ''
    input.value = ''
    res.value = null
  }

  return { phase, q, input, res, history, seq, reset }
}

export function useIntent() {
  const { phase, q, input, res, history, seq } = useIntentState()

  const followups = computed(() =>
    (res.value?.followups?.length ? res.value.followups : INTENTS.map(i => i.label).slice(0, 3))
  )

  async function ask(question: string) {
    question = question.trim()
    if (!question) return
    const id = ++seq.value
    phase.value = 'loading'
    q.value = question
    input.value = ''
    res.value = null
    let out: AnswerResult
    try {
      out = await $fetch<AnswerResult>('/api/ask', {
        method: 'POST',
        body: { question, history: history.value.slice(-4) }
      })
      // Blocks can be long (e.g. a whole case study), so history only keeps the reply.
      history.value.push(
        { role: 'user', content: question },
        { role: 'assistant', content: JSON.stringify({ reply: out.reply, blocks: '[shown to the visitor]', followups: out.followups }) }
      )
    } catch {
      out = fallbackAnswer(question)
    }
    if (id !== seq.value) return // a newer question (or a reset) replaced this one
    res.value = out
    phase.value = 'answer'
  }

  function onKeyDown(e: KeyboardEvent) {
    const el = e.target as HTMLElement | null
    if (el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA')) {
      if (e.key === 'Escape') (el as HTMLInputElement).blur()
      return
    }
    if (e.metaKey || e.ctrlKey || e.altKey) return
    const k = e.key.toLowerCase()
    // Escape (start over) is handled by AppHeader so it also works on AI case study pages.
    const i = 'asdf'.indexOf(k)
    if (i >= 0 && k.length === 1) return void ask(INTENTS[i].label)
    const n = '123'.indexOf(k)
    if (n >= 0 && k.length === 1 && phase.value === 'answer' && followups.value[n]) void ask(followups.value[n])
  }

  onMounted(() => window.addEventListener('keydown', onKeyDown))
  onBeforeUnmount(() => window.removeEventListener('keydown', onKeyDown))

  return { phase, q, input, res, followups, ask }
}
