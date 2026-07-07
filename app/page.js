import Nav from "../components/nav"
import Footer from "../components/footer"
import HomeSection from "../components/homeSection"
import home from "../content/home"
import * as colors from "../styles/colors"

export const metadata = {
  description: home.metaDescription,
  alternates: { canonical: "/" },
}

export default function HomePage() {
  return (
    <div>
      <Nav />

      {home.pillars.map(pillar => (
        <HomeSection
          key={pillar.buttonHref}
          backgroundImage={pillar.backgroundImage}
          buttonColor={colors[pillar.buttonColorName]}
          buttonHref={pillar.buttonHref}
          buttonText={pillar.buttonText}
          overlayColor={colors[pillar.overlayColorName]}
          title={pillar.title}
        />
      ))}

      <Footer />
    </div>
  )
}
