import React from "react"
import NextHead from "next/head"
import { string } from "prop-types"
import "../styles/fonts.css"

const defaultDescription = "out:grow provides consulting services to internet retailers and web agencies, offering pre-project feasibility studies, architectural engineering, technical mid-project consulting, code reviews and performance audits."
const defaultOGURL = ""
const defaultOGImage = ""

const Head = props => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || "out:grow"}</title>
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || ""} />
    <meta
      property="og:description"
      content={props.description || defaultDescription}
    />
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1d1d1d" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <meta name="apple-mobile-web-app-title" content="out:grow" />
    <meta name="application-name" content="out:grow" />
    <meta name="msapplication-TileColor" content="#1d1d1d" />
    <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
    <meta name="msapplication-config" content="/browserconfig.xml" />
    <meta name="theme-color" content="#1d1d1d" />

    <style>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: "Axiforma", Helvetica, Arial, sans-serif;
      }

      html {
        scroll-behavior: smooth;
      }
    `}</style>
  </NextHead>
)

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
}

export default Head
