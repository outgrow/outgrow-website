import styled from "styled-components"
import media from "../styles/mediaQueries"

export default styled.div`
  display: flex;
  align-items: center;
  
  margin: 2.5rem 0;
  
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  
  ${media.tablet`
    left: ${props => props.keepLeft ? `-6rem` : `22rem`};
    transform: none;
  `}
`

