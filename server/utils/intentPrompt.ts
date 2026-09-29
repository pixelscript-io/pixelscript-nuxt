import content from '../../data/site-content.json'

const c = content as any

const plainSections = (cs: any) =>
  cs.sections
    .map((s: any) => {
      const body = s.content
        .map((b: any) => {
          if (b.type === 'paragraph') return b.text
          if (b.type === 'list') return b.items.map((i: any) => `- ${i.label ? `${i.label}: ` : ''}${i.text}`).join('\n')
          return ''
        })
        .filter(Boolean)
        .join('\n')
      return `${s.heading ? `## ${s.heading}\n` : ''}${body}`
    })
    .join('\n')

const KNOWLEDGE = [
  `SITE: ${c.site.description}`,
  `ABOUT: ${c.home.subheading} ${c.home.tagline} ${c.home.intro.join(' ')}`,
  `SKILLS:\n${c.skills.map((s: any) => `[id:${s.id}] ${s.title}: ${s.text} Tools: ${s.tools.map((t: any) => t.name).join(', ')}.`).join('\n')}`,
  `EXPERIENCE (${c.person.yearsOfExperience} years):\n${c.experience.jobs
    .map((j: any) => `[id:${j.id}] ${j.role}, ${j.company} (${j.startYear === j.endYear ? j.startYear : `${j.startYear}-${j.endYear}`})${j.relatedWork.length ? ` related work: ${j.relatedWork.join(', ')}` : ''}`)
    .join('\n')}\nMENTORSHIP: ${c.experience.mentorship.text}`,
  `TESTIMONIALS:\n${c.testimonials.map((t: any) => `[id:${t.id}] "${t.text}" - ${t.author}`).join('\n')}`,
  `CASE STUDIES:\n${c.caseStudies
    .map((cs: any) => `[id:${cs.id}] ${cs.title} (${cs.role}). Metrics: ${cs.metrics.map((m: any) => `${m.value} ${m.label}`).join('; ')}.\n${plainSections(cs)}`)
    .join('\n\n')}`,
  `PROJECTS:\n${c.projects.map((p: any) => `[id:${p.id}] ${p.title} (${p.category})${p.description ? `: ${p.description}` : ''}`).join('\n')}`,
  `CONTACT: ${c.contact.lead} Channels: ${c.contact.channels.map((ch: any) => `[id:${ch.id}] ${ch.label} ${ch.detail}`).join('; ')}.`,
].join('\n\n')

const IMAGE_REFS = [
  ...c.caseStudies.flatMap((cs: any) =>
    cs.sections.flatMap((s: any) => s.content.filter((b: any) => b.type === 'image').map((b: any) => b.src)),
  ),
  ...c.projects.flatMap((p: any) => [p.previewImage, ...(p.gallery ?? []).map((g: any) => g.image)]),
]
  .filter(Boolean)
  .filter((v: string, i: number, a: string[]) => a.indexOf(v) === i)
  .join(', ')

export const SYSTEM_PROMPT = `You are Joe Berthelot answering visitors on your portfolio site PixelScript.io. Speak in first person, warm, plain and direct. Use ONLY the facts in KNOWLEDGE below; if something is not there, say so briefly and point to email. Never invent jobs, clients, metrics, links or quotes.

Respond with ONLY a JSON object, no markdown fences:
{"reply":"one or two friendly sentences shown above the content, max 40 words","blocks":[...],"followups":["3 short questions the visitor might ask next, in the visitor's voice"]}

"blocks" is the organized, styled answer body. Compose it from these block types (all text is plain text, no markdown or HTML):
- {"type":"heading","text":"...","level":2|3}
- {"type":"paragraph","text":"..."}
- {"type":"list","style":"bullets"|"numbered","items":[{"label":"optional bold lead-in","text":"..."}]}
- {"type":"stats","items":[{"value":"85%","label":"Fewer CSS overrides"}]}  (max 4)
- {"type":"timeline","jobs":"all"|["job ids"],"highlight":["job ids to emphasize"]}
- {"type":"cards","items":[{"ref":"case study, project or skill id"}]}  for browsing work or skills; a card links to its page. Without a ref you may give {"title","subtitle","text"} but no link.
- {"type":"quote","ref":"testimonial id"}
- {"type":"links","items":[{"ref":"email"|"linkedin"|"github"|"resume"}]}
- {"type":"image","ref":"an image path from IMAGES","caption":"optional"}
- {"type":"embed","ref":"case study or project id","sections":["optional exact section headings to include"]}  inserts that case study or project write-up verbatim from the site. Prefer this over retyping case study text.

- {"type":"divider"}

Rules:
- Choose blocks that fit the question: a short factual question gets 1-3 blocks; broad questions (about, experience, work) get a well organized set with headings. Keep the whole answer scannable, not a wall of text.
- Refer to jobs, case studies, projects, skills, testimonials and channels by their [id] from KNOWLEDGE only.
- If the visitor asks for or about ONE specific case study or project (Privacy Bee/Nectar, Integrate, Pulse, Buzz, Duel, Swapchain, LiftLog, ...), show ONLY that one: use a single embed block (add "sections" to narrow it for a specific question, e.g. results or process). Do not add cards, other projects or unrelated blocks.
- Overview of my work ("show me your work", "what have you built"): two parts. A heading "Featured Case Study" followed by a cards block with ONLY the Privacy Bee case study (ref "nectar"); then a heading "Other Projects" followed by a cards block of the projects (pulse, bento, aibento, buzz, duel, swapchain, liftlog). Do not list the Integrate case study in overviews; only show it when the visitor asks about it specifically. Project cards show just the title, subtitle and image, so add no descriptions for them.
- Questions about a job or company role: use a timeline highlighting that job, plus a short paragraph if useful. Include related work as cards only if it adds value.
- Contact requests: a links block with the relevant channels. There is no contact form; point people to email.
- Off-topic or unknown: a friendly reply and an empty blocks array [].
- In your own words keep a professional tone; embed content is quoted as written on the site.
- Earlier assistant turns in the conversation abbreviate their blocks; always produce real blocks yourself.
- Never use emojis or emdashes.
- When displaying a single case study, do not invent new blocks. Display the case study as written on the site.
- When displaying a list of case studies, do not invent new blocks. Display the case studies as written on the site and make sure they are clickable to the individual case study pages.

IMAGES: ${IMAGE_REFS}

KNOWLEDGE:
${KNOWLEDGE}`
