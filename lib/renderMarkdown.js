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

  content.services?.forEach(service => {
    lines.push(`## ${stripHtml(service.title)}`)
    lines.push("")
    lines.push(service.blurb)
    lines.push("")

    service.bullets?.forEach(bullet => {
      lines.push(`- ${bullet}`)
    })
    if (service.bullets) lines.push("")

    lines.push(`[${service.linkLabel}](${siteUrl}${service.href})`)
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

// Rewrite root-relative markdown links to absolute URLs for off-site consumption.
const absolutize = (text) => text.replace(/\]\(\//g, `](${siteUrl}/`)

export function renderPostMarkdown(post) {
  const lines = []

  lines.push(`# ${stripHtml(post.title)}`)
  lines.push("")
  lines.push(`By Loan Laux, founder of out:grow. Published ${post.date}.${post.updated ? ` Updated ${post.updated}.` : ""}`)
  lines.push("")

  post.answer?.forEach(paragraph => {
    lines.push(absolutize(paragraph))
    lines.push("")
  })

  if (post.takeaways?.length) {
    lines.push("## Key takeaways")
    lines.push("")
    post.takeaways.forEach(takeaway => lines.push(`- ${absolutize(takeaway)}`))
    lines.push("")
  }

  post.sections?.forEach(section => {
    lines.push(`## ${section.heading}`)
    lines.push("")

    section.paragraphs?.forEach(paragraph => {
      lines.push(absolutize(paragraph))
      lines.push("")
    })

    if (section.list) {
      section.list.forEach(item => lines.push(`- ${absolutize(item)}`))
      lines.push("")
    }

    if (section.steps) {
      section.steps.forEach((step, index) => lines.push(`${index + 1}. **${step.title}**: ${absolutize(step.body)}`))
      lines.push("")
    }

    if (section.bullets) {
      section.bullets.forEach(bullet => lines.push(`- **${bullet.title}**: ${absolutize(bullet.body)}`))
      lines.push("")
    }

    if (section.table) {
      lines.push(`| ${section.table.columns.join(" | ")} |`)
      lines.push(`| ${section.table.columns.map(() => "---").join(" | ")} |`)
      section.table.rows.forEach(row => lines.push(`| ${row.join(" | ")} |`))
      lines.push("")
    }

    if (section.cta) {
      lines.push(`[${section.cta.text}](${siteUrl}${section.cta.href})`)
      lines.push("")
    }
  })

  if (post.faq?.length) {
    lines.push("## Frequently asked questions")
    lines.push("")
    post.faq.forEach(({ q, a }) => {
      lines.push(`### ${q}`)
      lines.push("")
      lines.push(absolutize(a))
      lines.push("")
    })
  }

  lines.push("---")
  lines.push("")
  lines.push(`Canonical: ${siteUrl}/blog/${post.slug}`)
  lines.push("")
  lines.push(`out:grow helps 5-to-50-person agencies adopt AI through [workflow audits](${siteUrl}/ai-audits), [team training](${siteUrl}/ai-training), and [embedded support](${siteUrl}/ai-support).`)

  return lines.join("\n")
}

export function renderBlogIndexMarkdown(posts) {
  const lines = []

  lines.push("# The out:grow blog")
  lines.push("")
  lines.push("Practical guides on AI adoption for small and mid-sized agencies, written by Loan Laux, founder of out:grow.")
  lines.push("")

  posts.forEach(post => {
    lines.push(`- [${stripHtml(post.title)}](${siteUrl}/blog/${post.slug}.md) (${post.date}): ${post.excerpt}`)
  })
  lines.push("")

  return lines.join("\n")
}
