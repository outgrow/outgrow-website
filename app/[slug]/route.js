import { renderPageMarkdown } from "../../lib/renderMarkdown"
import home from "../../content/home"
import aiAudits from "../../content/aiAudits"
import aiTraining from "../../content/aiTraining"
import aiSupport from "../../content/aiSupport"
import founder from "../../content/founder"
import contact from "../../content/contact"
import privacy from "../../content/privacy"

const pages = {
  index: home,
  "ai-audits": aiAudits,
  "ai-training": aiTraining,
  "ai-support": aiSupport,
  founder,
  contact,
  privacy,
}

export async function GET(_request, { params }) {
  const { slug } = await params

  if (!slug.endsWith(".md")) {
    return new Response("Not found", { status: 404 })
  }

  const content = pages[slug.slice(0, -3)]

  if (!content) {
    return new Response("Not found", { status: 404 })
  }

  return new Response(renderPageMarkdown(content), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  })
}
