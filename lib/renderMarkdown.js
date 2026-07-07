const siteUrl = "https://outgrow.io"

const stripHtml = (text) => text.replace(/<br\s*\/?>/gi, " ").replace(/<[^>]+>/g, "")

export function renderPageMarkdown(content) {
  const lines = []

  lines.push(`# ${stripHtml(content.hero?.title || content.metaTitle)}`)
  lines.push("")
  lines.push(content.metaDescription)
  lines.push("")

  content.hero?.body?.forEach(paragraph => {
    lines.push(paragraph)
    lines.push("")
  })

  content.sections?.forEach(section => {
    lines.push(`## ${section.title}`)
    lines.push("")

    section.paragraphs?.forEach(paragraph => {
      lines.push(paragraph)
      lines.push("")
    })

    section.bullets?.forEach(bullet => {
      lines.push(`- **${bullet.title}**: ${bullet.body}`)
    })
    if (section.bullets) lines.push("")

    if (section.cta) {
      lines.push(`[${section.cta.text}](${siteUrl}${section.cta.href})`)
      lines.push("")
    }
  })

  content.pillars?.forEach(pillar => {
    lines.push(`## ${stripHtml(pillar.title)}`)
    lines.push("")
    lines.push(`[${pillar.buttonText}](${siteUrl}${pillar.buttonHref})`)
    lines.push("")
  })

  if (content.links) {
    lines.push("## Elsewhere")
    lines.push("")
    content.links.forEach(link => {
      lines.push(`- [${link.label}](${link.href})${link.description ? `: ${link.description}` : ""}`)
    })
    lines.push("")
  }

  return lines.join("\n")
}
