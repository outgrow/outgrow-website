import React from "react"
import App from "next/app"
import Router from "next/router"
import withGA from "next-ga"
import FullStory from "react-fullstory"

const CustomApp = (props) => ([
  <App {...props} />,
  <FullStory org="J1X09" />
])

export default withGA("UA-132569116-1", Router)(CustomApp);

