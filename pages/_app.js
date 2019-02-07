import React from "react"
import App, { Container } from "next/app"
import Router from "next/router"
import withGA from "next-ga"
import FullStory from "react-fullstory"
import MessengerCustomerChat from "react-messenger-customer-chat"
import linkedInTag from "react-linkedin-insight"
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
    linkedInTag.init("672676")
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Component {...pageProps} />
        {process.browser && window.location.hostname === "outgrow.io" && <FullStory key="fullstory" org="J1X09" />}
        <MessengerCustomerChat
          pageId="377149002832117"
          appId="facebook-jssdk"
          htmlRef="messenger-customer-chat"
          themeColor="#016FB9" 
          loggedInGreeting="Welcome to out:grow. How can we help?"
          loggedOutGreeting="Welcome to out:grow. How can we help?"
        />
      </Container>
    )
  }
}

export default withGA("UA-132569116-1", Router)(CustomApp);

