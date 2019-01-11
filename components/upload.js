import React, { Component } from "react"
import axios from "axios"
import fileNameFormatter from "../utils/fileNameFormat"
import styled from "styled-components"
import isValidFileType from "../utils/isValidFileType"
import {
  Background,
  LinkToForm,
  DesktopNav,
  MobileNav,
  UploadButton,
  ShareButtons,
  FileInput,
  Clickable,
  Label,
  LoadingSpinner,
} from "./uploadComponents"
import SignUp from "./signup"

const endpoint = "http://localhost:5000/upload"

const ImagesSidebyside = styled.div.attrs({
  className:
    "data-view flex flex-column flex-row-ns justify-center items-center mv3 mv0-ns",
})``

const Image = styled.div.attrs({ className: "ma2 image-comparison" })`
  max-width: 483px;
  max-height: 370px;
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-repeat: no-repeat;
`

const ShowMeMeme = styled.a.attrs({
  className: "apercu dark-pink font-5 pt2 pb3 data-view",
})`
  &:hover {
    text-decoration: underline;
  }
`
const Loading = () => (
  <form>
    <Clickable>
      <Label htmlFor="image">
        <LoadingSpinner>Loading...</LoadingSpinner>
      </Label>
    </Clickable>
  </form>
)

class Upload extends Component {
  state = {
    file: null,
    fileName: null,
    fileURL: null,
    error: "",
    cartoon: null,
    view: "",
    showMenu: false,
    showShareModal: false,
  }

  componentDidUpdate() {
    if (this.state.view === "loading" && this.state.cartoon) {
      setTimeout(() => this.setState({ view: "" }), 3000)
    }
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
      if (this.props.formCompleted) return "loading"
      else if (!this.props.formCompleted && isMobile) return "loading"
      return "form"
    }

    this.setState({
      view: viewToShow(),
    })

    const data = new FormData()
    const { file, fileName } = this.state
    data.set("file", file, fileName)
    axios
      .post(endpoint, data)
      .then(res => {
        this.setState({
          cartoon: `data:image/png;base64,${res.data.base64}`,
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

  autoScrollToForm = () => {
    const formTop = document
      .querySelector("#form-section")
      .getBoundingClientRect().top
    window.scrollTo(0, formTop)
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
    const { submitForm } = this.props

    const UploadView = () => {
      switch (view) {
        case "form":
          return (
            <div>
              <SignUp
                display="dn db-ns"
                theme="dark"
                view={view}
                submitForm={submitForm}
                seeMeme={this.seeMeme}
              />
              <SignUp
                display="db dn-ns"
                theme="light"
                view={view}
                submitForm={submitForm}
                seeMeme={this.seeMeme}
              />
            </div>
          )
        case "loading":
          return <Loading />
        default:
          if (cartoon && view === "") {
            return (
              <ImagesSidebyside>
                <Image src={fileURL} alt="original image" />
                <Image src={cartoon} alt="cartoonified image" />
              </ImagesSidebyside>
            )
          }

          return (
            <form>
              <Clickable>
                <Label htmlFor="image">
                  {error ? (
                    <p>{error}</p>
                  ) : file ? (
                    <p>Loading...</p>
                  ) : (
                    <p>Click to upload</p>
                  )}
                </Label>
                <FileInput
                  type="file"
                  id="image"
                  name="image"
                  accept="image/png, image/jpeg"
                  multiple={false}
                  files={file}
                  onChange={this.onImageSelect}
                />
              </Clickable>
            </form>
          )
      }
    }
    return (
      <Background view={view}>
        <MobileNav toggleMenu={this.toggleMenu} showMenu={showMenu} />
        <DesktopNav view={view} />

        <UploadView />

        {view === "form" ? (
          <ShowMeMeme onClick={this.seeMeme}>
            No thanks, just give me my meme!
          </ShowMeMeme>
        ) : (
          <div className="flex flex-column justify-center items-center">
            <LinkToForm>
              Want to be part of the network to stop Article 13?{" "}
              <a className="underline white" onClick={this.autoScrollToForm}>
                Join now and save your memes!
              </a>
            </LinkToForm>
            {cartoon && view === "" ? (
              <ShareButtons
                cartoon={cartoon}
                handleStartOver={this.handleStartOver}
                showShareModal={showShareModal}
                toggleShare={this.toggleShareModal}
              />
            ) : (
              <UploadButton file={file} onImageSelect={this.onImageSelect} />
            )}
          </div>
        )}
      </Background>
    )
  }
}

export default Upload