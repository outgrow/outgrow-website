import { notFound } from "next/navigation"
import Nav from "../../../components/nav"
import Footer from "../../../components/footer"
import Article from "../../../components/article"
import { formatDate, postAccent, postGlow, posts, postsBySlug, readingTime } from "../../../content/blog"

const siteUrl = "https://outgrow.io"

// Strip inline markdown (links, bold) for schema.org text fields.
const plainText = text =>
  text.replace(/\[([^\]]+)\]\([^)\s]+\)/g, "$1").replace(/\*\*/g, "")

export const dynamicParams = false

export function generateStaticParams() {
  return posts.map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = postsBySlug[slug]

  if (!post) return {}

  const url = `${siteUrl}/blog/${post.slug}`

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
      authors: ["Loan Laux"],
    },
    twitter: { title: post.metaTitle, description: post.metaDescription },
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const post = postsBySlug[slug]

  if (!post) notFound()

  const url = `${siteUrl}/blog/${post.slug}`
  const related = (post.related || []).map(relatedSlug => postsBySlug[relatedSlug]).filter(Boolean)

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.metaTitle,
      description: post.metaDescription,
      url,
      mainEntityOfPage: url,
      image: `${url}/opengraph-image`,
      datePublished: post.date,
      dateModified: post.updated || post.date,
      author: {
        "@type": "Person",
        name: "Loan Laux",
        url: `${siteUrl}/founder`,
        sameAs: ["https://www.linkedin.com/in/loanlaux", "https://x.com/loanlaux"],
      },
      publisher: {
        "@type": "Organization",
        name: "out:grow",
        url: siteUrl,
        logo: { "@type": "ImageObject", url: `${siteUrl}/android-chrome-512x512.png` },
      },
    },
    post.faq && {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faq.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: plainText(a) },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
        { "@type": "ListItem", position: 3, name: post.metaTitle, item: url },
      ],
    },
  ].filter(Boolean)

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Nav />

      <main>
        <Article
          post={post}
          accent={postAccent(post)}
          glow={postGlow(post)}
          dateLabel={formatDate(post.date)}
          minutes={readingTime(post)}
          related={related}
        />
      </main>

      <Footer />
    </div>
  )
}
