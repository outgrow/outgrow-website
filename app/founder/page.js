import Nav from "../../components/nav"
import Footer from "../../components/footer"
import Hero from "../../components/hero"
import PageSections from "../../components/pageSections"
import LinksSection from "../../components/linksSection"
import founder from "../../content/founder"
import { blue, green, lightBlue } from "../../styles/colors"

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
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(founderJsonLd) }}
      />

      <Nav />

      <main>
        <Hero
          accent={blue}
          glow={[lightBlue, green]}
          kicker={founder.hero.kicker}
          title={founder.hero.title}
          body={founder.hero.body}
          portrait={founder.hero.portrait}
          cta={founder.hero.cta}
        />

        <PageSections id="section-content" accent={blue} sections={founder.sections} />

        <LinksSection color={blue} kicker="else:where" links={founder.links} title="Elsewhere." />
      </main>

      <Footer />
    </div>
  )
}
