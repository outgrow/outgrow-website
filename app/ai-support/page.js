import Nav from "../../components/nav"
import Footer from "../../components/footer"
import Hero from "../../components/hero"
import PageSections from "../../components/pageSections"
import aiSupport from "../../content/aiSupport"
import { darkGreen, green } from "../../styles/colors"

export const metadata = {
  title: aiSupport.metaTitle,
  description: aiSupport.metaDescription,
  alternates: { canonical: aiSupport.path },
  openGraph: { title: aiSupport.metaTitle, description: aiSupport.metaDescription },
  twitter: { title: aiSupport.metaTitle, description: aiSupport.metaDescription },
}

export default function AiSupportPage() {
  return (
    <div>
      <Nav />

      <main>
        <Hero
          accent={darkGreen}
          glow={[green, darkGreen]}
          kicker={aiSupport.hero.kicker}
          title={aiSupport.hero.title}
          body={aiSupport.hero.body}
          cta={aiSupport.hero.cta}
          secondary={aiSupport.hero.secondary}
        />

        <PageSections id="section-content" accent={darkGreen} sections={aiSupport.sections} />
      </main>

      <Footer />
    </div>
  )
}
