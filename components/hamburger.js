import React from "react"
import styled from "styled-components"

import facebook from "../static/images/fb_hamburger.svg"
import twitter from "../static/images/tw_hamburger.svg"
import close from "../static/images/close_menu.svg"
import background from "../static/images/menu_bg.svg"

const BackgroundDiv = styled.div.attrs(({ showMenu }) => ({
  className: `${showMenu ? "fixed top-0 left-0 vh-100 w-100" : "dn"}`,
}))`
  background: url(${background}) no-repeat;
  background-size: cover;
  background-position: top left;
`
const Close = styled.img.attrs({
  className: "pv3 pr1 mt2 w2 h2",
})`
  padding-left: 30px;
`

const NavLinks = styled.div.attrs({
  className: "pl2 flex flex-column f3 pt3 mt2 justify-left items-left",
})`
  line-height: 31px;
`
const Link = styled.a.attrs({
  className: "white underline bg-dark-pink",
})`
  padding-bottom: 5px;
  padding-left: 1px;
  padding-right: 3px;
  width: fit-content;
  font-size: 32px;
  margin-top: 4px;
`
const BoxContainer = styled.div.attrs({
  className: "flex flex-column white items-center justify-center mb2",
})``

const ShareText = styled.p.attrs({
  className: "mb1",
})`
  font-size: 24px;
  line-height: 23px;
`

const ShareBox = ({ icon, to, margin }) => (
  <BoxContainer className={margin}>
    <ShareText>Share to</ShareText>
    <img src={icon} alt={to} />
  </BoxContainer>
)

const Hamburger = ({ showMenu, toggleMenu }) => (
  <BackgroundDiv showMenu={showMenu}>
    <div className="flex items-top mb2">
      <Close src={close} alt="close menu" onClick={toggleMenu} />
      <NavLinks>
        <Link href="https://createrefresh.eu">Home</Link>
        <Link href="https://createrefresh.eu/privacy/">Privacy</Link>
        <Link href="https://createrefresh.eu/faq/">FAQ</Link>
      </NavLinks>
    </div>
    <ShareBox margin="ml6" to="facebook" icon={facebook} href="" />
    <ShareBox margin="mr4" to="twitter" icon={twitter} href="" />
  </BackgroundDiv>
)

export default Hamburger
