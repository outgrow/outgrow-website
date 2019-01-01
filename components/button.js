import React from "react"
import Link from "next/link"
import styled from "styled-components"

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(${props => props.backgroundColor || "255, 255, 255"});

  padding: .5rem 1rem;

  border-radius: 25px;

  text-decoration: none;
  color: rgb(${props => props.color});
  font-weight: 800;
  font-size: 1.2rem;

  margin-top: 1rem;
`

const Button = ({ backgroundColor, children, color, href }) => (
  <Link href={href} passHref prefetch>
    <StyledLink backgroundColor={backgroundColor} color={color}>{children}</StyledLink>
  </Link>
)

export default Button

