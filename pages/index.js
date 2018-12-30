import React from "react"
import Head from "../components/head"
import Nav from "../components/nav"
import HomeSection from "../components/homeSection"

const Home = () => (
  <div>
    <Head title="E-Commerce Consulting & Emergency Response | out:grow" />
    <Nav />
    
    <HomeSection
      buttonHref="/consulting"
      buttonText="Learn more"
      title="Redefining e-commerce consulting."
    /> 
  </div>
)

export default Home

