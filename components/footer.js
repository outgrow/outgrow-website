import React from "react"
import styled from "styled-components"
import Link from "next/link"
import { blue, white } from "../styles/colors"

const Footer = styled.footer`
  background: rgb(${blue});

  color: rgb(${white});

  width: 100vw;
  padding: 1rem 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

const List = styled.ul`
  list-style: none;
  ${props => props.right && `text-align: right;`}
`

const ListItem = styled.li`
  margin: .25rem 0;
`

const ListItemLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: rgb(${white});
`

const Copyright = styled.p`
  font-size: .9rem;
`

const AppFooter = () => (
  <Footer>
    <nav>
      <List>
        <ListItem>
          <Link href="/ecommerce-consulting">
            <ListItemLink>E-Commerce Consulting</ListItemLink>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/developer-training">
            <ListItemLink>Developer Training</ListItemLink>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/emergency-response">
            <ListItemLink>Emergency Response</ListItemLink>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/contact">
            <ListItemLink>Contact Us</ListItemLink>
          </Link>
        </ListItem>
      </List>
    </nav>

    <Copyright>Copyright &copy; 2019 Outgrow LLC</Copyright>
    
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
