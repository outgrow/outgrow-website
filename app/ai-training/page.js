import Nav from "../../components/nav"
import Footer from "../../components/footer"
import Hero from "../../components/hero"
import PageSections from "../../components/pageSections"
import aiTraining from "../../content/aiTraining"
import { lightBlue, red } from "../../styles/colors"

export const metadata = {
  title: aiTraining.metaTitle,
  description: aiTraining.metaDescription,
  alternates: { canonical: aiTraining.path },
  openGraph: { title: aiTraining.metaTitle, description: aiTraining.metaDescription },
  twitter: { title: aiTraining.metaTitle, description: aiTraining.metaDescription },
}

export default function AiTrainingPage() {
  return (
    <div>
      <Nav />

      <main>
        <Hero
          accent={red}
          glow={[red, lightBlue]}
          kicker={aiTraining.hero.kicker}
          title={aiTraining.hero.title}
          body={aiTraining.hero.body}
          cta={aiTraining.hero.cta}
          secondary={aiTraining.hero.secondary}
        />

        <PageSections id="section-content" accent={red} sections={aiTraining.sections} />
      </main>

      <Footer />
    </div>
  )
}
