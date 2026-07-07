import Nav from "../../components/nav"
import Footer from "../../components/footer"
import ServicePageHeader from "../../components/servicePageHeader"
import Wire from "../../components/wire"
import Title from "../../components/title"
import ContactForm from "../../components/contactForm"
import contact from "../../content/contact"
import { blue, lightBlue } from "../../styles/colors"

export const metadata = {
  title: contact.metaTitle,
  description: contact.metaDescription,
  alternates: { canonical: contact.path },
  openGraph: { title: "Get in touch with out:grow.", description: contact.metaDescription },
  twitter: { title: "Get in touch with out:grow.", description: contact.metaDescription },
}

export default function ContactPage() {
  return (
    <div style={{ position: "relative" }}>
      <Nav />

      <ServicePageHeader
        backgroundImage={`${contact.hero.image}.webp`}
        body={contact.hero.body}
        buttonText="Reach out"
        buttonTextColor={blue}
        overlayColor={lightBlue}
        title={contact.hero.title}
      />

      <Wire $color={blue} />

      <div id="section-content" style={{ padding: "1.2rem" }}>
        <Title $color={blue} $noMarginTop>Let's talk.</Title>
        <ContactForm />
      </div>

      <Footer color={blue} />
    </div>
  )
}
