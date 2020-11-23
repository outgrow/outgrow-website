import React, { Component } from "react"
import styled from "styled-components"
import {
  Calendar,
  CalendarWrapper,
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

export default () => (
  <div style={{ position: "relative" }}>
    <Head title="Get a Free Consultation With Our Experts | Top Engineers Specialized in Reaction Commerce | out:grow" />

    <Nav />

    <Header
      backgroundImage="/contact.jpg"
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

      <Paragraph style={{ marginBottom: "2rem" }}>Whether you have technical questions on Reaction Commerce, or want to discuss how our engineers can help you bring your projects to life — book your free 30-minute consultation below. Slots are available 7 days a week, 24 hours a day.</Paragraph>

      <CalendarWrapper>
        <Calendar scrolling="no" src="https://outlook.office365.com/owa/calendar/outgrow1@outgrow.io/bookings/s/USe6nozcF0iyeiGi5TU2lA2" />
      </CalendarWrapper>
    </PageWrapper>

    <Footer />
  </div>
)

