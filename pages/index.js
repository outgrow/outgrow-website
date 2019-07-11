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
      backgroundImage="/static/consulting"
      buttonColor={blue}
      buttonHref="/ecommerce-consulting"
      buttonText="Consulting"
      overlayColor={lightBlue}
      title="Redefining<br/><nobr>e-commerce</nobr><br/>consulting."
    />

    <HomeSection
      backgroundImage="/static/training"
      buttonColor={red}
      buttonHref="/developer-training"
      buttonText="Training"
      overlayColor={red}
      title="Providing<br/><nobr>ROI-focused</nobr><br/>training."
    />

    <HomeSection
      backgroundImage="/static/emergency"
      buttonColor={green}
      buttonHref="/support-plans"
      buttonText="Support plans"
      overlayColor={green}
      title="Emergency?<br/>We have your back. 24/7."
    />

    <Footer />
  </div>
)

export default Home

