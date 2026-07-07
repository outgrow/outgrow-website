import { ImageResponse } from "next/og"
import { ogImageNode, size, contentType } from "../../lib/ogImage"
import { blue } from "../../styles/colors"
import aiAudits from "../../content/aiAudits"

export { size, contentType }

export default function Image() {
  return new ImageResponse(
    ogImageNode({ title: aiAudits.metaTitle, subtitle: aiAudits.metaDescription, accent: blue }),
    size,
  )
}
