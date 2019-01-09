import { css } from "styled-components"

const sizes = {
  veryLargeSmartphone: 410,
  smallTablet: 560
}

const media = Object.keys(sizes).reduce((accumulator, sizeLabel) => {
  accumulator[sizeLabel] = (...args) => css`
    @media (min-width: ${sizes[sizeLabel] / 16}em) {
      ${css(...args)}
    }
  `

  return accumulator
}, {})

export default media

