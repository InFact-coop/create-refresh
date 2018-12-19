import React from "react"
import RedButton from "./shared/redButton"
import styled from "styled-components"

import facebook from "../assets/images/fb_outline.svg"
import twitter from "../assets/images/twitter_outline.svg"
import logo from "../assets/images/logo-desktop.svg"
import logoMobile from "../assets/images/logo-mobile.svg"
import menuLines from "../assets/images/menu-lines.svg"

const Background = styled.div.attrs({
  className:
    "blue bg-blue ba b--light-blue bw4 vh-100-ns flex justify-between items-center flex-column",
})``

const ButtonHolder = styled.div.attrs({
  className: "flex justify-between pb3 ph3 ph0-ns pt2",
})`
  width: 90vw;
  max-width: 483px;
`

const LinkToForm = styled.p.attrs({
  className: "white i font-7 pv2 tc mh4",
})``

const NavContainer = styled.div.attrs({
  className: "flex justify-between w-100",
})``

const Link = styled.a.attrs({
  className: "ttu underline white apercu mono pl4 pt3",
})``

const Socials = styled.div.attrs({
  className: "pt2 pr3",
})``

const Icon = styled.img.attrs({
  className: "pa2",
})``

const DesktopNav = () => (
  <div className="db-ns dn w-100">
    <NavContainer>
      <Link href="http://createrefresh.eu">More info</Link>
      <img src={logo} alt="main logo" />
      <Socials>
        <Icon src={facebook} alt="facebook" />
        <Icon src={twitter} alt="twitter" />
      </Socials>
    </NavContainer>
  </div>
)

const MobileNav = () => (
  <div className="dn-ns db w-100">
    <NavContainer>
      <Icon src={menuLines} alt="menu" />
      <img src={logoMobile} alt="main logo" />
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

const ShareButtons = () => (
  <ButtonHolder>
    <RedButton>Share</RedButton>
    <RedButton>Start Over</RedButton>
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
}
