import content from '../data/site-content.json'
import type { AnswerBlock, AnswerResult, CardItem, StatItem } from '../types/answer'

/* eslint-disable @typescript-eslint/no-explicit-any */
const cases = content.caseStudies as any[]
const projects = content.projects as any[]
const skills = content.skills as any[]
const jobs = content.experience.jobs as any[]
const channels = content.contact.channels as any[]
const testimonials = content.testimonials as any[]

export const SUGGESTED_QUESTIONS = content.home.suggestedQuestions

const MAX_MODEL_BLOCKS = 16
const MAX_TOTAL_BLOCKS = 80

const clip = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '')
const list = (v: unknown, max: number): any[] => (Array.isArray(v) ? v.slice(0, max) : [])

const findCase = (id: string) => cases.find((c) => c.id === id)
const findProject = (id: string) => projects.find((p) => p.id === id)
const findSkill = (id: string) => skills.find((s) => s.id === id)
const findJob = (id: string) => jobs.find((j) => j.id === id)

const allTools = skills.flatMap((s) => s.tools as { name: string; img: string }[])

// Every image the model may reference, mapped to its alt text.
const knownImages = new Map<string, string>()
for (const c of cases) {
  for (const s of c.sections) for (const b of s.content) if (b.type === 'image') knownImages.set(b.src, b.alt)
  if (c.previewImage) knownImages.set(c.previewImage, `${c.cardTitle} preview`)
}
for (const p of projects) {
  if (p.previewImage) knownImages.set(p.previewImage, `${p.title} preview`)
  if (p.fullImage) knownImages.set(p.fullImage, `${p.title} full view`)
  for (const g of p.gallery ?? []) {
    knownImages.set(g.image, `${p.title} screen`)
    knownImages.set(g.fullImage, `${p.title} full view`)
  }
}

/* ---------- Deterministic builders (verbatim site content) ---------- */

function sectionContentToBlocks(items: any[]): AnswerBlock[] {
  const out: AnswerBlock[] = []
  for (const b of items) {
    if (b.type === 'paragraph') out.push({ type: 'paragraph', text: b.text })
    else if (b.type === 'image') out.push({ type: 'image', src: b.src, alt: b.alt })
    else if (b.type === 'list') {
      out.push({
        type: 'list',
        style: b.style === 'numbered' ? 'numbered' : 'bullets',
        items: b.items.map((i: any) => ({ ...(i.label ? { label: i.label } : {}), text: i.text })),
      })
    }
  }
  return out
}

/** Full case study write-up, optionally limited to the sections whose headings match `only`. */
export function caseStudyBlocks(id: string, only?: string[]): AnswerBlock[] {
  const c = findCase(id)
  if (!c) return []

  const wanted = (only ?? []).map((h) => h.toLowerCase())
  const blocks: AnswerBlock[] = [
    { type: 'heading', text: c.title, level: 2 },
    { type: 'paragraph', text: c.role },
    { type: 'stats', items: c.metrics as StatItem[] },
  ]

  for (const s of c.sections) {
    if (wanted.length && !(s.heading && wanted.includes(String(s.heading).toLowerCase()))) continue
    if (s.heading) blocks.push({ type: 'heading', text: s.heading, level: s.level === 3 ? 3 : 2 })
    blocks.push(...sectionContentToBlocks(s.content))
  }
  return blocks
}

export function projectBlocks(id: string): AnswerBlock[] {
  const p = findProject(id)
  if (!p) return []

  const blocks: AnswerBlock[] = [{ type: 'heading', text: p.caseTitle ?? p.title, level: 2 }]
  blocks.push({ type: 'paragraph', text: p.caseLead ?? p.category })
  if (p.description) blocks.push({ type: 'paragraph', text: p.description })

  const images: { src: string; alt: string }[] = (p.gallery ?? []).length
    ? p.gallery.map((g: any) => ({ src: g.image, alt: `${p.title} screen` }))
    : p.previewImage
      ? [{ src: p.previewImage, alt: `${p.title} preview` }]
      : []
  for (const img of images) blocks.push({ type: 'image', ...img })
  return blocks
}

function embedBlocks(ref: string, only?: string[]): AnswerBlock[] {
  return findCase(ref) ? caseStudyBlocks(ref, only) : projectBlocks(ref)
}

function jobItems(ids: string[] | 'all', highlight: Set<string>) {
  const chosen = ids === 'all' ? jobs : ids.map(findJob).filter(Boolean)
  return chosen.map((j: any) => ({
    title: j.role as string,
    subtitle: j.company as string,
    meta: j.startYear === j.endYear ? j.startYear : `${j.startYear} – ${j.endYear}`,
    highlight: highlight.has(j.id),
  }))
}

function cardFromRef(ref: string): CardItem | null {
  const c = findCase(ref)
  if (c) {
    return {
      title: c.cardTitle,
      subtitle: c.cardRole ?? c.role,
      text: c.excerpt,
      image: c.previewImage ?? undefined,
      href: c.route,
      stats: c.metrics,
    }
  }
  const p = findProject(ref)
  if (p) {
    return {
      title: p.title,
      subtitle: p.category,
      image: p.previewImage ?? undefined,
      href: p.route ?? undefined,
      compact: true,
    }
  }
  const s = findSkill(ref)
  if (s) return { title: s.title, text: s.text, logos: s.tools }
  return null
}

/* ---------- Validation of model output ---------- */

function sanitizeBlock(b: any): AnswerBlock[] {
  if (!b || typeof b !== 'object') return []

  switch (b.type) {
    case 'heading': {
      const text = clip(b.text, 140)
      return text ? [{ type: 'heading', text, level: b.level === 3 ? 3 : 2 }] : []
    }
    case 'paragraph': {
      const text = clip(b.text, 900)
      return text ? [{ type: 'paragraph', text }] : []
    }
    case 'list': {
      const items = list(b.items, 12)
        .map((i) => ({ label: clip(i?.label, 80) || undefined, text: clip(i?.text, 500) }))
        .filter((i) => i.text)
        .map((i) => (i.label ? i : { text: i.text }))
      return items.length ? [{ type: 'list', style: b.style === 'numbered' ? 'numbered' : 'bullets', items }] : []
    }
    case 'stats': {
      const items = list(b.items, 4)
        .map((i) => ({ value: clip(i?.value, 20), label: clip(i?.label, 60) }))
        .filter((i) => i.value && i.label)
      return items.length ? [{ type: 'stats', items }] : []
    }
    case 'timeline': {
      const ids = Array.isArray(b.jobs) ? b.jobs.filter((id: unknown) => typeof id === 'string' && findJob(id)) : 'all'
      const highlight = new Set<string>(list(b.highlight, 13).filter((id) => typeof id === 'string'))
      const items = jobItems(ids.length === 0 ? 'all' : ids, highlight)
      return items.length ? [{ type: 'timeline', items }] : []
    }
    case 'cards': {
      const items: CardItem[] = []
      for (const raw of list(b.items, 8)) {
        const fromRef = cardFromRef(clip(raw?.ref, 40))
        if (fromRef) {
          items.push(fromRef)
          continue
        }
        const title = clip(raw?.title, 100)
        if (!title) continue
        const logos = list(raw?.tools, 6)
          .map((name) => allTools.find((t) => t.name.toLowerCase() === String(name).toLowerCase()))
          .filter(Boolean) as { name: string; img: string }[]
        items.push({
          title,
          subtitle: clip(raw?.subtitle, 120) || undefined,
          text: clip(raw?.text, 400) || undefined,
          logos: logos.length ? logos : undefined,
        })
      }
      return items.length ? [{ type: 'cards', items }] : []
    }
    case 'quote': {
      const t = testimonials.find((x) => x.id === b.ref)
      return t ? [{ type: 'quote', text: t.text, author: t.author }] : []
    }
    case 'links': {
      const items = list(b.items, 6)
        .map((i) => channels.find((c) => c.id === i?.ref))
        .filter(Boolean)
        .map((c: any) => ({ label: c.label, detail: c.detail, url: c.url, icon: c.icon }))
      return items.length ? [{ type: 'links', items }] : []
    }
    case 'image': {
      const src = clip(b.ref, 120)
      const alt = knownImages.get(src)
      if (alt === undefined) return []
      return [{ type: 'image', src, alt, ...(clip(b.caption, 140) ? { caption: clip(b.caption, 140) } : {}) }]
    }
    case 'embed': {
      const ref = clip(b.ref, 40)
      const only = list(b.sections, 10).filter((h) => typeof h === 'string')
      return embedBlocks(ref, only)
    }

    case 'divider':
      return [{ type: 'divider' }]
    default:
      return []
  }
}

/** Turns untrusted model output into blocks the page can safely render. */
export function sanitizeBlocks(raw: unknown): AnswerBlock[] {
  const out: AnswerBlock[] = []
  for (const b of list(raw, MAX_MODEL_BLOCKS)) out.push(...sanitizeBlock(b))
  return out.slice(0, MAX_TOTAL_BLOCKS)
}

/* ---------- Offline fallback (API disabled or failing) ---------- */

const followupsDefault = () => SUGGESTED_QUESTIONS.map((q) => q.label).slice(0, 3)

export function fallbackAnswer(question: string): AnswerResult {
  const t = question.toLowerCase()
  const followups = followupsDefault()
  const reply = "Here's what I have on that."

  const named = [...cases, ...projects].find(
    (item) =>
      t.includes(String(item.cardTitle ?? item.title).toLowerCase()) ||
      (item.id === 'nectar' && t.includes('nectar')),
  )
  if (named) return { reply, blocks: embedBlocks(named.id), followups }

  if (/worked|experience|job|role|compan|career|where/.test(t)) {
    return {
      reply,
      blocks: [
        { type: 'timeline', items: jobItems('all', new Set()) },
        { type: 'heading', text: content.experience.mentorship.heading, level: 2 },
        { type: 'paragraph', text: content.experience.mentorship.text },
      ],
      followups,
    }
  }

  if (/work|project|case|portfolio|built|design system/.test(t)) {
    const cardsFor = (ids: string[]) => ids.map(cardFromRef).filter(Boolean) as CardItem[]
    return {
      reply,
      blocks: [
        { type: 'heading', text: 'Featured Case Study', level: 2 },
        { type: 'cards', items: cardsFor(content.work.featuredOrder) },
        { type: 'heading', text: 'Other Projects', level: 2 },
        { type: 'cards', items: cardsFor(content.work.projectOrder) },
      ],
      followups,
    }
  }

  if (/contact|email|reach|hire|resume|linkedin|touch/.test(t)) {
    return {
      reply,
      blocks: [
        { type: 'links', items: channels.map((c) => ({ label: c.label, detail: c.detail, url: c.url, icon: c.icon })) },
      ],
      followups,
    }
  }

  return {
    reply,
    blocks: [
      ...content.home.intro.map((text): AnswerBlock => ({ type: 'paragraph', text })),
      { type: 'cards', items: skills.map((s) => cardFromRef(s.id)).filter(Boolean) as CardItem[] },
    ],
    followups,
  }
}
