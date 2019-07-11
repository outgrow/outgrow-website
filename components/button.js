import React from "react"
import Link from "next/link"
import styled from "styled-components"
import media from "../styles/mediaQueries"
import { grey, white } from "../styles/colors"

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(${props => props.backgroundColor || white});

  padding: .5rem 1rem;

  border-radius: 35px;

  text-decoration: none;
  color: rgb(${props => props.color});
  font-weight: 800;
  font-size: 1.2rem;
  ${media.smallTablet`font-size: 1.3rem;`}
`

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(${props => props.backgroundColor || white});
  ${props => props.disabled && `background: rgb(${grey});`}

  padding: .5rem 2rem;

  border: none;
  border-radius: 35px;

  text-decoration: none;
  color: rgb(${props => props.color});
  font-weight: 800;
  font-size: 1.2rem;
  ${media.smallTablet`font-size: 1.3rem;`}
`

const Button = ({ backgroundColor, children, color, href, type, disabled, onClick }) => {
  if (typeof href !== "undefined") {
    return (
      <Link href={href} passHref>
        <StyledLink backgroundColor={backgroundColor} color={color}>{children}</StyledLink>
      </Link>
    )
  }

  return (
    <StyledButton
      backgroundColor={backgroundColor}
      color={color}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  )
}

export default Button

