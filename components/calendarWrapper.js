import styled from "styled-components"
import media from "../styles/mediaQueries"

export default styled.div`
  width: 100vw;
  ${media.smallTablet`width: 420px;`}
  height: 2470px;
  overflow: hidden;
  margin-left: -19px;
  ${media.smallTablet`margin-left: 0;`}
  ${media.tablet`margin-left: 28rem;`}
`
