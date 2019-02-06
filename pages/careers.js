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

const Emergency = () => (
  <div style={{ position: "relative" }}>
    <Head title="Careers | We Are Hiring! | out:grow" />
    <Nav />
    
    <Header
      backgroundImage="/static/emergency.jpg"
      body={[
        "It's time to upgrade your career. Join our fully remote team from anywhere in the world and experience what it's like to lead the way in e-commerce consulting.",
        "Search for open positions below and show use what you got. Please no resumes or cover letters. We've been in the 21st century for long enough now."
      ]}
      buttonTextColor={blue}
      overlayColor={blue}
      title="An offer you can't refuse."
    />
   
    <Wire color={blue} />

    <PageWrapper id="section-content">
      <Title color={blue}>We're hiring.</Title>
    </PageWrapper>  

    <Footer color={blue} />
  </div>
)

export default Emergency

