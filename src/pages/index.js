import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Upload from "../components/upload"
import Signup from "../components/signup"
import Faq from "../components/faq"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={["gatsby", "application", "react"]} />
    <Upload />
    <Signup />
    <Faq />
  </Layout>
)

export default IndexPage
