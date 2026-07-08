"use client"

import Link from "next/link"
import styled from "styled-components"
import Kicker from "./kicker"
import OrbField from "./orbField"
import media from "../styles/mediaQueries"
import { glass } from "../styles/glass"
import { black, blue, green, lightBlue } from "../styles/colors"
import { withAccentedPeriod } from "../lib/typography"

const Section = styled.section`
  position: relative;
  overflow: hidden;
`

const Inner = styled.div`
  position: relative;
  z-index: 1;

  max-width: 72rem;
  margin: 0 auto;

  padding: 4.5rem 1.2rem 5.5rem;
  ${media.smallTablet`padding: 5.5rem 3rem 6.5rem;`}

  display: grid;
  gap: 2.5rem;
  ${media.tablet`
    grid-template-columns: 1.1fr .9fr;
    gap: 4rem;
    align-items: start;
  `}
`

const Title = styled.h2`
  font-size: clamp(2rem, 4.5vw, 3rem);
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1.08;
  color: rgb(${black});
  margin-top: 1rem;
`

const Paragraph = styled.p`
  margin-top: 1.2rem;
  font-size: 1.04rem;
  line-height: 1.7;
  color: rgba(${black}, .7);
`

const MeetLink = styled(Link)`
  display: inline-block;
  margin-top: 1.6rem;

  font-size: .98rem;
  font-weight: 600;
  color: rgb(${blue});
  text-decoration: none;

  & span {
    display: inline-block;
    margin-left: .35rem;
    transition: transform .2s ease;
  }

  &:hover span {
    transform: translateX(4px);
  }
`

const Facts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`

const Fact = styled.div`
  ${glass}
  border-radius: 20px;
  padding: 1.4rem 1.3rem;
`

const Value = styled.p`
  font-size: clamp(1.6rem, 3vw, 2.1rem);
  font-weight: 900;
  letter-spacing: -0.02em;
  color: rgb(${blue});
`

const Label = styled.p`
  margin-top: .45rem;
  font-size: .88rem;
  line-height: 1.5;
  color: rgba(${black}, .62);
`

export default function WhyStrip({ why }) {
  return (
    <Section>
      <OrbField orbs={[
        { color: lightBlue, size: "38rem", top: "-6rem", right: "-12rem", opacity: .36 },
        { color: green, size: "26rem", bottom: "-10rem", left: "-8rem", opacity: .2 },
      ]} />

      <Inner>
        <div>
          <Kicker accent={blue}>{why.kicker}</Kicker>
          <Title dangerouslySetInnerHTML={{ __html: withAccentedPeriod(why.title, blue) }} />
          {why.paragraphs.map((paragraph, index) => (
            <Paragraph key={index}>{paragraph}</Paragraph>
          ))}
          <MeetLink href={why.link.href}>{why.link.label}<span>&rarr;</span></MeetLink>
        </div>

        <Facts>
          {why.facts.map(fact => (
            <Fact key={fact.value}>
              <Value>{fact.value}</Value>
              <Label>{fact.label}</Label>
            </Fact>
          ))}
        </Facts>
      </Inner>
    </Section>
  )
}
