import React from "react"
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
import media from "../styles/mediaQueries"
import { red, black, white } from "../styles/colors"

const PageWrapper = styled.div`
  padding: 1.2rem;
  ${media.smallTablet`padding: 3rem;`}
`

const Red = styled.span`
  color: rgb(${red});
`

const Training = () => (
  <div style={{ position: "relative" }}>
    <Head title="E-Commerce Developer Training | Private Coaching Calls | On-Site Training | Online Courses | out:grow" />
    <Nav />
    
    <Header
      backgroundImage="/static/training.jpg"
      body={[
        "A well-trained team is the very root of well-built projects. Make your project managers and developers learn from the best with out:grow’s training programs.",
        "While consulting is essential during critical times, training is the way to go for preventing issues from arising."
      ]}
      buttonTextColor={red}
      overlayColor={red}
      title="Learn from the best."
    />
    
    <Wire color={red} />

    <PageWrapper id="section-content">
      <Title color={red}>In-person group training.</Title>

      <Paragraph>Sometimes, nothing is better than a real person to show you the ropes. Our <Red>in-house group training</Red> program leverage your team’s potential with full-days or half-days of intensive training.</Paragraph>
      <Paragraph><Red>Wherever you are in the world</Red>, our experienced trainers will come to you and <Red>will teach your technical team</Red> anything related to Reaction Commerce, Workarea, Salesforce Commerce Cloud or BigCommerce.</Paragraph>

      <ButtonWrapper>
        <Button backgroundColor={red} color={white} href="/contact">Book a session</Button>
      </ButtonWrapper>

      <Title color={red}>Remote 1-on-1 training.</Title>

      <Paragraph>Some situations cannot wait. When only one of your developers needs <Red>training on a specific topic</Red>, you can count on <Red>out:grow</Red> to quickly set up a 1-on-1 via video conference with one of our expert trainers.</Paragraph>

      <Paragraph>Thanks to the use of <Red>screen sharing</Red>, we make our training sessions more efficient, <Red>allowing to keep your costs low</Red>. And with our <Red>per-minute billing</Red>, you keep total control on your overhead. No more surprises.</Paragraph>
     
      <ButtonWrapper>
        <Button backgroundColor={red} color={white} href="/contact">Book a 1-on-1</Button>
      </ButtonWrapper>

      <Title color={red}>out:grow university.</Title>

      <Paragraph>Because not all teams require live training, and because <Red>today’s professional education has to be on-demand</Red>, we have created <Red>out:grow university</Red>.</Paragraph>
      <Paragraph>Leverage our best trainers’s knowledge and expertise thanks to our pre-recorded tutorial series. With flexibility in mind, <Red>out:grow university</Red> is a platform that your team members can use to consume our educational content from <Red>anywhere and at anytime</Red>.</Paragraph>
      
      <ButtonWrapper>
        <Button backgroundColor={red} color={white} href="/contact">Sign up</Button>
      </ButtonWrapper>
    </PageWrapper>

    <Footer color={red} />
  </div>
)

export default Training

