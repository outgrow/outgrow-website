import React from "react"
import styled from "styled-components"
import dynamic from "next/dynamic"
import Head from "../components/head"
import Nav from "../components/nav"
import Header from "../components/servicePageHeader"
import Button from "../components/button"
import BulletPoint from "../components/bulletPoint"

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

const StyledSlider = styled(Slider)`
  width: 100vw;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`

const SliderItem = styled.img`
  height: 2rem;
  width: auto !important;  
  margin: 0 .5rem;
`

const Paragraph = styled.p`
  color: rgb(11, 11, 11);
  margin-top: 1rem;
`

const Blue = styled.span`
  color: rgb(1, 111, 185);
`

const ButtonWrapper = styled.div`
  width: 80%;
  margin 1.5rem auto;
`

const BulletPointWrapper = styled.div`
  margin: 2.5rem 0;
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
      <StyledSlider {...{
        arrows: false,
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
      </StyledSlider>

      <Paragraph>
        Our engineers have accumulated <Blue>over 80 years of experience</Blue> on modern technologies like <Blue>Reaction Commerce</Blue>, <Blue>Workarea</Blue>, <Blue>BigCommerce</Blue> and <Blue>Salesforce Commerce Cloud</Blue>.
      </Paragraph>
      <Paragraph>
        Unlike many consultancy companies, we <Blue>focus exclusively</Blue> on these technologies to provide our clients with a <Blue>truly unique expertise</Blue>.
      </Paragraph>

      <ButtonWrapper>
        <Button backgroundColor="1, 111, 185" color="255, 255, 255" href="#">Talk to an expert</Button>
      </ButtonWrapper>

      <Title>Mid-project technical advice.</Title>

      <Paragraph>The biggest issues arise either mid-project, or at a critical pre-delivery stage. Too often, <Blue>these roadblocks cause sensible delays</Blue> and force teams to <Blue>postpone deliveries</Blue>.</Paragraph>

      <Paragraph>Here’s how <Blue>out:grow ensures that your developers never get stuck</Blue> so that your project stays on track:</Paragraph>
      
      <BulletPointWrapper>
        <BulletPoint title="Private problem-solving calls" body="Benefit from one-on-one or group video calls with our best engineers." />
        <BulletPoint title="Code reviews" body="Our experts will provide comprehensive code reviews right in your team’s pull requests, on GitHub or any other VCS." />
        <BulletPoint title="Unlimited e-mail & chat" body="Give your technical team the assurance of always getting answers to their technical questions via e-mail or Slack." />
      </BulletPointWrapper>
    </PageWrapper>
  </div>
)

export default Consulting

