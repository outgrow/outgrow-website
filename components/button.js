"use client"

import Link from "next/link"
import styled, { css } from "styled-components"
import { black, blue, grey, white } from "../styles/colors"

const variants = {
  primary: css`
    background: rgb(${props => props.$accent});
    color: rgb(${white});

    &:hover {
      box-shadow: 0 12px 28px rgba(${props => props.$accent}, .35);
    }
  `,
  ghost: css`
    background: rgba(255, 255, 255, .55);
    backdrop-filter: blur(14px);
    border: 1px solid rgba(${black}, .14);
    color: rgb(${black});

    &:hover {
      border-color: rgba(${props => props.$accent}, .6);
      color: rgb(${props => props.$accent});
      box-shadow: 0 12px 28px rgba(${black}, .08);
    }
  `,
  light: css`
    background: rgb(${white});
    color: rgb(${black});

    &:hover {
      box-shadow: 0 12px 28px rgba(0, 0, 0, .4);
    }
  `,
  ghostDark: css`
    background: rgba(255, 255, 255, .06);
    backdrop-filter: blur(14px);
    border: 1px solid rgba(255, 255, 255, .22);
    color: rgb(${white});

    &:hover {
      border-color: rgba(255, 255, 255, .55);
    }
  `,
}

const base = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;

  padding: .8rem 1.5rem;
  border: 0;
  border-radius: 999px;

  font-family: inherit;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;

  transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease, color .18s ease, background-color .18s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  ${props => variants[props.$variant]}
`

const StyledLink = styled(Link)`${base}`

const StyledAnchor = styled.a`${base}`

const StyledButton = styled.button`
  ${base}

  &:disabled {
    background: rgb(${grey});
    color: rgb(${white});
    cursor: default;
    transform: none;
    box-shadow: none;
  }
`

const Button = ({ accent = blue, variant = "primary", href, children, type, disabled, onClick }) => {
  if (typeof href !== "undefined") {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:")

    if (isExternal) {
      return <StyledAnchor href={href} $accent={accent} $variant={variant}>{children}</StyledAnchor>
    }

    return <StyledLink href={href} $accent={accent} $variant={variant}>{children}</StyledLink>
  }

  return (
    <StyledButton
      $accent={accent}
      $variant={variant}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  )
}

export default Button
