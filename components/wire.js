import styled from "styled-components"
import media from "../styles/mediaQueries"

export default styled.div`
  display: none;
  ${media.tablet`display: block;`}

  width: 27rem;
  
  border-right: rgb(11, 111, 185) 2px solid;

  position: absolute;
  top: 100vh;
  left: 0;
  
  height: 100%;
`

