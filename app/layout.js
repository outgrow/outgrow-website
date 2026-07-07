import "../styles/fonts.css"
import "../styles/globals.css"
import StyledComponentsRegistry from "../lib/registry"

const siteUrl = "https://outgrow.io"

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "out:grow — AI Adoption Consulting for Agencies",
    template: "%s | out:grow",
  },
  description:
    "out:grow helps small and medium web, commerce, and 360 agencies adopt AI into their day-to-day workflows through audits, training, and embedded support.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "out:grow — AI Adoption Consulting for Agencies",
    description:
      "out:grow helps small and medium web, commerce, and 360 agencies adopt AI into their day-to-day workflows through audits, training, and embedded support.",
    url: siteUrl,
    siteName: "out:grow",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "out:grow — AI Adoption Consulting for Agencies",
    description:
      "out:grow helps small and medium web, commerce, and 360 agencies adopt AI into their day-to-day workflows through audits, training, and embedded support.",
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg" }],
  },
  manifest: "/site.webmanifest",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1d1d1d",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "out:grow",
  url: siteUrl,
  description:
    "AI adoption consulting for small and medium web, commerce, and 360 agencies: workflow audits, team training, and embedded AI support.",
  sameAs: [
    "https://www.linkedin.com/in/loanlaux",
    "https://x.com/loanlaux",
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
