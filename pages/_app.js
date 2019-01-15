import App from "next/app"
import Router from "next/router"
import withGA from "next-ga"

export default withGA("UA-132569116-1", Router)(App);

