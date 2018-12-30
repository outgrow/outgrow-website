import React from "react"
import Link from "next/link"
import styled from "styled-components"

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  background: white;

  padding: .5rem 1.5rem;

  border-radius: 25px;

  text-decoration: none;
  color: rgb(${props => props.color});
  font-weight: 800;
  font-size: 1.2rem;

  margin-top: 1rem;
`

const Button = ({ children, color, href }) => (
  <Link href={href} passHref prefetch>
    <StyledLink color={color}>{children}</StyledLink>
  </Link>
)

export default Button

