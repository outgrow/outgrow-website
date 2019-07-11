import React from "react"
import styled from "styled-components"
import Button from "../components/button"
import media from "../styles/mediaQueries"
import { white } from "../styles/colors"

const Overlay = styled.section`
  height: 100%;
  width: 100%;
  ${media.smallTablet`max-width: 27rem;`}

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
  ${props => props.backgroundColor && `background-color: rgb(${props.backgroundColor});`}
  
  html.webplossless & {
    ${props => props.backgroundImage && `background-image: url(${props.backgroundImage}.webp);`}
  }
  
  html.jpeg2000 & {
    ${props => props.backgroundImage && `background-image: url(${props.backgroundImage}.jp2);`}
  }
  
  html.no-jpeg2000.no-webplossless & {
    ${props => props.backgroundImage && `background-image: url(${props.backgroundImage}.jpg);`}
  }
`

const Title = styled.h2`
  color: rgb(${white});
  font-size: 2.4rem;
  ${media.smallTablet`font-size: 3rem;`}
  font-weight: 800;
  letter-spacing: -2px;
`

const ButtonWrapper = styled.div`
  margin-top: 1rem;
`

const HomeSection = ({ backgroundImage, buttonColor, buttonHref, buttonText, overlayColor, title }) => (
  <SectionWithBackgroundImage
    backgroundImage={backgroundImage}
    backgroundColor={buttonColor}
  >
    <Overlay style={{backgroundColor: `rgba(${overlayColor}, .57)`}}>
      <Title dangerouslySetInnerHTML={{__html: title}}/>
      <ButtonWrapper>
        <Button color={buttonColor} href={buttonHref}>{buttonText}</Button>
      </ButtonWrapper>
    </Overlay>
  </SectionWithBackgroundImage>
)

export default HomeSection

