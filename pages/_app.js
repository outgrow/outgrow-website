import React from "react"
import App from "next/app"
import Router from "next/router"
import withGA from "next-ga"
import { initializeGoogleAds } from "../utils/googleAds"

if (typeof window !== "undefined") {
  window._linkedin_data_partner_ids = ["672676"]

  window.setTimeout(function () {
    initializeGoogleAds();
  }, 1500);
}

class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Component {...pageProps} />
      </>
    )
  }
}

export default withGA("UA-132569116-1", Router)(CustomApp);

