import React, { Component } from "react"
import styled from "styled-components"

import {
  Background,
  LinkToForm,
  DesktopNav,
  UploadButton,
  ShareButtons,
  FileInput,
  Clickable,
  Label,
  LoadingSpinner,
} from "./uploadComponents"

import MobileNav from "./mobileNav"
import SignUp from "./signup"

const ImagesSidebyside = styled.div.attrs({
  className:
    "data-view w-100 flex flex-column flex-row-ns justify-center items-center mv3 mv0-ns",
})``

const Image = styled.div.attrs({ className: "ma2 image-comparison" })`
  max-width: 380px;
  max-height: 380px;
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-repeat: no-repeat;
`

const ShowMeMeme = styled.a.attrs({
  className: "apercu dark-pink font-5 pt2 pb3 pointer data-view",
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
  autoScrollToForm = () => {
    const formTop = document
      .querySelector("#form-section")
      .getBoundingClientRect().top
    window.scrollTo(0, formTop)
  }

  getTwitterHref = cartoonId => {
    const text =
      "Make any meme last beyond Article 13 with the EU Compliant Meme Generator 🤖"

    const encodedQuery = encodeURIComponent(
      `?cartoonId=${cartoonId}&fromIndex=false`
    )
    const url = cartoonId
      ? `https://compliantmemegenerator.eu/cartoon${encodedQuery}`
      : "https://compliantmemegenerator.eu/"

    const hashtags = "SaveYourInternet"
    const via = "CreateRefresh"
    const href = `https://twitter.com/intent/tweet?&text=${text}&hashtags=${hashtags}&via=${via}&url=${url}`
    return href
  }

  shareOnTwitter = () => {
    console.log("here")
    const twitterLink = document.createElement("a")
    twitterLink.href = this.getTwitterHref(this.props.cartoonId)
    twitterLink.style = "display:none;"
    document.body.appendChild(twitterLink)
    twitterLink.click()
  }

  shareOnFacebook = () => {
    //eslint-disable-next-line
    FB.ui(
      {
        method: "share",
        href: this.props.cartoonId
          ? `https://compliantmemegenerator.eu/cartoon?cartoonId=${
              this.props.cartoonId
            }&fromIndex=false`
          : "https://compliantmemegenerator.eu/",
        hashtag: "#SaveYourInternet",
        mobile_iframe: true,
      },
      response => {
        if (response && !response.error_message) {
          console.log("Posting completed.")
        } else {
          console.log("Error while posting.")
        }
      }
    )
  }

  render() {
    const {
      file,
      fileURL,
      error,
      cartoon,
      view,
      showShareModal,
      submitForm,
      seeMeme,
      onImageSelect,
      handleStartOver,
      toggleShareModal,
      cartoonId,
    } = this.props

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
                seeMeme={seeMeme}
              />
              <SignUp
                display="db dn-ns"
                theme="light"
                view={view}
                submitForm={submitForm}
                seeMeme={seeMeme}
              />
            </div>
          )
        case "loading":
          return <Loading />
        default:
          if (cartoon && view === "cartoon") {
            return (
              <ImagesSidebyside>
                <Image src={fileURL} alt="original image" />
                <Image src={cartoon} alt="cartoonified image" />
              </ImagesSidebyside>
            )
          }

          if (!cartoon && view === "cartoon") {
            return <div />
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
                    <p>Click to upload a pic or a meme</p>
                  )}
                </Label>
                <FileInput
                  type="file"
                  id="image"
                  name="image"
                  accept="image/png, image/jpeg"
                  multiple={false}
                  files={file}
                  onChange={onImageSelect}
                />
              </Clickable>
            </form>
          )
      }
    }
    return (
      <Background view={view}>
        <MobileNav
          cartoonId={cartoonId}
          getTwitterHref={this.getTwitterHref}
          shareOnFacebook={this.shareOnFacebook}
        />
        <DesktopNav
          view={view}
          cartoonId={cartoonId}
          getTwitterHref={this.getTwitterHref}
          shareOnFacebook={this.shareOnFacebook}
        />

        <UploadView />

        {view === "form" ? (
          <ShowMeMeme onClick={seeMeme}>
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
            {cartoon && view === "cartoon" ? (
              <ShareButtons
                cartoon={cartoon}
                cartoonId={cartoonId}
                handleStartOver={handleStartOver}
                showShareModal={showShareModal}
                toggleShare={toggleShareModal}
                shareOnTwitter={this.shareOnTwitter}
                shareOnFacebook={this.shareOnFacebook}
              />
            ) : (
              <UploadButton file={file} onImageSelect={onImageSelect} />
            )}
          </div>
        )}
      </Background>
    )
  }
}

export default Upload
