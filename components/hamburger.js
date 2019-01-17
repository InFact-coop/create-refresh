import React from "react"
import styled from "styled-components"

import close from "../static/images/close_menu.svg"
import background from "../static/images/menu_bg.svg"

import MenuShared from "./menuShared"

const BackgroundDiv = styled.div.attrs(({ showMenu }) => ({
  className: `${showMenu ? "fixed top-0 left-0 vh-100 w-100" : "dn"}`,
}))``

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

const ShareBox = ({ icon, to, margin, href, onClick }) => (
  <BoxContainer className={margin}>
    <a href={href} onClick={onClick} className="no-underline white">
      <ShareText>Share to</ShareText>
      <img src={icon} alt={to} />
    </a>
  </BoxContainer>
)

const Hamburger = ({
  showMenu,
  toggleMenu,
  shareOnFacebook,
  getTwitterHref,
}) => (
  <BackgroundDiv showMenu={showMenu}>
    <MenuShared
      fbOnClick={shareOnFacebook}
      closeOnClick={toggleMenu}
      twitterHref={getTwitterHref()}
    />
  </BackgroundDiv>
)

export default Hamburger
