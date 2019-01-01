import React from "react"
import styled from "styled-components"
import dynamic from "next/dynamic"
import Head from "../components/head"
import Nav from "../components/nav"
import Header from "../components/servicePageHeader"

const Slider = dynamic(import("react-slick"))

const Title = styled.h2`
  color: rgb(1, 111, 185);
  font-size: 2.4rem;
  font-weight: 800;
  letter-spacing: -2px;
  margin: 1.3rem 0;
`

const PageWrapper = styled.div`
  padding: 0 1.2rem;
`

const SliderItem = styled.img`
  height: 2rem;
  width: auto !important;  
  margin: 0 .5rem;
`

const Consulting = () => (
  <div>
    <Head title="E-Commerce Consulting & Emergency Response | out:grow" />
    <Nav />
    
    <Header
      backgroundImage="/static/consulting.jpg"
      body={[
        "Throughought the lifecycle of a project, all technical teams face issues and challenges that they are not prepared for, causing them to get stuck and lose precious time.",
        "Our industry-renowned consulting service gives your team access to our engineers’ invaluable experience, and ensures that your project is kept on track."
      ]}
      buttonTextColor="1, 111, 185"
      overlayColor="51, 151, 246"
      title="Your team. Supercharged."
    />
    
    <PageWrapper>
      <Title>We know your stack.</Title>
      <Slider {...{
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true
      }}>
        <SliderItem src="/static/reaction-logo.png" />
        <SliderItem src="/static/workarea-logo.png" />
        <SliderItem src="/static/salesforce-cc-logo.png" />
        <SliderItem src="/static/bigcommerce-logo.png" />
      </Slider>
    </PageWrapper>
  </div>
)

export default Consulting

