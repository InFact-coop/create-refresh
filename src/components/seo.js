import React from "react"
import Helmet from "react-helmet"

function SEO({ description, lang, meta, keywords, title }) {
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
          content: "title",
        },
        {
          property: "og:description",
          content: "EU Compliant meme generator",
        },
        {
          property: "og:type",
          content: "website",
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
          name: "twitter:title",
          content: title,
        },
        {
          name: "twitter:description",
          content: "EU Compliant meme generator",
        },
        {
          name: "twitter:image:src",
          content: "https://i.imgflip.com/2ilji1.jpg",
        },
      ]}
    />
  )
}

export default SEO
