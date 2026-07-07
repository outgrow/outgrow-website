"use client"

import Emphasis from "./emphasis"
import { parseInline } from "../lib/inlineMarkdown"

export default function InlineText({ text, color }) {
  return parseInline(text).map(part =>
    part.type === "strong"
      ? <Emphasis key={part.key} $color={color}>{part.text}</Emphasis>
      : part.text
  )
}
