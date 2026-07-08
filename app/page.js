import Nav from "../components/nav"
import Footer from "../components/footer"
import Hero from "../components/hero"
import ServiceCards from "../components/serviceCards"
import WhyStrip from "../components/whyStrip"
import home from "../content/home"
import { blue, green, lightBlue, red } from "../styles/colors"

export const metadata = {
  description: home.metaDescription,
  alternates: { canonical: "/" },
}

export default function HomePage() {
  return (
    <div>
      <Nav />

      <main>
        <Hero
          accent={blue}
          glow={[lightBlue, green, red]}
          kicker={home.hero.kicker}
          title={home.hero.title}
          body={home.hero.body}
          cta={home.hero.cta}
          secondary={home.hero.secondary}
          trust={home.hero.trust}
        />

        <ServiceCards id="services" intro={home.servicesIntro} services={home.services} />

        <WhyStrip why={home.why} />
      </main>

      <Footer />
    </div>
  )
}
