import React from "react"
import styled from "styled-components"

import footerBg from "../assets/images/footer.svg"
import facebookIcon from "../assets/images/footer-facebook.svg"
import twitterIcon from "../assets/images/footer-twitter.svg"
import instagramIcon from "../assets/images/footer-instagram.svg"

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
    background-position: 127% 0%;
    grid-template-columns: 0.5rem auto 0.5rem;
    grid-template-rows: 1fr;
    grid-gap: 0.5rem;
    grid-template-areas:
      ". social . "
      ". license .";
  }
`
const FooterLink = styled.a.attrs({ className: "white link" })``

const GridElement = ({ className, children }) => (
  <div className={className}>{children}</div>
)

const License = styled(GridElement).attrs(({ className }) => ({
  className: `${className} calibreMedium self-end-ns tc tl-ns white font-footer-ns font-7 mb3-ns `,
}))`
  grid-area: license;

  @media (max-width: 500px) {
    line-height: 10px;
    max-width: 186px;
  }
`

const Social = styled(GridElement).attrs(({ className }) => ({
  className: `${className} mh3 mh0-ns mb2 mb0-ns font-7 font-6-ns flex flex-column bg-dark-gray pb2 ph4 white`,
}))`
  grid-area: social;
  justify-content: space-evenly;
  line-height: 1.5;
`

const Icon = props => (
  <a className="dib h3 pa1 pr0 ml2-ns" href={props.url}>
    <img className="h-100" src={props.img} />
  </a>
)

const Footer = () => (
  <StyledFooter>
    <Social>
      <div className="flex justify-end-ns justify-between">
        <Icon url="https://facebook.com/create.refresh" img={facebookIcon} />
        <Icon url="http://twitter.com/createrefresh" img={twitterIcon} />
        <Icon url="http://instagram.com/create.refresh" img={instagramIcon} />
      </div>
      <div className="tr-ns tc">
        <p>Visit our social media channels for more info and cool content</p>
      </div>
      <div className="flex justify-end-ns justify-center font-6 underline">
        <FooterLink className="mr4" href="https://createrefresh.eu/privacy/">
          Privacy
        </FooterLink>
        <FooterLink href="https://createrefresh.eu/faq/">FAQ</FooterLink>
      </div>
      <License className="center">
        <p className="mt1 dn-ns db">
          Except where otherwise noted, content on this site is licensed under a
          Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC
          4.0)
        </p>
        <p className="mt3 mt2-ns font-7-ns tr-ns">
          Built by{" "}
          <a
            className="color-inherit link underline"
            href="https://www.infactcoop.com/"
          >
            InFact Digital Co-op
          </a>{" "}
          using Dan McNish's amazing{" "}
          <a
            className="color-inherit link underline"
            href="https://github.com/danmacnish/cartoonify"
          >
            Cartoonify
          </a>{" "}
          project.
        </p>
      </License>
    </Social>
    <License className="dn db-ns">
      Except where otherwise noted, content on this site is licensed under a
      Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC
      4.0)
    </License>
  </StyledFooter>
)

export default Footer
