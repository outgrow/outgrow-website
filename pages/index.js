import React from "react"
import Head from "../components/head"
import Nav from "../components/nav"
import HomeSection from "../components/homeSection"
import Footer from "../components/footer"
import { blue, lightBlue, red, green } from "../styles/colors"

const Home = () => (
  <div>
    <Head title="Technical E-Commerce Consulting, Training & Emergency Support | out:grow" />
    <Nav />

    <HomeSection
      backgroundImage="/consulting"
      buttonColor={blue}
      buttonHref="/ecommerce-consulting"
      buttonText="Consulting"
      overlayColor={lightBlue}
      title="E-commerce<br/><nobr>technology</nobr><br/>consulting."
    />

    <HomeSection
      backgroundImage="/training"
      buttonColor={red}
      buttonHref="/developer-training"
      buttonText="Training"
      overlayColor={red}
      title="Expert<br/><nobr>developer</nobr><br/>training."
    />

    <HomeSection
      backgroundImage="/emergency"
      buttonColor={green}
      buttonHref="/support-plans"
      buttonText="Support plans"
      overlayColor={green}
      title="Emergency<br/>developer support. 24/7."
    />

    <Footer />
  </div>
)

export default Home

