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
    <Head title="Is Mailchimp Open Commerce (formerly Reaction Commerce) Right for Your Business? | out:grow" />
    <Nav />

    <Header
      backgroundImage="/contact.jpg"
      body={[
        "Are you evaluating Mailchimp Open Commerce as a solution for your next e-commerce project? Unsure whether it is the right fit for your business?",
        "We've helped ship countless projects with Reaction and other next-generation solutions. Let us answer your questions."
      ]}
      buttonText="Learn how it compares"
      buttonTextColor={blue}
      overlayColor={lightBlue}
      title="Is Open Commerce the right fit?"
    />

    <Wire color={blue} />

    <PageWrapper id="section-content">
      <Title color={blue}>Why Mailchimp Open Commerce?</Title>

      <Paragraph>In the world of e-commerce solutions, two very distinct categories stand out. On one hand, the older, open-source, often PHP (Magento, OpenCart) or ASP.Net (NopCommerce) based solutions on which total control is given in terms of deployment. And on the other hand, the newer, proprietary, cloud-based SaaS solutions such as Salesforce Commerce Cloud and BigCommerce.</Paragraph>

      <Paragraph>In this scattered market, enterprise retailers usually end up choosing SaaS solutions because of their more modern architecture and technologies. However, this choice is made at the expense of flexibility and hosting costs.</Paragraph>

      <Paragraph>Mailchimp Open Commerce (formerly Reaction Commerce) bridges this gap, allowing enterprise retailers to benefit from the latest web technologies (Node.js, React, MongoDB) while keeping total control over their deployment process and hosting expenses. The open-source solution can be deployed on any private or public cloud thanks to it being built around Docker.</Paragraph>

      <Title color={blue}>Book a free consulting session.</Title>

      <Paragraph style={{ marginBottom: "2rem" }}>Pick a time below to book a complimentary 30-minute pre-project consulting session. Our expert engineers will gather your requirements and help you clarify whether Mailchimp Open Commerce is the right fit for your next e-commerce project.</Paragraph>

      <CalendarWrapper>
        <Calendar scrolling="no" src="https://outlook.office365.com/owa/calendar/outgrow1@outgrow.io/bookings/s/USe6nozcF0iyeiGi5TU2lA2" />
      </CalendarWrapper>
    </PageWrapper>

    <Footer />
  </div>
)

