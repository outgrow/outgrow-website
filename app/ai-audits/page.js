import Nav from "../../components/nav"
import Footer from "../../components/footer"
import ServicePageHeader from "../../components/servicePageHeader"
import Wire from "../../components/wire"
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
    <div style={{ position: "relative" }}>
      <Nav />

      <ServicePageHeader
        backgroundImage={`${aiAudits.hero.image}.webp`}
        body={aiAudits.hero.body}
        buttonTextColor={blue}
        overlayColor={lightBlue}
        title={aiAudits.hero.title}
      />

      <Wire $color={blue} />

      <PageSections id="section-content" color={blue} sections={aiAudits.sections} />

      <Footer color={blue} />
    </div>
  )
}
