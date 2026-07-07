import Nav from "../../components/nav"
import Footer from "../../components/footer"
import ServicePageHeader from "../../components/servicePageHeader"
import Wire from "../../components/wire"
import PageSections from "../../components/pageSections"
import LinksSection from "../../components/linksSection"
import founder from "../../content/founder"
import { blue } from "../../styles/colors"

export const metadata = {
  title: { absolute: founder.metaTitle },
  description: founder.metaDescription,
  alternates: { canonical: founder.path },
  openGraph: { title: founder.metaTitle, description: founder.metaDescription },
  twitter: { title: founder.metaTitle, description: founder.metaDescription },
}

const founderJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Loan Laux",
  jobTitle: "Founder",
  worksFor: { "@type": "Organization", name: "out:grow", url: "https://outgrow.io" },
  url: "https://outgrow.io/founder",
  sameAs: founder.links.map(link => link.href),
}

export default function FounderPage() {
  return (
    <div style={{ position: "relative" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(founderJsonLd) }}
      />

      <Nav />

      <ServicePageHeader
        body={founder.hero.body}
        buttonTextColor={blue}
        overlayColor={blue}
        title={founder.hero.title}
      />

      <Wire $color={blue} />

      <PageSections id="section-content" color={blue} sections={founder.sections} />

      <LinksSection color={blue} links={founder.links} title="Elsewhere." />

      <Footer color={blue} />
    </div>
  )
}
