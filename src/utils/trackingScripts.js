const addGoogleLink = () => {
  const newScript = document.createElement("script")
  newScript.src = "https://www.googletagmanager.com/gtag/js?id=UA-108065136-4"
  newScript.async = true
  document.head.appendChild(newScript)
}
const googleScript = () => {
  const newScript = document.createElement("script")
  newScript.type = "text/javascript"
  newScript.innerHTML =
    "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments)}gtag('js', new Date());gtag('config', 'UA-108065136-4');"
  document.head.appendChild(newScript)
}

const facebookScript = () => {
  const newScript = document.createElement("script")
  newScript.type = "text/javascript"
  newScript.innerHTML =
    "!function(f,b,e,v,n,t,s) {if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)}; if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0'; n.queue=[];t=b.createElement(e);t.async=!0; t.src=v;s=b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '586710681772306'); fbq('track', 'PageView');"
  document.head.appendChild(newScript)
}

const appendTrackingScripts = () => {
  addGoogleLink()
  googleScript()
  facebookScript()
}

export default appendTrackingScripts
