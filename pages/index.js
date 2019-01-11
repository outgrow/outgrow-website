import React from "react"
import Head from "../components/head"
import Nav from "../components/nav"
import HomeSection from "../components/homeSection"
import { blue, lightBlue, red, green } from "../styles/colors"

const Home = () => (
  <div>
    <Head title="E-Commerce Consulting & Emergency Response | out:grow" />
    <Nav />
    
    <HomeSection
      backgroundImage="/static/consulting.jpg"
      buttonColor={blue}
      buttonHref="/ecommerce-consulting"
      buttonText="Learn more"
      overlayColor={lightBlue}
      title="Redefining<br/><nobr>e-commerce</nobr><br/>consulting."
    />

    <HomeSection
      backgroundImage="/static/training.jpg"
      buttonColor={red}
      buttonHref="/developer-training"
      buttonText="Learn more"
      overlayColor={red}
      title="Providing<br/><nobr>ROI-focused</nobr><br/>training."
    />

    <HomeSection
      backgroundImage="/static/emergency.jpg"
      buttonColor={green}
      buttonHref="/emergency-response"
      buttonText="Learn more"
      overlayColor={green}
      title="Emergency?<br/>We have your back. 24/7."
    />
  </div>
)

export default Home

