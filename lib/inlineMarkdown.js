const TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)\s]+\))/g
const LINK = /^\[([^\]]+)\]\(([^)\s]+)\)$/

export function parseInline(text) {
  return text.split(TOKEN).filter(Boolean).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return { type: "strong", text: part.slice(2, -2), key: index }
    }

    const link = part.match(LINK)

    if (link) {
      return { type: "link", text: link[1], href: link[2], key: index }
    }

    return { type: "text", text: part, key: index }
  })
}
