import Nav from "../../components/nav"
import Footer from "../../components/footer"
import ServicePageHeader from "../../components/servicePageHeader"
import Wire from "../../components/wire"
import PageSections from "../../components/pageSections"
import aiTraining from "../../content/aiTraining"
import { red } from "../../styles/colors"

export const metadata = {
  title: aiTraining.metaTitle,
  description: aiTraining.metaDescription,
  alternates: { canonical: aiTraining.path },
  openGraph: { title: aiTraining.metaTitle, description: aiTraining.metaDescription },
  twitter: { title: aiTraining.metaTitle, description: aiTraining.metaDescription },
}

export default function AiTrainingPage() {
  return (
    <div style={{ position: "relative" }}>
      <Nav />

      <ServicePageHeader
        backgroundImage={`${aiTraining.hero.image}.webp`}
        body={aiTraining.hero.body}
        buttonTextColor={red}
        overlayColor={red}
        title={aiTraining.hero.title}
      />

      <Wire $color={red} />

      <PageSections id="section-content" color={red} sections={aiTraining.sections} />

      <Footer color={red} />
    </div>
  )
}
