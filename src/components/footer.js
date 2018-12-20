import React from "react"

const Social = () => (
  <div>
    <div>Facebook Twitter Instagram</div>
    <div>Visit our social media channels for more info and cool content</div>
    <div>
      <a href="https://createrefresh.eu/privacy/">Privacy</a>
      <a href="https://createrefresh.eu/faq/">FAQ</a>
    </div>
  </div>
)

const License = () => (
  <p>
    Except where otherwise noted, content on this site is licensed under a
    Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)
  </p>
)

const Footer = () => (
  <div>
    <Social />
    <License />
  </div>
)

export default Footer
