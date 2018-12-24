import React from "react"
import Link from "next/link"
import styled from "styled-components"

const links = [
  { href: "/training", label: "Developer Training" },
  { href: "/consulting", label: "Technical Consulting" },
  { href: "/clients", label: "Our Clients" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact Us" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Wrapper = styled.nav`
  background: black;
  height: 100vh;
`

const List = styled.ul`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`

const ListItem = styled.li`
  text-align: center;
  padding: .5rem 0;
`

const ListItemLink = styled.a`
  color: white;
  text-decoration: none;
`

const Divider = styled.hr`
  width: 90%;
  transform: translate(-50%, 15px);
  z-index: 1;
  position: relative;
  left: 50%;
`

const DividerText = styled.h3`
  display: inline-block;
  text-align: center;
  color: white;
  background: black;
  z-index: 999;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 1rem;
`

const ButtonLink = styled.a`
  display: inline-block;
  background: #016FB9;
  color: white;
  text-decoration: none;
  text-align: center;

  padding: 1rem 2rem;
  margin-top: 2rem;

  border-radius: 68px;
  
  position: relative;
  left: 50%;
  transform: translateX(-50%);

  span {
    font-size: .8rem;
  }
`

const Nav = () => (
  <Wrapper>
    <List>
      {links.map(({ key, href, label }) => (
        <ListItem key={key}>
          <Link href={href}>
            <ListItemLink>{label}</ListItemLink>
          </Link>
        </ListItem>
      ))}

      <ListItem>
        <Divider />
        <DividerText>or</DividerText>
      </ListItem>

      <ListItem>E-Commerce Site Down?</ListItem>
      <ButtonLink href="tel:+18009680818">
        (800) 968-0818<br/>
        <span>24/7 Emergency Hotline</span>
      </ButtonLink>
    </List>
  </Wrapper>
)

export default Nav
