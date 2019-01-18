import React, { Component } from "react"
import Router from "next/router"
import axios from "axios"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Upload from "../components/upload"
import Info from "../components/info"
import Video from "../components/video"
import Signup from "../components/signup"
import Faq from "../components/faq"
import Footer from "../components/footer"

import encode from "../utils/encode"

import "../styles/index.css"

const cartoonEndpoint = "http://aws-cli-test-dev.eu-west-1.elasticbeanstalk.com"

class CartoonPage extends Component {
  state = {
    fileURL: null,
    cartoon: null,
    view: "cartoon",
    showMenu: false,
    showShareModal: false,
    formCompleted: false,
  }

  static async getInitialProps({ query }) {
    const { cartoonId, fromIndex } = query

    return await axios
      .get(`${cartoonEndpoint}/fetch/${cartoonId}`)
      .then(res => ({
        cartoonId,
        cartoon: `data:image/png;base64,${res.data.compliant}`,
        fileURL: `data:image/png;base64,${res.data.original}`,
        fromIndex,
        error: "",
        view: "cartoon",
      }))
      .catch(err => {
        console.log(err)

        return {
          cartoonId,
          cartoon: null,
          fileURL: null,
          fromIndex,
          view: "",
          error:
            "Oops, something went wrong creating your meme. Please try again!",
        }
      })
  }

  componentDidMount() {
    if (this.props.fromIndex === "false") Router.push("/")

    if (this.props.error) {
      Router.push({
        pathname: "/",
        query: {
          error:
            "Oops, something went wrong creating your meme. Please try again!",
        },
      })
    }
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
        //eslint-disable-next-line
        console.log(error)
        this.setState({ error: true })
      })
  }

  toggleMenu = () => {
    this.setState(prevProps => ({ showMenu: !prevProps.showMenu }))
  }

  toggleShareModal = () => {
    this.setState(prevProps => ({ showShareModal: !prevProps.showShareModal }))
  }

  handleStartOver = () => {
    Router.push({
      pathname: "/",
    })
  }

  render() {
    const { showMenu, showShareModal } = this.state
    const { fileURL, cartoon, cartoonId, error, view, fromIndex } = this.props

    return fromIndex === "true" ? (
      <Layout>
        <SEO image={cartoon} cartoonId={cartoonId} />
        <Upload
          fileURL={fileURL}
          error={error}
          cartoon={cartoon}
          view={view}
          showMenu={showMenu}
          showShareModal={showShareModal}
          handleStartOver={this.handleStartOver}
          toggleShareModal={this.toggleShareModal}
          toggleMenu={this.toggleMenu}
          cartoonId={cartoonId}
        />
        <Info />
        <Video />
        <Signup theme="light" submitForm={this.submitForm} />
        <Faq />
        <Footer />
      </Layout>
    ) : null
  }
}

export default CartoonPage
