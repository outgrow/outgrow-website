export function parseInline(text) {
  return text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return { type: "strong", text: part.slice(2, -2), key: index }
    }

    return { type: "text", text: part, key: index }
  })
}
