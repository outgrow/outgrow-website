import { ImageResponse } from "next/og"
import { ogImageNode, size, contentType } from "../../../lib/ogImage"
import { postAccent, posts, postsBySlug } from "../../../content/blog"

export { size, contentType }

export function generateStaticParams() {
  return posts.map(post => ({ slug: post.slug }))
}

export default async function Image({ params }) {
  const { slug } = await params
  const post = postsBySlug[slug]

  return new ImageResponse(
    ogImageNode({
      title: post.metaTitle + ".",
      subtitle: post.excerpt,
      accent: postAccent(post),
    }),
    size,
  )
}
