import { renderPostMarkdown } from "../../../lib/renderMarkdown"
import { posts, postsBySlug } from "../../../content/blog"

// Serves blog posts as plain markdown. Reached via the /blog/:slug.md rewrite
// in next.config.js, mirroring the /:page.md routes for the static pages.
export function generateStaticParams() {
  return posts.map(post => ({ slug: post.slug }))
}

export async function GET(_request, { params }) {
  const { slug } = await params
  const post = postsBySlug[slug]

  if (!post) {
    return new Response("Not found", { status: 404 })
  }

  return new Response(renderPostMarkdown(post), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  })
}
