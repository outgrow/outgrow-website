import Nav from "../../components/nav"
import Footer from "../../components/footer"
import BlogList from "../../components/blogList"
import { formatDate, postAccent, posts, readingTime } from "../../content/blog"

const siteUrl = "https://outgrow.io"

const description =
  "Practical guides on AI adoption for small and mid-sized agencies: workflow audits, team training, Claude Skills, custom agents, tool stacks, and the people problems in between."

export const metadata = {
  title: "Blog: AI Adoption for Agencies",
  description,
  alternates: { canonical: "/blog" },
  openGraph: { title: "The out:grow blog", description, url: `${siteUrl}/blog` },
  twitter: { title: "The out:grow blog", description },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${siteUrl}/blog`,
  name: "The out:grow blog",
  description,
  url: `${siteUrl}/blog`,
  publisher: {
    "@type": "Organization",
    name: "out:grow",
    url: siteUrl,
  },
  blogPost: posts.map(post => ({
    "@type": "BlogPosting",
    headline: post.metaTitle,
    url: `${siteUrl}/blog/${post.slug}`,
    datePublished: post.date,
    author: { "@type": "Person", name: "Loan Laux", url: `${siteUrl}/founder` },
  })),
}

export default function BlogPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Nav />

      <main>
        <BlogList
          posts={posts.map(post => ({
            slug: post.slug,
            title: post.title,
            kicker: post.kicker,
            excerpt: post.excerpt,
            accent: postAccent(post),
            dateLabel: formatDate(post.date),
            minutes: readingTime(post),
          }))}
        />
      </main>

      <Footer />
    </div>
  )
}
