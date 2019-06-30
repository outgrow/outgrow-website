import styled from "styled-components"
import { black } from "../styles/colors"
import media from "../styles/mediaQueries"

export default styled.p`
  color: rgb(${black});

  margin-top: 1rem;
  ${props => !props.noMarginLeft && media.tablet`margin-left: 28rem;`}
  ${props => !props.noMarginRight && media.laptop`margin-right: 8rem;`}
  ${props => props.marginBottom && `margin-bottom: 2rem;`}
`

