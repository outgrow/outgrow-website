import { NextResponse } from "next/server"

const STATIC_EXTENSION_PATTERN = /\.(?:ico|png|jpg|jpeg|webp|svg|css|js|txt|xml|json|woff2?|ttf)$/i

export function proxy(request) {
  const { pathname } = request.nextUrl
  const accept = request.headers.get("accept") || ""

  if (
    pathname.startsWith("/api") ||
    pathname.endsWith(".md") ||
    STATIC_EXTENSION_PATTERN.test(pathname) ||
    !accept.includes("text/markdown")
  ) {
    return NextResponse.next()
  }

  const markdownIndex = accept.indexOf("text/markdown")
  const htmlIndex = accept.indexOf("text/html")
  const prefersMarkdown = htmlIndex === -1 || markdownIndex < htmlIndex

  if (!prefersMarkdown) {
    return NextResponse.next()
  }

  const mdPath = pathname === "/" ? "/index.md" : `${pathname}.md`

  return NextResponse.rewrite(new URL(mdPath, request.url))
}

export const config = {
  matcher: ["/((?!_next|api).*)"],
}
