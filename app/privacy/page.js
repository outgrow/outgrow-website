import Nav from "../../components/nav"
import Footer from "../../components/footer"
import PageSections from "../../components/pageSections"
import privacy from "../../content/privacy"
import { blue } from "../../styles/colors"

export const metadata = {
  title: privacy.metaTitle,
  description: privacy.metaDescription,
  alternates: { canonical: privacy.path },
  openGraph: { title: "Privacy Policy | out:grow", description: privacy.metaDescription },
  twitter: { title: "Privacy Policy | out:grow", description: privacy.metaDescription },
}

export default function PrivacyPage() {
  return (
    <div>
      <div style={{ background: `rgb(${blue})`, width: "100%", height: "3.7rem", marginBottom: "2rem" }}>
        <Nav />
      </div>

      <PageSections color={blue} sections={privacy.sections} />

      <Footer color={blue} />
    </div>
  )
}
