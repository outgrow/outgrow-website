import React from "react"
import styled from "styled-components"
import dynamic from "next/dynamic"
import Head from "../components/head"
import Nav from "../components/nav"
import Header from "../components/servicePageHeader"
import Button from "../components/button"
import BulletPoint from "../components/bulletPoint"
import media from "../styles/mediaQueries"

const Slider = dynamic(import("react-slick"))

const Title = styled.h2`
  color: rgb(1, 111, 185);
  font-size: 2.4rem;
  ${media.smallTablet`font-size: 3rem;`}
  font-weight: 800;
  letter-spacing: -2px;
  margin: 1.3rem 0;
`

const PageWrapper = styled.div`
  padding: 0 1.2rem;
  ${media.smallTablet`padding: 0 3rem;`}
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
  ${media.smallTablet`margin: 0 2rem;`}
`

const Paragraph = styled.p`
  color: rgb(11, 11, 11);
  margin-top: 1rem;
`

const Blue = styled.span`
  color: rgb(1, 111, 185);
`

const ButtonWrapper = styled.div`
  display: inline-block;
  margin: 1.5rem 0;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`

const BulletPointWrapper = styled.div`
  margin-top: 2.5rem;
`

const Consulting = () => (
  <div>
    <Head title="Technical E-Commerce Consulting | Reaction Commerce, Workarea, Salesforce Commerce Cloud, BigCommerce | out:grow" />
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

      <Paragraph>Our engineers have accumulated <Blue>over 80 years of experience</Blue> on modern technologies like <Blue>Reaction Commerce</Blue>, <Blue>Workarea</Blue>, <Blue>BigCommerce</Blue> and <Blue>Salesforce Commerce Cloud</Blue>.</Paragraph>
      <Paragraph>Unlike many consultancy companies, we <Blue>focus exclusively</Blue> on these technologies to provide our clients with a <Blue>truly unique expertise</Blue>.</Paragraph>

      <ButtonWrapper>
        <Button backgroundColor="1, 111, 185" color="250, 250, 250" href="#">Talk to an expert</Button>
      </ButtonWrapper>

      <Title>Mid-project technical advice.</Title>

      <Paragraph>The biggest issues arise either mid-project, or at a critical pre-delivery stage. Too often, <Blue>these roadblocks cause sensible delays</Blue> and force teams to <Blue>postpone deliveries</Blue>.</Paragraph>

      <Paragraph>Here’s how <Blue>out:grow ensures that your developers never get stuck</Blue> so that your project stays on track:</Paragraph>
      
      <BulletPointWrapper>
        <BulletPoint title="Private problem-solving calls" body="Benefit from one-on-one or group video calls with our best engineers." />
        <BulletPoint title="Code reviews" body="Our experts will provide comprehensive code reviews right in your team's pull requests, on GitHub or any other VCS." />
        <BulletPoint title="Unlimited e-mail & chat" body="Give your technical team the assurance of always getting answers to their technical questions via e-mail or Slack." />
      </BulletPointWrapper>

      <ButtonWrapper>
        <Button backgroundColor="1, 111, 185" color="250, 250, 250" href="#">Supercharge your team</Button>
      </ButtonWrapper>

      <Title>Feasability reports.</Title>

      <Paragraph>Are you <Blue>still exploring your options</Blue> for an e-commerce project? A <Blue>custom-tailored feasability report</Blue> will help you make an <Blue>informed business decision</Blue>.</Paragraph>
      <Paragraph>Taking into account your project's unique characteristics, <Blue>our experts will help you decide</Blue> which e-commerce technology is right for you by <Blue>estimating development time</Blue>, warning you of <Blue>technical pitfals</Blue>, and more.</Paragraph>
      
      <ButtonWrapper>
        <Button backgroundColor="1, 111, 185" color="250, 250, 250" href="#">Order a report</Button>
      </ButtonWrapper>

      <Title>Let's talk.</Title>

      <Paragraph>Because every project is different, let us provide <Blue>tailored answers to your questions</Blue>. Speak with one of our consultants today to assess how can out:grow help your business reach new heights.</Paragraph>
      
      <ButtonWrapper>
        <Button backgroundColor="1, 111, 185" color="250, 250, 250" href="#">Get called back</Button>
      </ButtonWrapper>
    </PageWrapper>
  </div>
)

export default Consulting

