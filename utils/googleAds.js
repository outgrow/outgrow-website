function gtag() {
  if (process.browser) {
    window.dataLayer = window.dataLayer || []
 
    dataLayer.push(arguments)
  }
}

function initializeGoogleAds() {
  gtag("js", new Date())
  gtag("config", "AW-767784789")
}

export { gtag, initializeGoogleAds }

