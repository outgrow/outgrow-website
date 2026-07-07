import { ImageResponse } from "next/og"
import { ogImageNode, size, contentType } from "../../lib/ogImage"
import { red } from "../../styles/colors"
import aiTraining from "../../content/aiTraining"

export { size, contentType }

export default function Image() {
  return new ImageResponse(
    ogImageNode({ title: aiTraining.metaTitle, subtitle: aiTraining.metaDescription, accent: red }),
    size,
  )
}
