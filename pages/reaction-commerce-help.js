import React, { Component } from "react"
import styled from "styled-components"
import {
  Footer,
  Head,
  Nav,
  Paragraph,
  ServicePageHeader as Header,
  Title,
  Wire
} from "../components"
import { blue, lightBlue } from "../styles/colors"
import media from "../styles/mediaQueries"

const PageWrapper = styled.div`
  padding: 1.2rem;
  ${media.smallTablet`
    padding: 3rem;
    max-width: 88rem;
  `}
`

const Calendly = styled.div`
  min-width: 286px;
  height: 925px;
  
  ${media.tablet`margin-left: 28rem;`}
`

class ReactionCommerce extends Component {
  componentDidMount() {
    const script = document.getElementsByTagName("script")[0]
    const tagScript = document.createElement("script")

    tagScript.type = "text/javascript"
    tagScript.async = true
    tagScript.src = "https://assets.calendly.com/assets/external/widget.js"
    
    script.parentNode.insertBefore(tagScript, script)
  }

  render() {
    return (
      <div style={{ position: "relative" }}>
        <Head title="Get Help From Expert Reaction Commerce Developers Now | out:grow" />
        <Nav />

        <Header
          backgroundImage="/static/contact.jpg"
          body={[
            "Are your developers stuck on a tedious bug with Reaction Commerce? Is your project delayed because of technical roadblocks?",
            "We've been through this enough times to show you the way. Our expert Reaction Commerce consultants will help your developers ship on time."
          ]}
          buttonText="Get help with Reaction"
          buttonTextColor={blue}
          overlayColor={lightBlue}
          title="Get Reaction Commerce help now."
        />

        <Wire color={blue} />
  
        <PageWrapper id="section-content">
          <Title color={blue}>We're the Reaction experts.</Title>
    
          <Paragraph>Whether your team needs immediate help to fix a bug which is delaying your project, or expert Reaction Commerce consultants to show them the way during the whole development cycle, you can't go wrong with out:grow.</Paragraph>

          <Paragraph>We've helped our clients ship countless Reaction Commerce projects ever since the first stable version in 2016. Our engineers have helped implement very different requirements from a wide variety of industries, giving them an unmatchable experience on the market.</Paragraph>

          <Title color={blue}>Book a free consulting session.</Title>

          <Paragraph style={{ marginBottom: "2rem" }}>Pick a time below for our consultants to assess your needs in a free 30-minute session. Bring your questions along, and we'll make sure to give your team all the information needed about moving forward with your project.</Paragraph>

          <Calendly
            className="calendly-inline-widget"
            data-url="https://calendly.com/outgrow-free-consultation/reaction-demo"
          />
        </PageWrapper>

        <Footer />
      </div>
    )
  }
}

export default ReactionCommerce

