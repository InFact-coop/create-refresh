import React from "react"
import styled from "styled-components"

import footerBg from "../assets/images/footer.svg"

const StyledFooter = styled.footer`
  background-image: url(${footerBg});
  background-size: 1084px 357px;
  height: 357px;
  display: grid;
  grid-template-columns: 16px 140px 7fr 330px 1fr;
  grid-template-rows: auto 144px 16px 16px;
  grid-template-areas:
    ". . . social ."
    ". license . social ."
    ". license . . ."
    ". . . . .";
  @media (max-width: 500px) {
    grid-template-columns: 0.5rem auto 0.5rem;
    grid-template-rows: 1fr;
    grid-gap: 0.5rem;
    grid-template-areas:
      ". social . "
      ". license .";
  }
`

const GridElement = ({ className, children }) => (
  <div className={className}>{children}</div>
)

const License = styled(GridElement)`
  grid-area: license;
  font-size: 0.75rem;
  color: white;
  line-height: 1.5;
  font-weight: 400;
  @media (max-width: 500px) {
    text-align: center;
  }
`

const Social = styled(GridElement)`
  grid-area: social;
  background: #26302f;
  padding: 32px 47px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  line-height: 1.5;
`

const Footer = () => (
  <StyledFooter>
    <Social>
      <div>Facebook Twitter Instagram</div>
      <div>Visit our social media channels for more info and cool content</div>
      <div>
        <a href="https://createrefresh.eu/privacy/">Privacy</a>
        <a href="https://createrefresh.eu/faq/">FAQ</a>
      </div>
    </Social>
    <License>
      Except where otherwise noted, content on this site is licensed under a
      Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC
      4.0)
    </License>
  </StyledFooter>
)

export default Footer
