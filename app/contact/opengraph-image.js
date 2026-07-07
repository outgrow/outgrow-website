import { ImageResponse } from "next/og"
import { ogImageNode, size, contentType } from "../../lib/ogImage"
import { blue } from "../../styles/colors"
import contact from "../../content/contact"

export { size, contentType }

export default function Image() {
  return new ImageResponse(
    ogImageNode({ title: "Get in touch with out:grow.", subtitle: contact.metaDescription, accent: blue }),
    size,
  )
}
