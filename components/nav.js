"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import styled, { css, keyframes } from "styled-components"
import media from "../styles/mediaQueries"
import { black, blue, white } from "../styles/colors"

const links = [
  { href: "/ai-audits", label: "AI Audits" },
  { href: "/ai-training", label: "AI Training" },
  { href: "/ai-support", label: "AI Support" },
  { href: "/founder", label: "Founder" },
]

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

const Bar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  background: rgba(${white}, .72);
  backdrop-filter: blur(20px) saturate(1.8);
  border-bottom: 1px solid rgba(${black}, .07);
`

const Inner = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 1.2rem;
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
`

const Logo = styled.img`
  height: 1.3rem;
  width: auto;
  display: block;
`

const DesktopLinks = styled.nav`
  display: none;
  ${media.tablet`
    display: flex;
    align-items: center;
    gap: 1.9rem;
  `}
`

const NavLink = styled(Link)`
  color: rgba(${black}, .72);
  text-decoration: none;
  font-size: .93rem;
  font-weight: 500;
  transition: color .18s ease;

  &:hover {
    color: rgb(${blue});
  }
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: .4rem;
`

const Cta = styled(Link)`
  display: inline-flex;
  align-items: center;

  background: rgb(${blue});
  color: rgb(${white});

  font-size: .9rem;
  font-weight: 600;
  text-decoration: none;

  padding: .55rem 1.15rem;
  border-radius: 999px;

  transition: transform .18s ease, box-shadow .18s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 20px rgba(${blue}, .35);
  }
`

const MenuButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  border: 0;
  cursor: pointer;
  padding: .6rem .2rem .6rem .6rem;

  ${media.tablet`display: none;`}
`

const BurgerBox = styled.span`
  width: 26px;
  height: 18px;
  position: relative;
  display: inline-block;
`

const BurgerInner = styled.span`
  &,
  &::before,
  &::after {
    width: 26px;
    height: 2px;
    border-radius: 2px;
    background: rgb(${black});
    position: absolute;
    left: 0;
    transition: transform .25s ease, top .25s ease, opacity .2s ease;
  }

  & {
    top: 8px;
  }

  &::before {
    content: "";
    top: -8px;
    display: block;
  }

  &::after {
    content: "";
    top: 8px;
    display: block;
  }

  ${props => props.$open && css`
    transform: rotate(45deg);

    &::before {
      top: 0;
      transform: rotate(90deg);
    }

    &::after {
      top: 0;
      opacity: 0;
    }
  `}
`

const Overlay = styled.nav`
  position: fixed;
  inset: 0;
  z-index: 90;

  background: rgba(${white}, .82);
  backdrop-filter: blur(36px) saturate(1.6);

  display: flex;
  align-items: center;
  justify-content: center;

  ${media.tablet`display: none;`}
`

const List = styled.ul`
  list-style: none;
  text-align: center;
`

const ListItem = styled.li`
  padding: .65rem 0;
  opacity: 0;

  animation-name: ${listItemAnimation};
  animation-duration: 300ms;
  animation-delay: ${props => props.$iterationCount * 0.05}s;
  animation-fill-mode: forwards;
`

const OverlayLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: rgb(${black});
  text-decoration: none;

  &:hover {
    color: rgb(${blue});
  }
`

const OverlayCta = styled(Link)`
  display: inline-flex;
  align-items: center;

  background: rgb(${blue});
  color: rgb(${white});

  font-size: 1.05rem;
  font-weight: 600;
  text-decoration: none;

  padding: .85rem 1.8rem;
  border-radius: 999px;
  margin-top: 1.2rem;
`

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleToggleMenu = () => setIsMenuOpen(open => !open)
  const handleCloseMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  return (
    <div>
      <Bar>
        <Inner>
          <LogoLink href="/" onClick={handleCloseMenu} aria-label="out:grow home">
            <Logo alt="out:grow logo" src="/logo-dark.svg" height="21px" width="96px" />
          </LogoLink>

          <DesktopLinks>
            {links.map(({ href, label }) => (
              <NavLink key={href} href={href}>{label}</NavLink>
            ))}
          </DesktopLinks>

          <Actions>
            <Cta href="/contact">Get in touch</Cta>
            <MenuButton aria-label="menu" aria-expanded={isMenuOpen} type="button" onClick={handleToggleMenu}>
              <BurgerBox>
                <BurgerInner $open={isMenuOpen} />
              </BurgerBox>
            </MenuButton>
          </Actions>
        </Inner>
      </Bar>

      {isMenuOpen && (
        <Overlay>
          <List>
            <ListItem $iterationCount={0}>
              <OverlayLink href="/" onClick={handleCloseMenu}>Home</OverlayLink>
            </ListItem>
            {links.map(({ href, label }, index) => (
              <ListItem key={href} $iterationCount={index + 1}>
                <OverlayLink href={href} onClick={handleCloseMenu}>{label}</OverlayLink>
              </ListItem>
            ))}
            <ListItem $iterationCount={links.length + 1}>
              <OverlayCta href="/contact" onClick={handleCloseMenu}>Get in touch</OverlayCta>
            </ListItem>
          </List>
        </Overlay>
      )}
    </div>
  )
}
