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

const api = "https://api.compliantmemegenerator.eu"

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
      Router.push({
        pathname: "/cartoon",
        query: {
          cartoonId: this.state.cartoonId,
          fromIndex: true,
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
    fetch(`${api}/subscribe`, {
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
    } else if (file.size > 3000000) {
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
    axios
      .post(`${api}/upload`, data)
      .then(res => {
        const { id: cartoonId } = res.data
        this.setState({
          cartoonId,
        })
      })
      .catch(err => {
        setTimeout(
          () =>
            this.setState({
              view: "",
              error:
                "Oops, something went wrong creating your meme. Please try again!",
            }),
          2000
        )
        console.log(err)
      })
  }

  seeMeme = () => {
    this.setState({ view: "loading" })
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
    const { file, fileURL, error, cartoon, view, showShareModal } = this.state

    return (
      <Layout>
        <SEO />
        <Upload
          file={file}
          fileURL={fileURL}
          error={error}
          cartoon={cartoon}
          view={view}
          showShareModal={showShareModal}
          submitForm={this.submitForm}
          seeMeme={this.seeMeme}
          onImageSelect={this.onImageSelect}
          handleStartOver={this.handleStartOver}
          toggleShareModal={this.toggleShareModal}
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
