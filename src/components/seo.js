import React from "react"
import Helmet from "react-helmet"

function SEO({ description, lang, title }) {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title="EU Compliant meme generator"
      meta={[
        {
          name: "description",
          content: "EU Compliant meme generator",
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: description,
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:creator",
          content: "create-refresh",
        },
        {
          name: "og:image",
          content: "https://i.imgflip.com/2ilji1.jpg",
        },
        {
          name: "og:url",
          content: "http://compliantmemegenerator.eu",
        },
        {
          name: "og:image:height",
          content: "600",
        },
        {
          name: "og:image:width",
          content: "600",
        },
      ]}
    />
  )
}

export default SEO
