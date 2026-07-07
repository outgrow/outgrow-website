"use client"

import { useState } from "react"
import Link from "next/link"
import styled, { keyframes } from "styled-components"
import media from "../styles/mediaQueries"
import { black, blue, white } from "../styles/colors"

const links = [
  { href: "/", label: "Home", hideOnDesktop: true },
  { href: "/ai-audits", label: "AI Audits" },
  { href: "/ai-training", label: "AI Training" },
  { href: "/ai-support", label: "AI Support" },
  { href: "/founder", label: "Founder" },
  { href: "/contact", label: "Contact Us" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const listItemAnimation = keyframes`
  from {
    transform: translateY(-15px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const TopBar = styled.div`
  position: ${props => props.$isMenuOpen ? "fixed" : "absolute"};
  top: 0;
  width: 100%;
  z-index: 999;

  align-items: start;
  display: flex;
  justify-content: space-between;
`

const MenuButton = styled.button`
  padding: 15px 15px;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;

  &:hover {
    opacity: 0.7;
  }

  &.is-active:hover {
    opacity: 0.7;
  }

  &.is-active .hamburger-inner,
  &.is-active .hamburger-inner::before,
  &.is-active .hamburger-inner::after {
    background-color: #fff;
  }

  &.is-active .hamburger-inner {
    transition-delay: 0.22s;
    background-color: transparent !important;
  }

  &.is-active .hamburger-inner::before {
    top: 0;
    transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 10px, 0) rotate(45deg);
  }

  &.is-active .hamburger-inner::after {
    top: 0;
    transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 10px, 0) rotate(-45deg);
  }
`

const MenuButtonBox = styled.span`
  width: 40px;
  height: 24px;
  display: inline-block;
  position: relative;
`

const MenuButtonInner = styled.span`
  display: block;
  margin-top: -2px;
  top: 2px;
  transition: background-color 0s 0.13s linear;

  &,
  &::before,
  &::after {
    width: 40px;
    height: 2px;
    background-color: #fff;
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }

  &::before,
  &::after {
    content: "";
    display: block;
  }

  &::before {
    top: 10px;
    transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  &::after {
    bottom: -10px;
    top: 20px;
    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
`

const Logo = styled.img`
  height: 1.5rem;
  ${media.smallTablet`height: 2rem;`}

  margin: 1rem .5rem 0 0;
`

const MobileNavWrapper = styled.nav`
  background: rgb(${black});
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 99;
`

const List = styled.ul`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  list-style: none;
`

const ListItem = styled.li`
  text-align: center;
  padding: .5rem 0;
  color: rgb(${white});
  opacity: 0;

  animation-name: ${listItemAnimation};
  animation-duration: 300ms;
  animation-delay: ${props => props.$iterationCount * 0.05}s;
  animation-fill-mode: forwards;
`

const ListItemLink = styled(Link)`
  font-size: 1.2rem;
  color: rgb(${white});
  text-decoration: none;
  cursor: pointer;
`

const LogoLink = styled(Link)`
  cursor: pointer;
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
  color: rgb(${white});
  font-weight: normal;
  background: rgb(${black});
  z-index: 999;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 1rem;
`

const ButtonLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 16rem;

  background: rgb(${blue});

  text-decoration: none;

  padding: 1rem;
  margin-top: 1rem;

  border-radius: 68px;

  position: relative;
  left: 50%;
  transform: translateX(-50%);
`

const ButtonText = styled.p`
  color: rgb(${white});

  text-align: center;
  font-weight: 800;
`

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleToggleMenu = () => setIsMenuOpen(open => !open)
  const handleCloseMenu = () => setIsMenuOpen(false)

  return (
    <div>
      <TopBar $isMenuOpen={isMenuOpen}>
        <MenuButton
          className={`hamburger hamburger--spring ${isMenuOpen ? "is-active" : ""}`}
          aria-label="menu"
          type="button"
          onClick={handleToggleMenu}
        >
          <MenuButtonBox className="hamburger-box">
            <MenuButtonInner className="hamburger-inner" />
          </MenuButtonBox>
        </MenuButton>

        <LogoLink href="/" onClick={handleCloseMenu}>
          <Logo alt="Outgrow logo" src="/logo-white.svg" height="32px" width="145px" />
        </LogoLink>
      </TopBar>
      {isMenuOpen && <MobileNavWrapper>
        <List>
          {links.map(({ key, href, label }, index) => (
            <ListItem key={key} $iterationCount={index}>
              <ListItemLink href={href} onClick={handleCloseMenu}>{label}</ListItemLink>
            </ListItem>
          ))}

          <ListItem $iterationCount={6}>
            <Divider />
            <DividerText>or</DividerText>
          </ListItem>

          <ListItem style={{ marginTop: "2.5rem" }} $iterationCount={7}>
            <ButtonLink href="/contact" onClick={handleCloseMenu}>
              <ButtonText>Get in touch</ButtonText>
            </ButtonLink>
          </ListItem>
        </List>
      </MobileNavWrapper>}
    </div>
  )
}
