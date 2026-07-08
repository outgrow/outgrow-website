import Nav from "../../components/nav"
import Footer from "../../components/footer"
import ContactSection from "../../components/contactSection"
import contact from "../../content/contact"

export const metadata = {
  title: contact.metaTitle,
  description: contact.metaDescription,
  alternates: { canonical: contact.path },
  openGraph: { title: "Get in touch with out:grow.", description: contact.metaDescription },
  twitter: { title: "Get in touch with out:grow.", description: contact.metaDescription },
}

export default function ContactPage() {
  return (
    <div>
      <Nav />

      <main>
        <ContactSection content={contact} />
      </main>

      <Footer showCta={false} />
    </div>
  )
}
