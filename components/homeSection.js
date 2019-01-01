import React from "react"
import styled from "styled-components"
import Button from "../components/button"

const Overlay = styled.section`
  height: 100%;
  width: 100%;
  padding: 0 1.2rem;
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

const Title = styled.h2`
  color: rgb(250, 250, 250);
  font-size: 2.4rem;
  font-weight: 800;
  letter-spacing: -2px;
`

const HomeSection = ({ backgroundImage, buttonColor, buttonHref, buttonText, overlayColor, title }) => (
  <SectionWithBackgroundImage style={{ backgroundImage: `url(${backgroundImage})` }}>
    <Overlay style={{ backgroundColor: `rgba(${overlayColor}, .57)` }}>
      <Title>{title}</Title>
      <Button color={buttonColor} href={buttonHref}>{buttonText}</Button>
    </Overlay>
  </SectionWithBackgroundImage>
)

export default HomeSection

