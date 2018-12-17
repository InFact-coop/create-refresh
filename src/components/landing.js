import React from "react"
import RedButton from "./shared/redButton"
import styled from "styled-components"
import Upload from "./upload"

import facebook from "../assets/images/fb_outline.svg"
import twitter from "../assets/images/twitter_outline.svg"
import logo from "../assets/images/logo-desktop.svg"
import logoMobile from "../assets/images/logo-mobile.svg"
import menuLines from "../assets/images/menu-lines.svg"

const Background = styled.div.attrs({
  className:
    "blue bg-blue ba b--light-blue bw4 vh-100 flex justify-between items-center flex-column",
})``

const ButtonHolder = styled.div.attrs({
  className: "flex justify-between pb3",
})`
  width: 90vw;
  max-width: 483px;
`

const LinkToForm = styled.p.attrs({
  className: "white i font-7 pv2",
})``

const NavContainer = styled.div.attrs({
  className: "justify-between w-100",
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

const DesktopNav = ({ className }) => {
  return (
    <NavContainer className={className}>
      <Link href="">More info</Link>
      <img src={logo} alt="main logo" />
      <Socials>
        <Icon src={facebook} alt="facebook" />
        <Icon src={twitter} alt="twitter" />
      </Socials>
    </NavContainer>
  )
}

const MobileNav = ({ className }) => {
  return (
    <NavContainer className={className}>
      <Icon src={menuLines} alt="menu" />
      <img src={logoMobile} alt="main logo" />
    </NavContainer>
  )
}

const Landing = () => {
  return (
    <Background>
      <MobileNav className="flex dn-ns" />
      <DesktopNav className="dn flex-ns" />
      <Upload />
      <LinkToForm>
        Want to be part of the network to stop Article 13?{" "}
        <a className="underline">Join now and save your memes!</a>
      </LinkToForm>
      <ButtonHolder>
        <RedButton>Upload</RedButton>
        <RedButton className="dn db-ns">Paste URL</RedButton>
        <RedButton>Suprise me</RedButton>
      </ButtonHolder>
    </Background>
  )
}

export default Landing
