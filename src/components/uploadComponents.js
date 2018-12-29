import React from "react"
import RedButton from "./shared/redButton"
import styled from "styled-components"

import facebook from "../assets/images/fb_outline.svg"
import twitter from "../assets/images/twitter_outline.svg"
import facebookPink from "../assets/images/fb-outline-pink.svg"
import twitterPink from "../assets/images/twitter-outline-pink.svg"
import logo from "../assets/images/logo-desktop.svg"
import logoMobile from "../assets/images/logo-mobile.svg"
import menuLines from "../assets/images/menu-lines.svg"

const Background = styled.div.attrs({
  className: ({ view }) =>
    `${
      view === "form"
        ? "bg-near-white dark-pink"
        : "ba blue bg-blue b--light-blue bw4"
    } flex items-center flex-column`,
})``

const ButtonHolder = styled.div.attrs({
  className: "flex justify-between pb3 ph3 ph0-ns pt2",
})`
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
    "pointer white bg-blue db flex tc flex-column items-center justify-center b--dashed b--white bw1 apercu-ns",
})`
  width: 85vw;
  height: 60vh;
  max-width: 483px;
  max-height: 370px;
`

const Label = styled.label.attrs({
  className: "apercu-ns h-100 w-100 flex items-center justify-center",
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

const Link = styled.a.attrs({
  className: ({ view }) =>
    `${view === "form" ? "dark-pink" : "white"} ttu underline mono-ns pl4 pt3`,
})``

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
      <img src={logo} alt="main logo" />
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
      <img className="w-75" src={logoMobile} alt="main logo" />
    </NavContainer>
  </div>
)

const UploadButtons = () => (
  <ButtonHolder>
    <RedButton>Upload</RedButton>
    <RedButton className="dn db-ns">Paste URL</RedButton>
    <RedButton>Suprise me</RedButton>
  </ButtonHolder>
)

const ShareButtons = props => (
  <ButtonHolder>
    <RedButton>Share</RedButton>
    <RedButton onClick={props.handleStartOver}>Start Over</RedButton>
    <RedButton className="dn db-ns">Save</RedButton>
  </ButtonHolder>
)

export {
  Background,
  LinkToForm,
  DesktopNav,
  MobileNav,
  UploadButtons,
  ShareButtons,
  FileInput,
  Clickable,
  Label,
}
