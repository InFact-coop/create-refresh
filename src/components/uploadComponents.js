import React from "react"
import RedButton from "./shared/redButton"
import styled, { keyframes } from "styled-components"

import facebook from "../assets/images/fb_outline.svg"
import twitter from "../assets/images/twitter_outline.svg"
import facebookPink from "../assets/images/fb-outline-pink.svg"
import twitterPink from "../assets/images/twitter-outline-pink.svg"
import logo from "../assets/images/logo-desktop.svg"
import logoMobile from "../assets/images/logo-mobile.svg"
import menuLines from "../assets/images/menu-lines.svg"
import loading from "../assets/images/loading.svg"

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Background = styled.div.attrs(({ view }) => ({
  className: `${
    view === "form"
      ? "bg-near-white dark-pink"
      : "ba blue bg-blue b--light-blue bw4"
  } flex items-center flex-column pv2-ns pv0`,
}))``

const ButtonHolder = styled.div.attrs(({ display }) => ({
  className: `flex ${display} pb3 ph2 ph0-ns pt2`,
}))`
  width: 90vw;
  max-width: 483px;
`

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
    "white bg-blue db flex tc flex-column items-center justify-center b--dashed b--white bw1 apercu",
})`
  width: 85vw;
  height: 60vh;
  max-width: 483px;
  max-height: 370px;
`

const Label = styled.label.attrs({
  className: "apercu pointer h-100 w-100 flex items-center justify-center",
})`
  p {
    width: 50%;
  }
`

const LinkToForm = styled.p.attrs({
  className: "white i font-7 pv2 tc mh4",
})``

const NavContainer = styled.div.attrs({
  className: "flex justify-between w-100",
})``

const Link = styled.a.attrs(({ view }) => ({
  className: `${
    view === "form" ? "dark-pink" : "white"
  } ttu underline mono pl4 pt3`,
}))``

const Socials = styled.div.attrs({
  className: "pt2 pr3",
})``

const Icon = styled.img.attrs({
  className: "pa2",
})``

const DesktopNav = ({ view }) => (
  <div className="db-ns dn w-100 mb1">
    <NavContainer>
      <Link href="http://createrefresh.eu" view={view}>
        More info
      </Link>
      <img className="w-75" src={logo} alt="main logo" />
      <Socials>
        <Icon
          src={view === "form" ? facebookPink : facebook}
          alt="facebook"
          view={view}
        />
        <Icon
          src={view === "form" ? twitterPink : twitter}
          alt="twitter"
          view={view}
        />
      </Socials>
    </NavContainer>
  </div>
)

const MobileNav = () => (
  <div className="dn-ns db w-100 mb1">
    <NavContainer className="pr2">
      <Icon src={menuLines} alt="menu" />
      <img className="w-75 mv1" src={logoMobile} alt="main logo" />
    </NavContainer>
  </div>
)

const UploadButton = ({ file, onImageSelect }) => (
  <ButtonHolder display="justify-center">
    <form>
      <RedButton type="button">
        <label htmlFor="buttonUpload">Upload</label>
      </RedButton>
      <FileInput
        type="file"
        id="buttonUpload"
        name="buttonUpload"
        accept="image/png, image/jpeg"
        multiple={false}
        files={file}
        onChange={onImageSelect}
      />
    </form>
  </ButtonHolder>
)

const ShareButtons = props => (
  <ButtonHolder display="justify-between">
    <RedButton>Share</RedButton>
    <RedButton onClick={props.handleStartOver}>Start Over</RedButton>
    <a href={props.cartoon} download="eu-compliant-meme" className="dn db-ns">
      <RedButton>Save</RedButton>
    </a>
  </ButtonHolder>
)

const LoadingSpinner = styled.div.attrs({
  className:
    "dib w-50 h-50 flex justify-center items-center black ttu separat font-5",
})`
  background-image: url(${loading});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  animation: ${rotate} 2s linear infinite;
`

export {
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
}
