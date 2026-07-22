import { ImageResponse } from "next/og"
import { ogImageNode, size, contentType } from "../../lib/ogImage"
import { blue } from "../../styles/colors"

export { size, contentType }

export default function Image() {
  return new ImageResponse(
    ogImageNode({
      title: "AI adoption for agencies, written down.",
      subtitle: "Guides on audits, training, Claude Skills, custom agents, and tool stacks for 5-to-50-person agencies.",
      accent: blue,
    }),
    size,
  )
}
