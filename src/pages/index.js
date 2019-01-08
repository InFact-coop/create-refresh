import React, { Component } from "react"
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
import { insertTwitter, insertFacebook } from "../utils/socialScripts"

import encode from "../utils/encode"

const endpoint = "http://localhost:5000/upload"

class IndexPage extends Component {
  state = {
    file: null,
    fileName: null,
    fileURL: null,
    error: "",
    cartoon: null,
    view: "",
    showMenu: false,
    showShareModal: false,
    formCompleted: false,
  }
  //eslint-disable-next-line
  componentDidMount() {
    appendTrackingScripts()
    insertTwitter()
    insertFacebook()
  }

  componentDidUpdate() {
    if (this.state.view === "loading" && this.state.cartoon) {
      setTimeout(() => this.setState({ view: "" }), 3000)
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
    this.setState({
      view: "loading",
    })

    const data = new FormData()
    const { file, fileName, fileURL } = this.state
    data.set("file", file, fileName)
    // axios
    //   .post(endpoint, data)
    //   .then(res => {
    //     setTimeout(
    //       () =>
    //         this.setState({
    //           view: this.props.formCompleted ? "" : "form",
    //           cartoon: `data:image/png;base64,${res.data.base64}`,
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
      view: this.props.formCompleted ? "" : "form",
      cartoon: fileURL,
    })
  }

  seeMeme = () => {
    this.setState({ view: "" })
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
        <SEO
          image={fileURL}
          title="Home"
          keywords={["gatsby", "application", "react"]}
        />
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
