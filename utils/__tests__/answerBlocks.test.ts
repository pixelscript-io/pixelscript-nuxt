import { describe, expect, it } from 'vitest'
import content from '../../data/site-content.json'
import { caseStudyBlocks, fallbackAnswer, sanitizeBlocks } from '../answerBlocks'

describe('sanitizeBlocks', () => {
  it('drops unknown block types and non-objects', () => {
    expect(sanitizeBlocks([{ type: 'script', text: 'x' }, null, 'hi', 42])).toEqual([])
    expect(sanitizeBlocks('nope')).toEqual([])
  })

  it('keeps well-formed text blocks and clamps levels', () => {
    const out = sanitizeBlocks([
      { type: 'heading', text: 'Hello', level: 9 },
      { type: 'paragraph', text: '  Some text  ' },
      { type: 'paragraph', text: '   ' },
    ])
    expect(out).toEqual([
      { type: 'heading', text: 'Hello', level: 2 },
      { type: 'paragraph', text: 'Some text' },
    ])
  })

  it('resolves quotes from testimonial ids and rejects invented ones', () => {
    const real = content.testimonials[0]
    expect(sanitizeBlocks([{ type: 'quote', ref: real.id, text: 'model made this up' }])).toEqual([
      { type: 'quote', text: real.text, author: real.author },
    ])
    expect(sanitizeBlocks([{ type: 'quote', ref: 'nobody', text: 'fake' }])).toEqual([])
  })

  it('only allows links from the known contact channels', () => {
    const out = sanitizeBlocks([
      { type: 'links', items: [{ ref: 'email' }, { ref: 'evil', url: 'https://evil.example' }] },
    ])
    expect(out).toHaveLength(1)
    const block = out[0] as Extract<(typeof out)[number], { type: 'links' }>
    expect(block.items.map((i) => i.label)).toEqual(['Email'])
  })

  it('only allows images that exist on the site', () => {
    expect(sanitizeBlocks([{ type: 'image', ref: 'https://evil.example/x.png' }])).toEqual([])
    expect(sanitizeBlocks([{ type: 'image', ref: '/img/preview_case1.png' }])).toHaveLength(1)
  })

  it('resolves cards by id and never trusts model links', () => {
    const out = sanitizeBlocks([
      { type: 'cards', items: [{ ref: 'nectar', href: 'https://evil.example' }, { title: 'Free card', href: 'https://evil.example' }] },
    ])
    const cards = (out[0] as Extract<(typeof out)[number], { type: 'cards' }>).items
    expect(cards[0].href).toBe('/case/nectar')
    expect(cards[1].href).toBeUndefined()
  })

  it('builds timelines from job ids only, highlighting requested jobs', () => {
    const out = sanitizeBlocks([{ type: 'timeline', jobs: ['privacybee', 'fake'], highlight: ['privacybee'] }])
    const items = (out[0] as Extract<(typeof out)[number], { type: 'timeline' }>).items
    expect(items).toHaveLength(1)
    expect(items[0]).toMatchObject({ title: 'Lead Design System Engineer', subtitle: 'Privacy Bee', meta: '2024 – 2026', highlight: true })
  })

  it('expands an embed into the verbatim case study', () => {
    const out = sanitizeBlocks([{ type: 'embed', ref: 'nectar' }])
    expect(out).toEqual(caseStudyBlocks('nectar'))
    expect(out.length).toBeGreaterThan(10)
    expect(sanitizeBlocks([{ type: 'embed', ref: 'nope' }])).toEqual([])
  })

  it('narrows an embed to the requested sections', () => {
    const out = sanitizeBlocks([{ type: 'embed', ref: 'nectar', sections: ['The Payoff'] }])
    const headings = out.filter((b) => b.type === 'heading').map((b) => (b as { text: string }).text)
    expect(headings).toEqual([content.caseStudies[0].title, 'The Payoff'])
  })

  it('caps how many blocks the model can request', () => {
    const many = Array.from({ length: 100 }, () => ({ type: 'divider' }))
    expect(sanitizeBlocks(many).length).toBeLessThanOrEqual(16)
  })
})

describe('work overview', () => {
  it('features only Privacy Bee and lists projects as compact cards', () => {
    const blocks = fallbackAnswer('Show me your work').blocks
    const cardBlocks = blocks.filter((b) => b.type === 'cards') as Extract<(typeof blocks)[number], { type: 'cards' }>[]
    expect(cardBlocks).toHaveLength(2)
    expect(cardBlocks[0].items.map((c) => c.title)).toEqual(['Privacy Bee'])
    expect(cardBlocks[0].items[0].compact).toBeUndefined()
    const projects = cardBlocks[1].items
    expect(projects.length).toBeGreaterThan(1)
    expect(projects.every((c) => c.compact && !c.text)).toBe(true)
    expect(projects.map((c) => c.title)).not.toContain('Integrate')
  })
})

describe('fallbackAnswer', () => {
  it('shows only the named case study', () => {
    const out = fallbackAnswer('Tell me about the Integrate case study')
    expect(out.blocks.some((b) => b.type === 'cards')).toBe(false)
    expect(out.blocks[0]).toMatchObject({ type: 'heading', text: content.caseStudies[1].title })
  })

  it('answers experience, work, contact and about questions', () => {
    expect(fallbackAnswer('Where have you worked?').blocks[0].type).toBe('timeline')
    expect(fallbackAnswer('Show me your work').blocks.some((b) => b.type === 'cards')).toBe(true)
    expect(fallbackAnswer('How can I reach you?').blocks[0].type).toBe('links')
    expect(fallbackAnswer('Tell me about yourself').blocks.length).toBeGreaterThan(0)
  })
})
