"use client"

import styled from "styled-components"
import Button from "./button"
import Kicker from "./kicker"
import OrbField from "./orbField"
import media from "../styles/mediaQueries"
import { black } from "../styles/colors"
import { withAccentedPeriod } from "../lib/typography"

const glowPresets = [
  { size: "52rem", top: "-16rem", right: "-14rem", opacity: .58 },
  { size: "44rem", bottom: "-22rem", left: "-14rem", opacity: .42 },
  { size: "30rem", top: "34%", right: "26%", opacity: .3 },
]

const Section = styled.section`
  position: relative;
  overflow: hidden;
`

const Inner = styled.div`
  position: relative;
  z-index: 1;

  max-width: 72rem;
  margin: 0 auto;

  padding: 8.5rem 1.2rem 4.5rem;
  ${media.smallTablet`padding: 10.5rem 3rem 5.5rem;`}
`

const Layout = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  gap: 2.4rem;

  ${media.tablet`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 3.5rem;
  `}
`

const TextColumn = styled.div`
  min-width: 0;
`

const Portrait = styled.img`
  flex-shrink: 0;
  width: 8.5rem;
  height: 8.5rem;
  object-fit: cover;
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 12px 36px rgba(11, 11, 11, 0.12);

  ${media.tablet`
    width: 11rem;
    height: 11rem;
  `}
`

const Title = styled.h1`
  font-size: ${props => props.$compact ? "clamp(2.2rem, 4.5vw, 3.2rem)" : "clamp(2.6rem, 6.5vw, 4.6rem)"};
  font-weight: 900;
  letter-spacing: -0.035em;
  line-height: 1.05;
  color: rgb(${black});

  max-width: 56rem;
  margin-top: 1.2rem;
`

const Body = styled.p`
  margin-top: 1.4rem;
  max-width: 42rem;

  font-size: 1.13rem;
  line-height: 1.65;
  color: rgba(${black}, .68);

  & + & {
    margin-top: 1rem;
  }
`

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: .9rem;
  margin-top: 2.4rem;
`

const Trust = styled.p`
  margin-top: 1.2rem;
  font-size: .9rem;
  color: rgba(${black}, .5);
`

// Typographic page hero: colon kicker, display title with accent punctuation,
// blurred orb backdrop. Replaces the old full-viewport photo headers.
const Hero = ({ accent, glow = [], compact, kicker, title, body = [], cta, secondary, trust, portrait }) => (
  <Section>
    <OrbField orbs={glow.map((color, index) => ({ color, ...glowPresets[index % glowPresets.length] }))} />

    <Inner>
      <Layout>
        <TextColumn>
          {kicker && <Kicker accent={accent}>{kicker}</Kicker>}
          <Title $compact={compact} dangerouslySetInnerHTML={{ __html: withAccentedPeriod(title, accent) }} />

          {body.map((paragraph, index) => (
            <Body key={index}>{paragraph}</Body>
          ))}

          {(cta || secondary) && (
            <Row>
              {cta && <Button accent={accent} href={cta.href}>{cta.label}</Button>}
              {secondary && <Button accent={accent} variant="ghost" href={secondary.href}>{secondary.label}</Button>}
            </Row>
          )}

          {trust && <Trust>{trust}</Trust>}
        </TextColumn>

        {portrait && <Portrait src={portrait.src} alt={portrait.alt} />}
      </Layout>
    </Inner>
  </Section>
)

export default Hero
