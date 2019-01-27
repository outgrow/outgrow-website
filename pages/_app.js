import React from "react"
import App, { Container } from "next/app"
import Router from "next/router"
import withGA from "next-ga"
import FullStory from "react-fullstory"
import { initializeGoogleAds } from "../utils/googleAds"

class CustomApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  componentDidMount() {
    initializeGoogleAds()
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Component {...pageProps} />
        {process.browser && window.location.hostname === "outgrow.io" && <FullStory key="fullstory" org="J1X09" />} 
      </Container>
    )
  }
}

export default withGA("UA-132569116-1", Router)(CustomApp);

