import { css } from "styled-components"

// Frosted-glass surface: translucent white over the blurred orb field behind it.
export const glass = css`
  background: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(22px) saturate(1.6);
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 10px 34px rgba(11, 11, 11, 0.06);
`
