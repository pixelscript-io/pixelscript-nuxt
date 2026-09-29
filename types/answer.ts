// Structured answer format shared by the server (validation), the client
// (rendering) and the offline fallback. The model composes these blocks from
// data/site-content.json; anything factual (links, images, quotes, jobs) is
// resolved from that file by id, never trusted from model output.

export interface StatItem {
  value: string
  label: string
}

export interface CardItem {
  title: string
  subtitle?: string
  text?: string
  image?: string
  href?: string
  stats?: StatItem[]
  logos?: { name: string; img: string }[]
  /** Project cards: title, subtitle, arrow and image only, listed in a single column. */
  compact?: boolean
}

export type AnswerBlock =
  | { type: 'heading'; text: string; level: 2 | 3 }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; style: 'bullets' | 'numbered'; items: { label?: string; text: string }[] }
  | { type: 'stats'; items: StatItem[] }
  | { type: 'timeline'; items: { title: string; subtitle?: string; meta?: string; highlight?: boolean }[] }
  | { type: 'cards'; items: CardItem[] }
  | { type: 'quote'; text: string; author: string }
  | { type: 'links'; items: { label: string; detail: string; url: string; icon: string }[] }
  | { type: 'image'; src: string; alt: string; caption?: string }

  | { type: 'divider' }

export interface AnswerResult {
  reply: string
  blocks: AnswerBlock[]
  followups: string[]
}
