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
          property: "og:type",
          content: "website",
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
          property: "og:image",
          content: "https://i.imgflip.com/2ilji1.jpg",
        },
        {
          property: "og:url",
          content: "http://compliantmemegenerator.eu",
        },
        {
          property: "og:image:height",
          content: "600",
        },
        {
          property: "og:image:width",
          content: "600",
        },
      ]}
    />
  )
}

export default SEO
