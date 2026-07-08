"use client"

import styled from "styled-components"
import media from "../styles/mediaQueries"
import { glass } from "../styles/glass"
import { black, blue } from "../styles/colors"

const Grid = styled.ul`
  list-style: none;
  display: grid;
  gap: 1rem;
  margin-top: 2rem;

  ${media.smallTablet`grid-template-columns: 1fr 1fr;`}
`

const Card = styled.a`
  ${glass}
  display: block;
  height: 100%;

  border-radius: 16px;
  padding: 1.2rem 1.3rem;
  text-decoration: none;

  transition: transform .2s ease, border-color .2s ease, box-shadow .2s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(${blue}, .45);
    box-shadow: 0 16px 36px rgba(${blue}, .14);
  }
`

const Label = styled.p`
  font-weight: 600;
  font-size: .98rem;
  color: rgb(${blue});

  & span {
    display: inline-block;
    margin-left: .3rem;
    font-size: .85em;
  }
`

const Description = styled.p`
  margin-top: .4rem;
  font-size: .9rem;
  font-weight: 300;
  line-height: 1.55;
  color: rgba(${black}, .65);
`

const LinksList = ({ links }) => (
  <Grid>
    {links.map(link => (
      <li key={link.href}>
        <Card href={link.href} target="_blank" rel="noopener noreferrer">
          <Label>{link.label}<span>&#8599;</span></Label>
          {link.description && <Description>{link.description}</Description>}
        </Card>
      </li>
    ))}
  </Grid>
)

export default LinksList
