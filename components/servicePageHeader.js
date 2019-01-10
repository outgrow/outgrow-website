import React from "react"
import styled from "styled-components"
import Button from "./button"
import media from "../styles/mediaQueries"

const Overlay = styled.section`
  height: 100%;
  width: 100%;

  padding: 0 1.2rem;
  ${media.smallTablet`padding: 0 3rem;`}

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`

const SectionWithBackgroundImage = styled.div`
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: 50%;
`

const Title = styled.h1`
  color: rgb(250, 250, 250);
  font-size: 2.4rem;
  ${media.smallTablet`font-size: 3rem;`}
  font-weight: 800;
  letter-spacing: -2px;
  margin-bottom: 1.3rem;
`

const Paragraph = styled.p`
  color: rgb(250, 250, 250);
  margin-bottom: 1rem;
`

const ButtonWrapper = styled.div`
  margin: .5rem auto 0 auto;
`

const ServicePageHeader = ({ backgroundImage, body, buttonTextColor, overlayColor, title }) => (
  <SectionWithBackgroundImage style={{ backgroundImage: `url(${backgroundImage})` }}>
    <Overlay style={{ backgroundColor: `rgba(${overlayColor}, .57)` }}>
      <Title>{title}</Title>
      {body.map((bodyParagraph, index) => (
        <Paragraph key={index}>{bodyParagraph}</Paragraph>
      ))}
      <ButtonWrapper>
        <Button color={buttonTextColor} href="#">Learn more</Button>
      </ButtonWrapper>
    </Overlay>
  </SectionWithBackgroundImage>
)

export default ServicePageHeader

