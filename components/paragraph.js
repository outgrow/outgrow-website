import styled from "styled-components"
import { black } from "../styles/colors"
import media from "../styles/mediaQueries"

export default styled.p`
  color: rgb(${black});

  margin-top: 1rem;
  ${media.tablet`margin-left: 28rem;`}
  ${media.laptop`margin-right: 8rem;`}
`

