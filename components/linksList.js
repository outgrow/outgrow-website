"use client"

import styled from "styled-components"
import media from "../styles/mediaQueries"
import { black, blue } from "../styles/colors"

const List = styled.ul`
  list-style: none;
  margin-top: 1.5rem;
  ${media.tablet`margin-left: 28rem;`}
  ${media.laptop`margin-right: 13rem;`}
`

const ListItem = styled.li`
  margin-bottom: 1.2rem;
`

const LinkAnchor = styled.a`
  color: rgb(${blue});
  font-weight: 800;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const Description = styled.p`
  color: rgb(${black});
  font-weight: 100;
  margin-top: .2rem;
`

const LinksList = ({ links }) => (
  <List>
    {links.map(link => (
      <ListItem key={link.href}>
        <LinkAnchor href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</LinkAnchor>
        {link.description && <Description>{link.description}</Description>}
      </ListItem>
    ))}
  </List>
)

export default LinksList
