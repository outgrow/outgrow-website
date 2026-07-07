const siteUrl = "https://outgrow.io"

const routes = [
  { path: "/", priority: 1 },
  { path: "/ai-audits", priority: 0.9 },
  { path: "/ai-training", priority: 0.9 },
  { path: "/ai-support", priority: 0.9 },
  { path: "/founder", priority: 0.7 },
  { path: "/contact", priority: 0.8 },
  { path: "/privacy", priority: 0.3 },
]

export default function sitemap() {
  return routes.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified: "2026-07-06",
    changeFrequency: "monthly",
    priority,
  }))
}
