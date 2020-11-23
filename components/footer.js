import React from "react"
import styled from "styled-components"
import Link from "next/link"
import { blue, white } from "../styles/colors"
import media from "../styles/mediaQueries"

const Footer = styled.footer`
  background: rgb(${props => props.color || blue});

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
    ${props => props.right && `text-align: right;`}
  `}
`

const ListItem = styled.li`
  margin: .6rem 0;
`

const ListItemLink = styled.a`
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
  <Footer color={color}>
    <nav>
      <List>
        <ListItem>
          <Link href="/ecommerce-consulting" prefetch={true}>
            <ListItemLink>E-Commerce Consulting</ListItemLink>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/developer-training" prefetch={true}>
            <ListItemLink>Developer Training</ListItemLink>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/reaction-commerce-support-plans" prefetch={true}>
            <ListItemLink>Support Plans</ListItemLink>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/contact" prefetch={true}>
            <ListItemLink>Contact Us</ListItemLink>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/careers">
            <ListItemLink>Careers</ListItemLink>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/privacy">
            <ListItemLink>Privacy Policy</ListItemLink>
          </Link>
        </ListItem>
      </List>
    </nav>

    <Copyright>Copyright &copy; 2020 Outgrow FZE</Copyright>

    <List right>
      <ListItem>
        <ListItemLink href="tel:+12816884769">+1 (281) 688-4769</ListItemLink>
      </ListItem>
      <ListItem>
        <ListItemLink href="mailto:contact@outgrow.io">contact@outgrow.io</ListItemLink>
      </ListItem>
    </List>
  </Footer>
)

export default AppFooter

