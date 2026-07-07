"use client"

import styled from "styled-components"
import Link from "next/link"
import { blue, white } from "../styles/colors"
import media from "../styles/mediaQueries"

const Footer = styled.footer`
  background: rgb(${props => props.$color || blue});

  color: rgb(${white});

  width: 100vw;
  padding: 1rem 2rem;

  display: flex;
  flex-flow: column;
  ${media.smallTablet`flex-flow: row;`}
  align-items: flex-start;
  ${media.smallTablet`
    align-items: center;
    justify-content: space-between;
  `}
`

const List = styled.ul`
  list-style: none;
  ${media.smallTablet`
    ${props => props.$right && `text-align: right;`}
  `}
`

const ListItem = styled.li`
  margin: .6rem 0;
`

const ListItemLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: rgb(${white});
`

const Copyright = styled.p`
  font-size: .9rem;
  ${media.smallTablet`text-align: center;`}

  margin: .6rem 0;
`

const AppFooter = ({ color }) => (
  <Footer $color={color}>
    <nav>
      <List>
        <ListItem>
          <ListItemLink href="/ai-audits">AI Audits</ListItemLink>
        </ListItem>
        <ListItem>
          <ListItemLink href="/ai-training">AI Training</ListItemLink>
        </ListItem>
        <ListItem>
          <ListItemLink href="/ai-support">AI Support</ListItemLink>
        </ListItem>
        <ListItem>
          <ListItemLink href="/founder">Founder</ListItemLink>
        </ListItem>
        <ListItem>
          <ListItemLink href="/contact">Contact Us</ListItemLink>
        </ListItem>
        <ListItem>
          <ListItemLink href="/privacy">Privacy Policy</ListItemLink>
        </ListItem>
      </List>
    </nav>

    <Copyright>Copyright &copy; 2026 Outgrow FZE. AI adoption consulting for web &amp; commerce agencies.</Copyright>

    <List $right>
      <ListItem>
        <ListItemLink href="mailto:contact@outgrow.io">contact@outgrow.io</ListItemLink>
      </ListItem>
    </List>
  </Footer>
)

export default AppFooter
