import React, { Component } from "react"
import styled from "styled-components"
import {
  Footer,
  Head,
  Nav,
  ServicePageHeader as Header,
  Title,
  Paragraph,
  Wire
} from "../components"
import media from "../styles/mediaQueries"
import { blue, lightBlue } from "../styles/colors"

const PageWrapper = styled.div`
  padding: 1.2rem;
  ${media.smallTablet`padding: 3rem;`}
`

const Calendly = styled.div`
  min-width: 286px;
  height: 925px;
  
  ${media.tablet`margin-left: 28rem;`}
`

class FreeConsultation extends Component {
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
        <Head title="Get a Free Consultation With Our Experts | Top Engineers Specialized in Reaction Commerce, BigCommerce, Workarea & Salesforce Commerce Cloud | out:grow" />

        <Nav />

        <Header
          backgroundImage="/static/contact.jpg"
          body={[
            "Do you have technical questions that need answers? Fill in the form below and book a free 30-minute consultation with our experts on your time, or set up a face-to-face meeting at our Dubai or Los Angeles offices."
          ]}
          buttonText="Book now"
          buttonTextColor={blue}
          overlayColor={lightBlue}
          title="Get a free consultation."
        />
   
        <Wire color={blue} />

        <PageWrapper id="section-content">
          <Title color={blue}>Let's answer your questions.</Title>
     
          <Paragraph style={{ marginBottom: "2rem" }}>Whether you have technical questions on Reaction Commerce, BigCommerce, Workarea, Salesforce Commerce Cloud, or you want to discuss how our engineers can help you bring your projects to life — book your free 30-minute consultation below. Slots are available 7 days a week, 24 hours a day.</Paragraph>
          <Calendly
            className="calendly-inline-widget"
            data-url="https://calendly.com/outgrow-free-consultation/30-min"
          />
        </PageWrapper>
    
        <Footer />
      </div>
    )
  }
}

export default FreeConsultation

