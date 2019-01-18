import React from "react"
import styled from "styled-components"

import MenuShared from "./menuShared"

const BackgroundDiv = styled.div.attrs(({ showMenu }) => ({
  className: `${
    showMenu ? "fixed top-0 left-0 vh-100 w-100 z-1 bg-white" : "dn"
  }`,
}))``

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
