import Nav from "../../components/nav"
import Footer from "../../components/footer"
import Hero from "../../components/hero"
import PageSections from "../../components/pageSections"
import privacy from "../../content/privacy"
import { blue, lightBlue } from "../../styles/colors"

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
      <Nav />

      <main>
        <Hero
          accent={blue}
          glow={[lightBlue]}
          compact
          kicker="privacy:policy"
          title="Privacy policy."
          body={[privacy.metaDescription]}
          trust={`Last updated: ${privacy.updated}`}
        />

        <PageSections accent={blue} numbered={false} sections={privacy.sections} />
      </main>

      <Footer showCta={false} />
    </div>
  )
}
