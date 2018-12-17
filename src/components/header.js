import React from "react"
import styled from "styled-components"
import header from "../assets/images/header.svg"

const AppHead = styled.img.attrs({
  className: "center",
  src: header,
})``

const Header = () => (
  <div>
    <AppHead />
  </div>
)

export default Header
