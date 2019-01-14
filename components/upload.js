import React, { Component } from "react"
import styled from "styled-components"

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
  autoScrollToForm = () => {
    const formTop = document
      .querySelector("#form-section")
      .getBoundingClientRect().top
    window.scrollTo(0, formTop)
  }

  getTwitterHref = cartoonId => {
    const text =
      "Make any meme last beyond Article 13 with the EU Compliant Meme Generator 🤖"
    const url = cartoonId
      ? `https://eu-compliant-meme-generator.herokuapp.com/cartoon?cartoon=${cartoonId}`
      : "https://eu-compliant-meme-generator.herokuapp.com/"
    const hashtags = "SaveYourInternet"
    const via = "lucydev5"

    const href = `https://twitter.com/intent/tweet?text=${text}&url=${url}&hashtag=${hashtags}&via=${via}`
    return href
  }

  shareImageOnTwitter = () => {
    const link = document.createElement("a")
    link.href = this.getTwitterHref(this.props.cartoonId)
    link.style.display = "none"
    document.body.appendChild(link)
    link.click()
  }

  shareImageOnFacebook = () => {
    const link = document.createElement("a")
    link.target = "_blank"
    link.class = "fb-xfbml-parse-ignore"
    link.style.display = "none"
    link.href = `https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Feu-compliant-meme-generator.netlify.com%2F&src=sdkpreparse`

    document.body.appendChild(link)
    link.click()
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
      submitForm,
      seeMeme,
      onImageSelect,
      toggleMenu,
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
                  onChange={onImageSelect}
                />
              </Clickable>
            </form>
          )
      }
    }
    return (
      <Background view={view}>
        <MobileNav toggleMenu={toggleMenu} showMenu={showMenu} />
        <DesktopNav
          view={view}
          cartoonId={cartoonId}
          getTwitterHref={this.getTwitterHref}
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
                getTwitterHref={this.getTwitterHref}
                shareImageOnFacebook={this.shareImageOnFacebook}
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
