import React from "react"
import App from "next/app"
import Router from "next/router"
import withGA from "next-ga"
import FullStory from "react-fullstory"

const CustomApp = (props) => (
  <div>
    <App key="app" {...props} />
    {process.browser && window.location.hostname === "outgrow.io" && <FullStory key="fullstory" org="J1X09" />}
  </div>
)

export default withGA("UA-132569116-1", Router)(CustomApp);

