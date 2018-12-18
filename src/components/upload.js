import React, { Component } from "react"
import axios from "axios"
import fileNameFormatter from "../utils/fileNameFormat"
import styled from "styled-components"
import isValidFileType from "../utils/isValidFileType"

const endpoint = "http://localhost:5000/upload"

const FileInput = styled.input.attrs({
  className: "",
})`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`

const Clickable = styled.div.attrs({
  className:
    "pointer white bg-blue db flex tc flex-column items-center justify-center b--dashed b--white bw1 apercu",
})`
  width: 85vw;
  height: 60vh;
  max-width: 483px;
  max-height: 370px;
`

const ImagesSidebyside = styled.div.attrs({
  className: "flex flex-column-ns flex-row bg-light-pink",
})``

const Image = styled.div.attrs({ className: "w-40-ns w-90" })`
  max-width: 483px;
  max-height: 370px;
`

const Label = styled.label.attrs({
  className: "apercu h-100 w-100 flex items-center justify-center",
})`
  p {
    width: 50%;
  }
`

class Upload extends Component {
  state = {
    file: null,
    fileName: null,
    error: "",
    cartoon: null,
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
        console.log("Status: ", res.statusText)
        console.log("Body: ", res.body)
        this.setState({
          cartoon: res.body,
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
  render() {
    const { file, error, cartoon } = this.state
    return cartoon ? (
      <ImagesSidebyside>
        <Image src={file} alt="original image" />
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
    )
  }
}

export default Upload
