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
} from "./uploadComponents"
import SignUp from "./signup"

const endpoint = "http://localhost:5000/upload"

const ImagesSidebyside = styled.div.attrs({
  className:
    "flex flex-column flex-row-ns justify-center items-center mv3 mv0-ns",
})``

const Image = styled.div.attrs({ className: "ma2 image-comparison" })`
  max-width: 483px;
  max-height: 370px;
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-repeat: no-repeat;
`

const ShowMeMeme = styled.a.attrs({
  className: "apercu-ns dark-pink font-5 pt2 pb3",
})`
  &:hover {
    text-decoration: underline;
  }
`

class Upload extends Component {
  state = {
    file: null,
    fileName: null,
    fileURL: null,
    error: "",
    cartoon: null,
    view: "",
    showMenu: true,
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
    console.log("got an image")
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
    const data = new FormData()
    const { file, fileName } = this.state
    data.set("file", file, fileName)
    axios
      .post(endpoint, data)
      .then(res => {
        if (this.props.formCompleted) {
          this.setState({
            cartoon: `data:image/png;base64,${res.data.base64}`,
          })
        } else {
          this.setState({
            view: "form",
            cartoon: `data:image/png;base64,${res.data.base64}`,
          })
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
  seeMeme = () => {
    this.setState({ view: "" })
  }
  toggleMenu = () => {
    this.setState(prevProps => ({ showMenu: !prevProps.showMenu }))
  }
  handleStartOver = () => {
    this.setState({
      file: null,
      fileName: null,
      fileURL: null,
      error: "",
      cartoon: null,
      view: "",
    })
  }
  render() {
    const { file, fileURL, error, cartoon, view, showMenu } = this.state
    const { submitForm } = this.props
    return (
      <Background view={view}>
        <MobileNav toggleMenu={this.toggleMenu} showMenu={showMenu} />
        <DesktopNav view={view} />

        {view === "form" ? (
          <SignUp
            theme="dark"
            view={view}
            submitForm={submitForm}
            seeMeme={this.seeMeme}
          />
        ) : cartoon ? (
          <ImagesSidebyside>
            <Image src={fileURL} alt="original image" />
            <Image src={cartoon} alt="cartoonified image" />
          </ImagesSidebyside>
        ) : (
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
        )}

        {view === "form" ? (
          <ShowMeMeme onClick={this.seeMeme}>
            No thanks, just give me my meme!
          </ShowMeMeme>
        ) : (
          <div>
            <LinkToForm>
              Want to be part of the network to stop Article 13?{" "}
              <a className="underline">Join now and save your memes!</a>
            </LinkToForm>
            {cartoon ? (
              <ShareButtons handleStartOver={this.handleStartOver} />
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
