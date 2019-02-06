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
import { blue, black, white } from "../styles/colors"

const PageWrapper = styled.div`
  padding: 1.2rem;
  ${media.smallTablet`padding: 3rem;`}
`

const Blue = styled.span`
  color: rgb(${blue});
`

const ButtonIcon = styled.img`
  width: 1.8rem;
  margin-right: 1rem;
`

const ButtonText = styled.p`
  text-align: center;
  padding-right: .5rem;
`

const ButtonCaption = styled.p`
  font-size: .8rem;
  font-weight: 400;
`

const JobList = styled.ul`
  list-style: none;
  ${media.tablet`margin-left: 28rem;`}
  margin-top: 3rem;
`

const Job = styled.li`
  margin: .4rem 0;
`

const Emergency = () => (
  <div style={{ position: "relative" }}>
    <Head title="Careers | We Are Hiring! | out:grow" />
    <Nav />
    
    <Header
      backgroundImage="/static/emergency.jpg"
      body={[
        "It's time to upgrade your career. Join our fully remote team from anywhere in the world and experience what it's like to lead the way in e-commerce consulting.",
        "Search for open positions below and show use what you got. Please no resumes or cover letters. We've been in the 21st century for long enough."
      ]}
      buttonTextColor={blue}
      overlayColor={blue}
      title="An offer you can't refuse."
    />
   
    <Wire color={blue} />

    <PageWrapper id="section-content">
      <Title color={blue}>We're hiring.</Title>
      
      <JobList>
        <Job>Business Developer - South-East Asia & Middle East</Job>
        <Job>Business Developer - Americas</Job>
        <Job>Salesforce Commerce Cloud (Demandware) Developer - Worldwide</Job>
        <Job>Reaction Commerce Developer - Worldwide</Job>
        <Job>BigCommerce Developer - Worldwide</Job>
        <Job>Workarea Developer - Worldwide</Job>
        <Job>Key Account Manager - Worldwide</Job>
      </JobList>

      <ButtonWrapper>
        <Button
          backgroundColor={blue}
          color={white}
          href="mailto:careers@outgrow.io"
        >
          {"Apply now"}
        </Button>
      </ButtonWrapper>
    </PageWrapper>  

    <Footer color={blue} />
  </div>
)

export default Emergency

