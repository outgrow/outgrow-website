"use client"

import styled from "styled-components"
import Title from "./title"
import LinksList from "./linksList"
import media from "../styles/mediaQueries"

const Wrapper = styled.div`
  padding: 0 1.2rem 3rem;
  ${media.smallTablet`padding: 0 3rem 4rem;`}
`

const LinksSection = ({ color, links, title }) => (
  <Wrapper>
    <Title $color={color} $noMarginTop>{title}</Title>
    <LinksList links={links} />
  </Wrapper>
)

export default LinksSection
