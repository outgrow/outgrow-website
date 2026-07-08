// Colors the trailing punctuation of a heading in the section's accent color,
// echoing the colon in the out:grow wordmark.
export function withAccentedPeriod(html, accent) {
  return html.replace(/([.?!])\s*$/, `<span style="color: rgb(${accent})">$1</span>`)
}
