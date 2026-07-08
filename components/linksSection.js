"use client"

import styled from "styled-components"
import Kicker from "./kicker"
import LinksList from "./linksList"
import media from "../styles/mediaQueries"
import { black } from "../styles/colors"
import { withAccentedPeriod } from "../lib/typography"

const Wrapper = styled.div`
  max-width: 72rem;
  margin: 0 auto;

  padding: 0 1.2rem 4.5rem;
  ${media.smallTablet`padding: 0 3rem 6rem;`}
`

const Title = styled.h2`
  font-size: clamp(1.75rem, 3.4vw, 2.35rem);
  font-weight: 900;
  letter-spacing: -0.025em;
  color: rgb(${black});
  margin-top: .7rem;
`

const LinksSection = ({ color, kicker, links, title }) => (
  <Wrapper>
    {kicker && <Kicker accent={color}>{kicker}</Kicker>}
    <Title dangerouslySetInnerHTML={{ __html: withAccentedPeriod(title, color) }} />
    <LinksList links={links} />
  </Wrapper>
)

export default LinksSection
