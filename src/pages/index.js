import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Upload from "../components/upload"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={["gatsby", "application", "react"]} />
    <Upload />
  </Layout>
)

export default IndexPage
