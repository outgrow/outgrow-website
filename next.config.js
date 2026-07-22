/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },

  async rewrites() {
    // Markdown mirrors of blog posts for LLM crawlers, matching the /:page.md
    // convention handled by app/[slug]/route.js for the static pages.
    return [{ source: "/blog/:slug.md", destination: "/blog-md/:slug" }]
  },

  async redirects() {
    return [
      { source: "/careers", destination: "/", permanent: true },
      { source: "/free-consultation", destination: "/contact", permanent: true },
      { source: "/developer-training", destination: "/ai-training", permanent: true },
      { source: "/ecommerce-consulting", destination: "/ai-audits", permanent: true },
      { source: "/support-plans", destination: "/ai-support", permanent: true },
      { source: "/reaction-commerce-support-plans", destination: "/ai-support", permanent: true },
      { source: "/is-reaction-commerce-right", destination: "/", permanent: true },
      { source: "/reaction-commerce", destination: "/", permanent: true },
      { source: "/reaction-commerce-chat-support", destination: "/ai-support", permanent: true },
      { source: "/reaction-commerce-demo", destination: "/", permanent: true },
      { source: "/reaction-commerce-help", destination: "/ai-support", permanent: true },
    ]
  },

  async headers() {
    // React dev mode and Turbopack HMR rely on eval(), so 'unsafe-eval' is
    // required in development. It is intentionally omitted in production.
    const isDev = process.env.NODE_ENV !== "production"
    const scriptSrc = ["'self'", "'unsafe-inline'", isDev && "'unsafe-eval'"]
      .filter(Boolean)
      .join(" ")

    const securityHeaders = [
      {
        key: "Content-Security-Policy",
        value: [
          "default-src 'self'",
          `script-src ${scriptSrc}`,
          "style-src 'self' 'unsafe-inline'",
          "img-src 'self' data:",
          "font-src 'self'",
          "connect-src 'self'",
          "frame-ancestors 'none'",
          "base-uri 'self'",
          "form-action 'self'",
        ].join("; "),
      },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "DENY" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
      { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
    ]

    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ]
  },
}

module.exports = nextConfig
