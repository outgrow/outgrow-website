import React, { Component } from "react"
import styled from "styled-components"
import {
  Calendar,
  CalendarWrapper,
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

export default () => (
  <div style={{ position: "relative" }}>
    <Head title="Mailchimp Open Commerce (formerly Reaction Commerce) Demo | Real-World Example | out:grow" />
    <Nav />

    <Header
      backgroundImage="/contact.jpg"
      body={[
        "Are you currently evaluating Mailchimp Open Commerce as a solution for your next project? Looking for a demo of the platform to make your own opinion?",
        "You're at the right place. Our expert Mailchimp Open Commerce consultants will show you around."
      ]}
      buttonText="Get a demo"
      buttonTextColor={blue}
      overlayColor={lightBlue}
      title="Open Commerce demo session."
    />

    <Wire color={blue} />

    <PageWrapper id="section-content">
      <Title color={blue}>Mailchimp Open Commerce demo website.</Title>

      <Paragraph>Are you looking for the official Open Commerce demo website? Taking into account the platform's flexible and project-focused architecture, building a one-size-fits-all demo website would not showcase the solution's proven capabilities in terms of customization. This is why the engineering team at Mailchimp Open Commerce has chosen not to build such an example website.</Paragraph>

      <Paragraph>However, this doesn't mean that you can't easily get an idea of how Open Commerce works and whether it would be a good fit for your next e-commerce project. Our team of engineers have walked numerous clients through Mailchimp Open Commerce (formerly Reaction Commerce) since the beta era in 2016.</Paragraph>

      <Title color={blue}>Book a private demo session.</Title>

      <Paragraph style={{ marginBottom: "2rem" }}>Pick a time below for our consultants to show you around Mailchimp Open Commerce in a free 30-minute session. Bring your questions along, as we'll make sure you leave with all the information you need in order to make an informed decision on which platform to use.</Paragraph>

      <CalendarWrapper>
        <Calendar scrolling="no" src="https://outlook.office365.com/owa/calendar/outgrow1@outgrow.io/bookings/s/Ez-jaQb4hUOX_LR83vDrbg2" />
      </CalendarWrapper>
    </PageWrapper>

    <Footer />
  </div>
)

