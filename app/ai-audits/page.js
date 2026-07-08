import Nav from "../../components/nav"
import Footer from "../../components/footer"
import Hero from "../../components/hero"
import PageSections from "../../components/pageSections"
import aiAudits from "../../content/aiAudits"
import { blue, lightBlue } from "../../styles/colors"

export const metadata = {
  title: aiAudits.metaTitle,
  description: aiAudits.metaDescription,
  alternates: { canonical: aiAudits.path },
  openGraph: { title: aiAudits.metaTitle, description: aiAudits.metaDescription },
  twitter: { title: aiAudits.metaTitle, description: aiAudits.metaDescription },
}

export default function AiAuditsPage() {
  return (
    <div>
      <Nav />

      <main>
        <Hero
          accent={blue}
          glow={[lightBlue, blue]}
          kicker={aiAudits.hero.kicker}
          title={aiAudits.hero.title}
          body={aiAudits.hero.body}
          cta={aiAudits.hero.cta}
          secondary={aiAudits.hero.secondary}
        />

        <PageSections id="section-content" accent={blue} sections={aiAudits.sections} />
      </main>

      <Footer />
    </div>
  )
}
