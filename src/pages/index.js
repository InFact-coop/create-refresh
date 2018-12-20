import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Upload from "../components/upload"
import Signup from "../components/signup"
import Faq from "../components/faq"
import Video from "../components/video"
import Footer from "../components/footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={["gatsby", "application", "react"]} />
    <Upload />
    <Video />
    <Signup />
    <Faq />
    <Footer />
  </Layout>
)

export default IndexPage
