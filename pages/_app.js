import React from "react"
import App, { Container } from "next/app"
import Router from "next/router"
import withGA from "next-ga"
import FullStory from "react-fullstory"
import { initializeGoogleAds } from "../utils/googleAds"

if (typeof window !== "undefined") {
  window._linkedin_data_partner_ids = ["672676"]

  initializeGoogleAds()
}

class CustomApp extends App {
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

