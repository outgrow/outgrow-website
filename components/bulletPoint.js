import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;

  margin: 1rem 0;
`

const CheckMark = styled.img`
  width: 5rem;
  margin-right: 1rem;
`

const Title = styled.p`
  margin-bottom: .3rem; 
`

const Body = styled.p`
  font-weight: 100;
`

const BulletPoint = ({ body, title }) => (
  <Wrapper>
    <CheckMark src="/static/check.svg" />
    <div>
      <Title>{title}</Title>
      <Body>{body}</Body>
    </div>
  </Wrapper>
)

export default BulletPoint

