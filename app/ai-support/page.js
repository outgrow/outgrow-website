import Nav from "../../components/nav"
import Footer from "../../components/footer"
import ServicePageHeader from "../../components/servicePageHeader"
import Wire from "../../components/wire"
import PageSections from "../../components/pageSections"
import aiSupport from "../../content/aiSupport"
import { green } from "../../styles/colors"

export const metadata = {
  title: aiSupport.metaTitle,
  description: aiSupport.metaDescription,
  alternates: { canonical: aiSupport.path },
  openGraph: { title: aiSupport.metaTitle, description: aiSupport.metaDescription },
  twitter: { title: aiSupport.metaTitle, description: aiSupport.metaDescription },
}

export default function AiSupportPage() {
  return (
    <div style={{ position: "relative" }}>
      <Nav />

      <ServicePageHeader
        backgroundImage={`${aiSupport.hero.image}.webp`}
        body={aiSupport.hero.body}
        buttonTextColor={green}
        overlayColor={green}
        title={aiSupport.hero.title}
      />

      <Wire $color={green} />

      <PageSections id="section-content" color={green} sections={aiSupport.sections} />

      <Footer color={green} />
    </div>
  )
}
