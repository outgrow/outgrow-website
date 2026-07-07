import { ImageResponse } from "next/og"
import { ogImageNode, size, contentType } from "../../lib/ogImage"
import { blue } from "../../styles/colors"
import founder from "../../content/founder"

export { size, contentType }

export default function Image() {
  return new ImageResponse(
    ogImageNode({ title: "Loan Laux, founder of out:grow.", subtitle: founder.metaDescription, accent: blue }),
    size,
  )
}
