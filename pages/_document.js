import Document, { Head, Main, NextScript } from "next/document"
import { ServerStyleSheet } from "styled-components"
import React from "react";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()

    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    )

    const styleTags = sheet.getStyleElement()

    return { ...page, styleTags }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          {this.props.styleTags}

          <link rel="preconnect" href="https://googleads.g.doubleclick.net" crossOrigin="anonymous" />
          <link rel="preconnect" href="https://www.googleadservices.com" crossOrigin="anonymous"  />
          <script type="text/javascript" src="https://www.googletagmanager.com/gtag/js?id=AW-767784789" crossOrigin="anonymous" defer />
          <script type="text/javascript" src="https://snap.licdn.com/li.lms-analytics/insight.min.js" crossOrigin="anonymous" defer />
          <script type="text/javascript" src="/static/modernizr.js" />
        </Head>
        <body style={{ overflowX: "hidden" }}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

