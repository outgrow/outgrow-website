"use client"

import Link from "next/link"
import styled, { css } from "styled-components"
import Emphasis from "./emphasis"
import { parseInline } from "../lib/inlineMarkdown"

const linkStyle = css`
  color: rgb(${props => props.$color});
  font-weight: 600;
  text-decoration: underline;
  text-decoration-color: rgba(${props => props.$color}, .35);
  text-underline-offset: 3px;
  transition: text-decoration-color .15s ease;

  &:hover {
    text-decoration-color: rgb(${props => props.$color});
  }
`

const InternalLink = styled(Link)`${linkStyle}`

const ExternalLink = styled.a`${linkStyle}`

export default function InlineText({ text, color }) {
  return parseInline(text).map(part => {
    if (part.type === "strong") {
      return <Emphasis key={part.key} $color={color}>{part.text}</Emphasis>
    }

    if (part.type === "link") {
      const isExternal = part.href.startsWith("http") || part.href.startsWith("mailto:")

      return isExternal
        ? <ExternalLink key={part.key} href={part.href} $color={color}>{part.text}</ExternalLink>
        : <InternalLink key={part.key} href={part.href} $color={color}>{part.text}</InternalLink>
    }

    return part.text
  })
}
