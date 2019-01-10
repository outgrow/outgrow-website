import React from "react"
import styled from "styled-components"
import dynamic from "next/dynamic"
import { BulletPoint, Button, Head, Nav, ServicePageHeader as Header, Title, Wire } from "../components"
import media from "../styles/mediaQueries"
import { blue, lightBlue, black, white } from "../styles/colors"

const Slider = dynamic(import("react-slick"))

const PageWrapper = styled.div`
  padding: 0 1.2rem;
  ${media.smallTablet`padding: 0 3rem;`}
`

const StyledSlider = styled(Slider)`
  width: 100vw;

  position: relative;
  left: 50%;
  transform: translateX(-50%);

  ${media.tablet`padding-left: 27rem;`}
`

const SliderItem = styled.img`
  height: 2rem;
  width: auto !important;  
  margin: 0 .5rem;
  ${media.smallTablet`margin: 0 2rem;`}
`

const Paragraph = styled.p`
  color: rgb(${black});

  margin-top: 1rem;
  ${media.tablet`margin-left: 28rem;`}
`

const Blue = styled.span`
  color: rgb(${blue});
`

const ButtonWrapper = styled.div`
  display: inline-block;
  
  margin: 1.5rem 0;
  
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  
  ${media.tablet`
    left: 22rem;
    transform: none;
  `}
`

const BulletPointWrapper = styled.div`
  margin-top: 2.5rem;
  ${media.tablet`margin-left: 28rem;`}
`

const Consulting = () => (
  <div style={{ position: "relative", overflow: "hidden" }}>
    <Head title="Technical E-Commerce Consulting | Reaction Commerce, Workarea, Salesforce Commerce Cloud, BigCommerce | out:grow" />
    <Nav />
    
    <Header
      backgroundImage="/static/consulting.jpg"
      body={[
        "Throughought the lifecycle of a project, all technical teams face issues and challenges that they are not prepared for, causing them to get stuck and lose precious time.",
        "Our industry-renowned consulting service gives your team access to our engineers’ invaluable experience, and ensures that your project is kept on track."
      ]}
      buttonTextColor={blue}
      overlayColor={lightBlue}
      title="Your team. Supercharged."
    />
    
    <Wire color={blue} />

    <PageWrapper>
      <Title color={blue}>We know your stack.</Title>
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
        <Button backgroundColor={blue} color={white} href="#">Talk to an expert</Button>
      </ButtonWrapper>

      <Title color={blue}>Mid-project technical advice.</Title>

      <Paragraph>The biggest issues arise either mid-project, or at a critical pre-delivery stage. Too often, <Blue>these roadblocks cause sensible delays</Blue> and force teams to <Blue>postpone deliveries</Blue>.</Paragraph>

      <Paragraph>Here’s how <Blue>out:grow ensures that your developers never get stuck</Blue> so that your project stays on track:</Paragraph>
      
      <BulletPointWrapper>
        <BulletPoint title="Private problem-solving calls" body="Benefit from one-on-one or group video calls with our best engineers." />
        <BulletPoint title="Code reviews" body="Our experts will provide comprehensive code reviews right in your team's pull requests, on GitHub or any other VCS." />
        <BulletPoint title="Unlimited e-mail & chat" body="Give your technical team the assurance of always getting answers to their technical questions via e-mail or Slack." />
      </BulletPointWrapper>

      <ButtonWrapper>
        <Button backgroundColor={blue} color={white} href="#">Supercharge your team</Button>
      </ButtonWrapper>

      <Title color={blue}>Feasability reports.</Title>

      <Paragraph>Are you <Blue>still exploring your options</Blue> for an e-commerce project? A <Blue>custom-tailored feasability report</Blue> will help you make an <Blue>informed business decision</Blue>.</Paragraph>
      <Paragraph>Taking into account your project's unique characteristics, <Blue>our experts will help you decide</Blue> which e-commerce technology is right for you by <Blue>estimating development time</Blue>, warning you of <Blue>technical pitfals</Blue>, and more.</Paragraph>
      
      <ButtonWrapper>
        <Button backgroundColor={blue} color={white} href="#">Order a report</Button>
      </ButtonWrapper>

      <Title color={blue}>Let's talk.</Title>

      <Paragraph>Because every project is different, let us provide <Blue>tailored answers to your questions</Blue>. Speak with one of our consultants today to assess how can out:grow help your business reach new heights.</Paragraph>
      
      <ButtonWrapper>
        <Button backgroundColor={blue} color={white} href="#">Get called back</Button>
      </ButtonWrapper>
    </PageWrapper>
  </div>
)

export default Consulting

