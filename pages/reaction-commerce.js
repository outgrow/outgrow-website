import React, { Component } from "react"
import styled from "styled-components"
import {
  Button,
  ButtonWrapper,
  Footer,
  Head,
  Nav,
  Paragraph,
  ServicePageHeader as Header,
  Title,
  Wire
} from "../components"
import { blue, lightBlue, white } from "../styles/colors"
import media from "../styles/mediaQueries"

const PageWrapper = styled.div`
  padding: 1.2rem;
  ${media.smallTablet`
    padding: 3rem;
    max-width: 88rem;
  `}
`

const ButtonIcon = styled.img`
  width: 1.8rem;
  margin-right: 1rem;
`

const ButtonText = styled.p`
  text-align: center;
  padding-right: .5rem;
`

const ButtonCaption = styled.span`
  display: block;
  font-size: .8rem;
  font-weight: 400;
`

const ReactionCommerce = () => (
  <div style={{ position: "relative" }}>
    <Head title="Reaction Commerce Consulting | Top Experts Available | out:grow" />
    <Nav />

    <Header
      backgroundImage="/static/contact.jpg"
      body={[
        "Whether you're evaluating Reaction Commerce or need technical help with an existing project, you're at the right place.",
        "Over the past years, our engineers have helped countless clients build amazing projects on Reaction. Trust the #1 experts on the market."
      ]}
      buttonText="Discover our services"
      buttonTextColor={blue}
      overlayColor={lightBlue}
      title="On-demand Reaction expertise."
    />

    <Wire color={blue} />
  
    <PageWrapper id="section-content">
      <Title color={blue}>Is Reaction Commerce right for you?</Title>
    
      <Paragraph>Are you evaluating your options for an upcoming e-commerce project? Whether you are replatforming or starting from scratch, it never is an easy decision to make. With all of the different solutions available on the market, and the very specific business requirements expressed by your team — it's easy to get lost.</Paragraph>

      <Paragraph>Our experts have walked countless retailers and agencies through their technological choices, and we would be glad to make you benefit from this experience. Book a free 30-minute consultation with them and we'll help you assess which platform would be the best fit given your project's unique characteristics.</Paragraph>

      <ButtonWrapper>
        <Button backgroundColor={blue} color={white} href="/is-reaction-commerce-right">Evaluate your options</Button>
      </ButtonWrapper>

      <Title color={blue}>Reaction Commerce demo.</Title>

      <Paragraph>Are you unsure of what Reaction can bring to your specific use cases? We'll show you around. Let us walk you through its main features and capabilities, focusing on your project's needs and answering all of your questions. Click the button below to learn more and book a free demo session.</Paragraph>

      <ButtonWrapper>
        <Button backgroundColor={blue} color={white} href="/reaction-commerce-demo">Get a demo</Button>
      </ButtonWrapper>

      <Title color={blue}>Expert help on Reaction Commerce.</Title>

      <Paragraph>Has your Reaction project come to a stall? Are your development teams struggling on technical issues? We've seen that happen, and we've helped numerous clients put their projects back on track in tough conditions. Let our team of experts assess the current state of your project in a free 30-minute consultation.</Paragraph>

      <ButtonWrapper>
        <Button backgroundColor={blue} color={white} href="/reaction-commerce-help">Let us help</Button>
      </ButtonWrapper>

      <Title color={blue}>Reaction emergency hotline.</Title>

      <Paragraph>Failed production deployment? Reaction Commerce site down? Get immediate help by dialing our 24/7 emergency support hotline. Because we know that every minutes counts in such situations, our expert engineers will assess your needs and walk your team through until complete resolution of the incident.</Paragraph>
      
      <ButtonWrapper>
        <Button backgroundColor={blue} color={white} href="tel:+12816884769">
          <ButtonIcon src="/static/phone.png" alt="Call" />
          <ButtonText>
            +1 (281) OUT-GROW
            <ButtonCaption>24/7 Emergency Support</ButtonCaption>
          </ButtonText>
        </Button>
      </ButtonWrapper>
 
    </PageWrapper>

    <Footer />
  </div>
)

export default ReactionCommerce

