import React from "react"
import Head from "../components/head"
import Nav from "../components/nav"
import HomeSection from "../components/homeSection"

const Home = () => (
  <div>
    <Head title="E-Commerce Consulting & Emergency Response | out:grow" />
    <Nav />
    
    <HomeSection
      backgroundImage="/static/consulting.jpg"
      buttonColor="1, 111, 185"
      buttonHref="/ecommerce-consulting"
      buttonText="Learn more"
      overlayColor="51, 151, 246"
      title="Redefining e-commerce consulting."
    />

    <HomeSection
      backgroundImage="/static/training.jpg"
      buttonColor="221, 28, 26"
      buttonHref="/developer-training"
      buttonText="Learn more"
      overlayColor="221, 28, 26"
      title="Providing ROI-focused training."
    />

    <HomeSection
      backgroundImage="/static/emergency.jpg"
      buttonColor="12, 164, 165"
      buttonHref="/emergency-response"
      buttonText="Learn more"
      overlayColor="12, 164, 165"
      title="Emergency? We have your back. 24/7."
    />
  </div>
)

export default Home

