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

function reportConversion() {
  gtag("event", "conversion", {
    "send_to": "AW-767784789/M3YxCPHq6ZMBENXuje4C"
  })

  return false
}

export { gtag, initializeGoogleAds, reportConversion }

