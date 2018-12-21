import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Upload from "../components/upload"
import Info from "../components/info"
import Video from "../components/video"
import Signup from "../components/signup"
import Faq from "../components/faq"
import Footer from "../components/footer"

import socialImage from "../assets/images/meta_social_thumbnail.png"

const IndexPage = () => (
  <Layout>
    <SEO
      socialImage={socialImage}
      title="Home"
      url="https://createrefresh.eu/"
      description="EU Compliant Meme Generator"
      keywords={[
        "memes",
        "meme generator",
        "copyright",
        "parody",
        "EU",
        "save our internet",
        "article 13",
        "censorship",
        "distracted boyfriend",
        "doge",
        "wonka",
        "drake",
        "science",
        "campaign",
        "create refresh",
      ]}
      lang="en"
    />
    <Upload />
    <Info />
    <Video />
    <Signup />
    <Faq />
    <Footer />
  </Layout>
)

export default IndexPage
