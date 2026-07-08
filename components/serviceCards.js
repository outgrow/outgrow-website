"use client"

import Link from "next/link"
import styled from "styled-components"
import Kicker from "./kicker"
import OrbField from "./orbField"
import media from "../styles/mediaQueries"
import { glass } from "../styles/glass"
import * as colors from "../styles/colors"
import { withAccentedPeriod } from "../lib/typography"

const { black, blue, green, lightBlue, red } = colors

const Section = styled.section`
  position: relative;
  overflow: hidden;
`

const Inner = styled.div`
  position: relative;
  z-index: 1;

  max-width: 72rem;
  margin: 0 auto;

  padding: 4.5rem 1.2rem;
  ${media.smallTablet`padding: 5.5rem 3rem;`}
`

const Title = styled.h2`
  font-size: clamp(2rem, 4.5vw, 3rem);
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1.08;
  color: rgb(${black});
  margin-top: 1rem;
`

const Lead = styled.p`
  margin-top: 1rem;
  max-width: 38rem;
  font-size: 1.05rem;
  line-height: 1.65;
  color: rgba(${black}, .66);
`

const Grid = styled.div`
  display: grid;
  gap: 1.2rem;
  margin-top: 2.8rem;

  ${media.tablet`grid-template-columns: repeat(3, 1fr);`}
`

const Card = styled(Link)`
  ${glass}
  border-radius: 24px;
  padding: 1.8rem 1.7rem 1.6rem;

  display: flex;
  flex-direction: column;
  text-decoration: none;

  transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(${props => props.$accent}, .45);
    box-shadow: 0 20px 44px rgba(${props => props.$accent}, .16);
  }
`

const Number = styled.p`
  font-size: .95rem;
  font-weight: 900;
  letter-spacing: .12em;
  color: rgb(${props => props.$accent});
`

const CardTitle = styled.h3`
  font-size: 1.45rem;
  font-weight: 900;
  letter-spacing: -0.02em;
  line-height: 1.15;
  color: rgb(${black});
  margin-top: .9rem;
`

const Blurb = styled.p`
  font-size: .97rem;
  line-height: 1.6;
  color: rgba(${black}, .68);
  margin-top: .7rem;
  flex-grow: 1;
`

const List = styled.ul`
  list-style: none;
  margin-top: 1.2rem;
`

const Item = styled.li`
  font-size: .9rem;
  font-weight: 500;
  color: rgba(${black}, .75);
  padding: .28rem 0;

  &::before {
    content: ":";
    font-weight: 900;
    color: rgb(${props => props.$accent});
    margin-right: .5rem;
  }
`

const More = styled.p`
  margin-top: 1.5rem;
  font-size: .95rem;
  font-weight: 600;
  color: rgb(${props => props.$accent});

  & span {
    display: inline-block;
    margin-left: .35rem;
    transition: transform .2s ease;
  }

  ${Card}:hover & span {
    transform: translateX(4px);
  }
`

export default function ServiceCards({ id, intro, services }) {
  return (
    <Section id={id}>
      <OrbField orbs={[
        { color: lightBlue, size: "42rem", top: "-8rem", left: "-12rem", opacity: .42 },
        { color: red, size: "34rem", top: "12rem", right: "-10rem", opacity: .26 },
        { color: green, size: "38rem", bottom: "-18rem", left: "32%", opacity: .32 },
      ]} />

      <Inner>
        <Kicker accent={blue}>{intro.kicker}</Kicker>
        <Title dangerouslySetInnerHTML={{ __html: withAccentedPeriod(intro.title, blue) }} />
        <Lead>{intro.lead}</Lead>

        <Grid>
          {services.map(service => {
            const accent = colors[service.accentName]

            return (
              <Card key={service.href} href={service.href} $accent={accent}>
                <Number $accent={accent}>{service.number}:</Number>
                <CardTitle dangerouslySetInnerHTML={{ __html: withAccentedPeriod(service.title, accent) }} />
                <Blurb>{service.blurb}</Blurb>
                <List>
                  {service.bullets.map(bullet => (
                    <Item key={bullet} $accent={accent}>{bullet}</Item>
                  ))}
                </List>
                <More $accent={accent}>{service.linkLabel}<span>&rarr;</span></More>
              </Card>
            )
          })}
        </Grid>
      </Inner>
    </Section>
  )
}
