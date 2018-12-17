import React, { Component } from "react"
import axios from "axios"
import fileNameFormatter from "../utils/fileNameFormat"
import styled from "styled-components"

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

const Label = styled.label.attrs({
  className: "apercu h-100 w-100 flex items-center justify-center",
})``

class Upload extends Component {
  state = {
    file: null,
    fileName: null,
  }
  onImageSelect = event => {
    this.setState({
      file: event.target.files[0],
      fileName: fileNameFormatter(event.target.files[0].name),
    })
    // this.sendImage()
  }
  sendImage = () => {
    const data = new FormData()
    const { file, fileName } = this.state
    data.set("file", file, fileName)
    axios.post(endpoint, data).then(res => {
      console.log(res.statusText)
      this.setState({
        file: null,
        fileName: null,
      })
    })
  }
  render() {
    const { file, fileName } = this.state
    return (
      <form>
        <Clickable>
          <Label htmlFor="image">
            <p>Click to upload</p>
            {fileName && <p>:{fileName}</p>}
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
        <button onClick={this.sendImage}>Send</button>
      </form>
    )
  }
}

export default Upload
