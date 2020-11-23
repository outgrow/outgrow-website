import React from "react"
import styled from "styled-components"
import { black } from "../styles/colors"

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;

  margin-top: 1rem;
`

const CheckMark = styled.img`
  width: 5rem;
  margin-right: 1rem;
  max-width: 1.85rem;
`

const Title = styled.p`
  margin-bottom: .3rem; 
  color: rgb(${black});
`

const Body = styled.p`
  font-weight: 100;
  color: rgb(${black});
`

const BulletPoint = ({ body, title }) => (
  <Wrapper>
    <CheckMark src="/check.svg" />
    <div>
      <Title>{title}</Title>
      <Body>{body}</Body>
    </div>
  </Wrapper>
)

export default BulletPoint

