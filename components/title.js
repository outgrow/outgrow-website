import styled from "styled-components"
import media from "../styles/mediaQueries"

export default styled.h2`
  color: rgb(${props => props.color});

  font-size: 2.4rem;
  ${media.smallTablet`font-size: 3rem;`}
  font-weight: 800;
  letter-spacing: -2px;

  margin: 1.3rem 0;
  ${media.tablet`margin-left: 28rem;`}
  ${props => props.noMarginTop && `margin-top: 0;`}
`

