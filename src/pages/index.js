import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Upload from "../components/upload"
import Info from "../components/info"
import Video from "../components/video"
import Signup from "../components/signup"
import Faq from "../components/faq"
import Footer from "../components/footer"
import axios from "axios"

import encode from "../utils/encode"

class IndexPage extends Component {
  state = {
    formCompleted: false,
  }
  submitForm = data => {
    this.setState(
      {
        formCompleted: true,
      },
      this.postData(data)
    )
  }
  postData = data => {
    // post user information to proxy Mailchimp server
    const URIdata = encode({ ...data })
    fetch("http://127.0.0.1:5000/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: URIdata,
    })
      .then(response => this.setState({ submitted: response.json() }))
      .catch(error => {
        console.log(error)
        this.setState({ error: true })
      })
  }

  render() {
    const { formCompleted } = this.state
    return (
      <Layout>
        <SEO title="Home" keywords={["gatsby", "application", "react"]} />
        <Upload formCompleted={formCompleted} submitForm={this.submitForm} />
        <Info />
        <Video />
        <Signup theme="light" submitForm={this.submitForm} />
        <Faq />
        <Footer />
      </Layout>
    )
  }
}

export default IndexPage
