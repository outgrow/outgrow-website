import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;

  margin-top: 1rem;
`

const CheckMark = styled.img`
  width: 5rem;
  margin-right: 1rem;
`

const Title = styled.p`
  margin-bottom: .3rem; 
  color: rgb(11, 11, 11);
`

const Body = styled.p`
  font-weight: 100;
  color: rgb(11, 11, 11);
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

