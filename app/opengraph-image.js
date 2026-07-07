import { ImageResponse } from "next/og"
import { ogImageNode, size, contentType } from "../lib/ogImage"
import { blue } from "../styles/colors"

export { size, contentType }

export default function Image() {
  return new ImageResponse(
    ogImageNode({
      title: "AI adoption consulting for agencies.",
      subtitle: "Workflow audits, team training, and embedded AI support for web, commerce, and 360 agencies.",
      accent: blue,
    }),
    size,
  )
}
