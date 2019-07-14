import React from "react"
import App, { Container } from "next/app"
import Router from "next/router"
import withGA from "next-ga"
import FullStory from "react-fullstory"
import { initializeGoogleAds } from "../utils/googleAds"

class CustomApp extends App {
  componentDidMount() {
    initializeGoogleAds()

    window._linkedin_data_partner_ids = ["672676"]

    const script = document.getElementsByTagName("script")[0]
    const tagScript = document.createElement("script")

    tagScript.type = "text/javascript"
    tagScript.async = true
    tagScript.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js"

    script.parentNode.insertBefore(tagScript, script)

    const modernizrScriptTag = document.createElement("script")
    modernizrScriptTag.type = "text/javascript"
    modernizrScriptTag.src = "/static/modernizr.js"

    script.parentNode.insertBefore(modernizrScriptTag, script)
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

