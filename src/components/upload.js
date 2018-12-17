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
    "pointer white bg-blue db w-90 flex tc flex-column align-center justify-center b--dashed b--white bw1",
})``

const Label = styled.label.attrs({
  className: "w-90 h7",
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
  }
  sendImage = () => {
    const data = new FormData()
    const { file, fileName } = this.state
    data.set("file", file, fileName)
    axios.post(endpoint, data).then(res => {
      console.log(res.statusText)
    })
  }
  render() {
    const { file, fileName } = this.state
    return (
      <form>
        <Clickable>
          <Label htmlFor="image">Click to upload:</Label>
          <FileInput
            type="file"
            id="image"
            name="image"
            accept="image/png, image/jpeg"
            multiple={false}
            files={file}
            onChange={this.onImageSelect}
          />
          {fileName && <h2>File uploaded: {fileName}</h2>}
        </Clickable>
        <button onClick={this.sendImage}>Send</button>
      </form>
    )
  }
}

export default Upload
