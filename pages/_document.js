import Document, { Head, Main, NextScript } from "next/document"
import { ServerStyleSheet } from "styled-components"

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

          <link rel="preconnect" href="https://googleads.g.doubleclick.net" crossOrigin="true" />
          <link rel="preconnect" href="https://www.googleadservices.com" crossOrigin="true"  />
          <script defer src="https://www.googletagmanager.com/gtag/js?id=AW-767784789" />
        </Head>
        <body style={{ overflowX: "hidden" }}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

