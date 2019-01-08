import React from "react"
import Helmet from "react-helmet"

function SEO({ lang, title, image }) {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title="EU Compliant meme generator"
      meta={[
        { name: "title", content: "EU Compliant meme generator" },
        {
          name: "description",
          content: "Make sure your memes survive Article 13!",
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
          content: "Make sure your memes survive Article 13!",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:creator",
          content: "create-refresh",
        },
        { name: "twitter:title", content: "EU Compliant Meme Generator" },
        {
          name: "twitter:description",
          content: "Make sure your memes survive Article 13!",
        },
        {
          name: "twitter:image",
          content: image === null ? "https://i.imgflip.com/2ilji1.jpg" : image,
        },
        {
          property: "og:image",
          content: image === null ? "https://i.imgflip.com/2ilji1.jpg" : image,
        },
        {
          property: "og:image:secure_url",
          content: image === null ? "https://i.imgflip.com/2ilji1.jpg" : image,
        },
        {
          property: "og:url",
          content: "http://compliantmemegenerator.eu",
        },
        {
          property: "og:image:height",
          content: "630",
        },
        {
          property: "og:image:width",
          content: "1200",
        },
        {
          property: "og:locale",
          content: "en",
        },
        { name: "robots", content: "index" },
      ]}
    />
  )
}

export default SEO
