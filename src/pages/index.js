import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Upload from "../components/upload"
import "../styles/index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={["gatsby", "application", "react"]} />
    <h1>Index Page</h1>
    <Upload />
  </Layout>
)

export default IndexPage
