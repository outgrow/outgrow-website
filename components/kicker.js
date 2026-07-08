"use client"

import { Fragment } from "react"
import styled from "styled-components"
import { black, white } from "../styles/colors"

const Wrap = styled.p`
  font-size: .92rem;
  font-weight: 600;
  letter-spacing: .01em;
  color: ${props => props.$onDark ? `rgba(${white}, .75)` : `rgba(${black}, .62)`};
`

const Colon = styled.span`
  color: rgb(${props => props.$accent});
  font-weight: 900;
  padding: 0 .05em;
`

// Lowercase colon-separated section label ("what:we:do"), echoing the wordmark.
const Kicker = ({ accent, onDark, children }) => {
  const parts = String(children).split(":")

  return (
    <Wrap $onDark={onDark}>
      {parts.map((part, index) => (
        <Fragment key={index}>
          {index > 0 && <Colon $accent={accent}>:</Colon>}
          {part}
        </Fragment>
      ))}
    </Wrap>
  )
}

export default Kicker
