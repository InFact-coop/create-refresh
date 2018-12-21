import React from "react"
import Helmet from "react-helmet"

function SEO({ socialImage, url, description, lang, keywords, title }) {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={description - title}
      meta={[
        {
          name: "description",
          content: description,
        },
        {
          name: "keywords",
          content: keywords.join(", "),
        },
        {
          property: "og:title",
          content: `${description} - ${title}`,
        },
        {
          property: "og:description",
          content: description,
        },
        {
          property: "og:image",
          content: socialImage,
        },
        {
          property: "og:url",
          content: url,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          name: "twitter:card",
          content: "summary-large-image",
        },
        {
          name: "twitter:creator",
          content: "create-refresh",
        },
        {
          name: "twitter:description",
          content: description,
        },
      ]}
    />
  )
}

export default SEO
