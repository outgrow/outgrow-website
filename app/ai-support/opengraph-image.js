import { ImageResponse } from "next/og"
import { ogImageNode, size, contentType } from "../../lib/ogImage"
import { green } from "../../styles/colors"
import aiSupport from "../../content/aiSupport"

export { size, contentType }

export default function Image() {
  return new ImageResponse(
    ogImageNode({ title: aiSupport.metaTitle, subtitle: aiSupport.metaDescription, accent: green }),
    size,
  )
}
