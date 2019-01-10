import styled from "styled-components"
import media from "../styles/mediaQueries"

export default styled.div`
  display: inline-block;
  
  margin: 1.5rem 0;
  
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  
  ${media.tablet`
    left: 22rem;
    transform: none;
  `}
`

