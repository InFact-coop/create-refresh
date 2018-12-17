import React, { Component } from "react"
import axios from "axios"
import fileNameFormatter from "../utils/fileNameFormat"

const endpoint = "http://localhost:5000/upload"

class Upload extends Component {
  state = {
    file: null,
  }
  onImageSelect = event => {
    this.setState({
      file: event.target.files[0],
    })
  }
  sendImage = () => {
    const data = new FormData()
    const { file } = this.state
    const fileName = fileNameFormatter(file.name)
    data.set("file", file, fileName)
    axios.post(endpoint, data).then(res => {
      console.log(res.statusText)
    })
  }
  render() {
    const { file } = this.state
    return (
      <form>
        <label htmlFor="image">Click to upload:</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/png, image/jpeg"
          multiple={false}
          files={file}
          onChange={this.onImageSelect}
        />
        <button onClick={this.sendImage}>Send</button>
      </form>
    )
  }
}

export default Upload
