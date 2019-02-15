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
        <Head title="Reaction Commerce Demo | Real-World Example | out:grow" />
        <Nav />

        <Header
          backgroundImage="/static/contact.jpg"
          body={[
            "Are you currently evaluating Reaction Commerce as a solution for your next project? Looking for a demo of the platform to make your own opinion?",
            "You're at the right place. Our expert Reaction Commerce consultants will show you around."
          ]}
          buttonText="Get a demo"
          buttonTextColor={blue}
          overlayColor={lightBlue}
          title="Reaction Commerce demo session."
        />

        <Wire color={blue} />
  
        <PageWrapper id="section-content">
          <Title color={blue}>Reaction Commerce demo website.</Title>
    
          <Paragraph>Are you looking for the official Reaction demo website? Taking into account Reaction Commerce's flexible and project-focused architecture, building a one-size-fits-all demo website would not showcase the solution's proven capabilities in terms of customization. This is why the engineering team at Reaction Commerce has chosen not to build such an example website.</Paragraph>

          <Paragraph>However, this doesn't mean that you can't easily get an idea of how Reaction works and whether it would be a good fit for your next e-commerce project. Our team of engineers have walked numerous clients through Reaction Commerce since the beta era in 2016.</Paragraph>

          <Title color={blue}>Book a private demo session.</Title>

          <Paragraph style={{ marginBottom: "2rem" }}>Pick a time below for our consultants to show you around Reaction Commerce in a free 30-minute session. Bring your questions along, as we'll make sure you leave with all the information you need in order to make an informed decision on which platform to use.</Paragraph>

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

