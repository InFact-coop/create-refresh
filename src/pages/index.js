import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Upload from "../components/upload"
import Info from "../components/info"
import Video from "../components/video"
import Signup from "../components/signup"
import Faq from "../components/faq"
import Footer from "../components/footer"
import Axios from "axios"

class IndexPage extends Component {
  state = {
    formCompleted: false,
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
    // Mailchimp connection to go here
    Axios.post("/", data)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
  render() {
    const { formCompleted } = this.state
    return (
      <Layout>
        <SEO title="Home" keywords={["gatsby", "application", "react"]} />
        <Upload formCompleted={formCompleted} />
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
