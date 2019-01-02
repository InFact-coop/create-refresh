import React from "react"
import styled from "styled-components"

import facebook from "../assets/images/fb_hamburger.svg"
import twitter from "../assets/images/tw_hamburger.svg"
import close from "../assets/images/close_menu.svg"
import background from "../assets/images/menu_bg.svg"

const BackgroundDiv = styled.div.attrs(({ showMenu }) => ({
  className: `${showMenu ? "fixed top-0 left-0 vh-100 w-100" : "dn"}`,
}))`
  background: url(${background}) no-repeat;
  background-size: cover;
  background-position: top left;
`
const Close = styled.img.attrs({
  className: "pv4 ph3",
})``
const NavLinks = styled.div.attrs({
  className: "flex flex-column apercu font-3 pt4 justify-left items-left",
})``
const Link = styled.a.attrs({
  className: "white underline apercu bg-dark-pink",
})`
  font-size: 32px;
  margin-top: 4px;
`
const BoxContainer = styled.div.attrs({
  className: "flex flex-column white items-center justify-center mb2",
})``

const ShareBox = ({ icon, to }) => (
  <BoxContainer>
    <p className="apercu font-5 fw0">Share to</p>
    <img src={icon} alt={to} />
  </BoxContainer>
)

const Hamburger = ({ showMenu, toggleMenu }) => (
  <BackgroundDiv showMenu={showMenu}>
    <div className="flex items-top">
      <Close src={close} alt="close menu" onClick={toggleMenu} />
      <NavLinks>
        <Link>Home</Link>
        <Link>Privacy</Link>
        <Link>FAQ</Link>
      </NavLinks>
    </div>
    <ShareBox to="facebook" icon={facebook} href="" />
    <ShareBox to="twitter" icon={twitter} href="" />
  </BackgroundDiv>
)

export default Hamburger
