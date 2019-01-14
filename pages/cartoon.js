import React, { Component } from "react"
import Router from "next/router"

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

class CartoonPage extends Component {
  state = {
    fileURL: null,
    error: "",
    cartoon: null,
    view: "cartoon",
    showMenu: false,
    showShareModal: false,
    formCompleted: false,
  }

  static async getInitialProps({ query }) {
    const { cartoonId, formCompleted, fromSocial } = query
    const redirectHome = () => Router.push({ pathname: "/" })

    if (fromSocial === true) redirectHome()

    // do api call to get cartoon and original image using id from aws
    // if no original redirect to home


    return {
      cartoonId: "1536577",
      cartoon: "https://tinyurl.com/ybhexc65",
      fileURL: "https://tinyurl.com/ybhexc65",
      formCompleted,
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
    const { error, view, showMenu, showShareModal } = this.state

    const { fileURL, cartoon, cartoonId } = this.props
    return (
      <Layout>
        <SEO image={cartoon} />
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
          id={cartoonId}
        />
        <Info />
        <Video />
        <Signup theme="light" submitForm={this.submitForm} />
        <Faq />
        <Footer />
      </Layout>
    )
  }
}

export default CartoonPage
