import React from "react"
import styled from "styled-components"
import Head from "../components/head"
import Nav from "../components/nav"
import Header from "../components/servicePageHeader"
import Button from "../components/button"

const Title = styled.h2`
  color: rgb(221, 28, 26);
  font-size: 2.4rem;
  font-weight: 800;
  letter-spacing: -2px;
  margin: 1.3rem 0;
`

const PageWrapper = styled.div`
  padding: 0 1.2rem;
`

const Paragraph = styled.p`
  color: rgb(11, 11, 11);
  margin-top: 1rem;
`

const Red = styled.span`
  color: rgb(221, 28, 26);
`

const ButtonWrapper = styled.div`
  display: inline-block;
  margin: 1.5rem 0;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`

const Training = () => (
  <div>
    <Head title="E-Commerce Developer Training | Private Coaching Calls | On-Site Training | Online Courses | out:grow" />
    <Nav />
    
    <Header
      backgroundImage="/static/training.jpg"
      body={[
        "A well-trained team is the very root of well-built projects. Make your project managers and developers learn from the best with out:grow’s training programs.",
        "While consulting is essential during critical times, training is the way to go for preventing issues from arising."
      ]}
      buttonTextColor="221, 28, 26"
      overlayColor="221, 28, 26"
      title="Learn from the best."
    />
    
    <PageWrapper>
      <Title>In-person group training.</Title>

      <Paragraph>Sometimes, nothing is better than a real person to show you the ropes. Our <Red>in-house group training</Red> program leverage your team’s potential with full-days or half-days of intensive training.</Paragraph>
      <Paragraph><Red>Wherever you are in the world</Red>, our experienced trainers will come to you and <Red>will teach your technical team</Red> anything related to Reaction Commerce, Workarea, Salesforce Commerce Cloud or BigCommerce.</Paragraph>

      <ButtonWrapper>
        <Button backgroundColor="221, 28, 26" color="250, 250, 250" href="#">Book a session</Button>
      </ButtonWrapper>

      <Title>Remote 1-on-1 training.</Title>

      <Paragraph>Some situations cannot wait. When only one of your developers needs <Red>training on a specific topic</Red>, you can count on <Red>out:grow</Red> to quickly set up a 1-on-1 via video conference with one of our expert trainers.</Paragraph>

      <Paragraph>Thanks to the use of <Red>screen sharing</Red>, we make our training sessions more efficient, <Red>allowing to keep your costs low</Red>. And with our <Red>per-minute billing</Red>, you keep total control on your overhead. No more surprises.</Paragraph>
     
      <ButtonWrapper>
        <Button backgroundColor="221, 28, 26" color="250, 250, 250" href="#">Book a 1-on-1</Button>
      </ButtonWrapper>

      <Title>out:grow university.</Title>

      <Paragraph>Because not all teams require live training, and because <Red>today’s professional education has to be on-demand</Red>, we have created <Red>out:grow university</Red>.</Paragraph>
      <Paragraph>Leverage our best trainers’s knowledge and expertise thanks to our pre-recorded tutorial series. With flexibility in mind, <Red>out:grow university</Red> is a platform that your team members can use to consume our educational content from <Red>anywhere and at anytime</Red>.</Paragraph>
      
      <ButtonWrapper>
        <Button backgroundColor="221, 28, 26" color="250, 250, 250" href="#">Sign up</Button>
      </ButtonWrapper>
    </PageWrapper>
  </div>
)

export default Training

