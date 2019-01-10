import React from "react"
import styled from "styled-components"
import { Button, Head, Nav, ServicePageHeader as Header, Title } from "../components"
import media from "../styles/mediaQueries"
import { green, black, white } from "../styles/colors"

const PageWrapper = styled.div`
  padding: 0 1.2rem;
  ${media.smallTablet`padding: 0 3rem;`}
`

const Paragraph = styled.p`
  color: rgb(${black});
  margin-top: 1rem;
`

const Green = styled.span`
  color: rgb(${green});
`

const ButtonWrapper = styled.div`
  display: inline-block;
  margin: 1.5rem 0;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`

const Emergency = () => (
  <div>
    <Head title="E-Commerce Emergency Response | 24/7 Crisis Hotline | Support Plans | out:grow" />
    <Nav />
    
    <Header
      backgroundImage="/static/emergency.jpg"
      body={[
        "Site down? Failed production deployment? Can’t keep up with the pace on Black Friday? Whatever your emergency is, we at out:grow have your back.",
        "Subscribe to a support plan and our teams will be available around the clock for your needs. Not an out:grow client? Dial our 24/7 emergency hotline and our teams will solve your issue."
      ]}
      buttonTextColor={green}
      overlayColor={green}
      title="We love emergencies."
    />
    
    <PageWrapper>
      <Title color={green}>24/7 crisis hotline.</Title>

      <Paragraph>We know what it's like to see an e-commerce site fail during a Superbowl halftime, on New Year's Eve or during Black Friday.</Paragraph>
      <Paragraph>Because in these situations every minute counts, our 24/7 crisis hotline is available to solve any of your development or architectural issues as quickly as possible.</Paragraph>

      <ButtonWrapper>
        <Button backgroundColor={green} color={white} href="#">(800) 968-0818</Button>
      </ButtonWrapper>

      <Title color={green}>Support plans.</Title>

      <Paragraph>With an out:grow support plan, get the peace of mind of never seeing your business' e-commerce solutions fail again.</Paragraph>

      <Paragraph>If you're an agency, safely provide your clients with 24/7 support and let your team focus on what matters.</Paragraph>
     
      <ButtonWrapper>
        <Button backgroundColor={green} color={white} href="#">Get a quote</Button>
      </ButtonWrapper>
    </PageWrapper>
  </div>
)

export default Emergency

