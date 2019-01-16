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

import appendTrackingScripts from "../utils/trackingScripts"
import fileNameFormatter from "../utils/fileNameFormat"
import isValidFileType from "../utils/isValidFileType"

import encode from "../utils/encode"

const cartoonEndpoint = "http://localhost:5000"

import "../styles/index.css"

class IndexPage extends Component {
  state = {
    file: null,
    fileName: null,
    fileURL: null,
    error: "",
    cartoon: null,
    cartoonId: null,
    view: "",
    showMenu: false,
    showShareModal: false,
    formCompleted: false,
  }

  static async getInitialProps({ query }) {
    const { error } = query
    if (error) return { error }
    return {}
  }
  //eslint-disable-next-line
  componentDidMount() {
    appendTrackingScripts()
    if (this.props.error) {
      this.setState({ error: this.props.error })
    }
  }

  componentDidUpdate() {
    if (this.state.view === "loading" && this.state.cartoonId) {
      setTimeout(
        () =>
          Router.push({
            pathname: "/cartoon",
            query: {
              cartoonId: this.state.cartoonId,
              formCompleted: this.state.formCompleted,
              fromIndex: true,
            },
          }),
        3000
      )
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

  validateImage = file => {
    if (!isValidFileType(file)) {
      this.setState({
        error:
          "Oops, it looks like your file is the wrong type! Try uploading a jpg or png.",
      })
      return false
    } else if (file.size > 1048576) {
      this.setState({
        error:
          "Oops, it looks like your file is too big! Try uploading a smaller image.",
      })
      return false
    }
    this.setState({ error: "" })
    return true
  }

  onImageSelect = event => {
    event.preventDefault()
    const file = event.target.files[0]
    if (file && this.validateImage(file)) {
      this.setState(
        {
          file,
          fileName: fileNameFormatter(file.name),
          fileURL: URL.createObjectURL(file),
        },
        this.sendImage
      )
    }
  }
  sendImage = () => {
    const isMobile = window.innerWidth < 500

    const viewToShow = () => {
      if (this.state.formCompleted) return "loading"
      else if (!this.state.formCompleted && isMobile) return "loading"
      return "form"
    }

    this.setState({
      view: viewToShow(),
    })

    const data = new FormData()
    const { file, fileName } = this.state
    data.set("file", file, fileName)
    // axios
    //   .post(`${cartoonEndpoint}/upload`, data)
    //   .then(res => {
    //     const { id: cartoonId } = res.data
    //     setTimeout(
    //       () =>
    //         this.setState({
    //           cartoonId,
    //         }),
    //       3000
    //     )
    //   })
    //   .catch(err => {
    //     setTimeout(
    //       () =>
    //         this.setState({
    //           view: "",
    //           error:
    //             "Oops, something went wrong creating your meme. Please try again!",
    //         }),
    //       2000
    //     )
    //     console.log(err)
    //   })
    this.setState({
      cartoonId: 888,
    })
  }

  seeMeme = () => {
    this.setState({ view: "loading" })
  }

  toggleMenu = () => {
    this.setState(prevProps => ({ showMenu: !prevProps.showMenu }))
  }

  toggleShareModal = () => {
    this.setState(prevProps => ({ showShareModal: !prevProps.showShareModal }))
  }

  handleStartOver = () => {
    this.setState({
      file: null,
      fileName: null,
      fileURL: null,
      error: "",
      cartoon: null,
      view: "",
      showMenu: false,
      showShareModal: false,
    })
  }

  render() {
    const {
      file,
      fileURL,
      error,
      cartoon,
      view,
      showMenu,
      showShareModal,
    } = this.state

    return (
      <Layout>
        <SEO />
        <Upload
          file={file}
          fileURL={fileURL}
          error={error}
          cartoon={cartoon}
          view={view}
          showMenu={showMenu}
          showShareModal={showShareModal}
          submitForm={this.submitForm}
          seeMeme={this.seeMeme}
          onImageSelect={this.onImageSelect}
          handleStartOver={this.handleStartOver}
          toggleShareModal={this.toggleShareModal}
          toggleMenu={this.toggleMenu}
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

export default IndexPage
