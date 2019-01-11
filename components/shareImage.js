import React from "react"
import styled from "styled-components"

import twitterFilled from "../static/images/tw_hamburger.svg"
import facebookFilled from "../static/images/fb_hamburger.svg"

const SpeechBubble = styled.div.attrs({
  className:
    "bg-dark-pink flex justify-between items-center absolute br2 outline-0",
})`
  z-index: 1;
  width: 120px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  top: -71px;
  left: 30px;
`
const ShareIcon = styled.img.attrs({
  className: "pa1",
})`
  height: 40px;
  width: 40px;
`
const Link = styled.a.attrs({
  className: "pa0 ma0 link flex items-center",
})``

const Triangle = styled.div.attrs({
  className: "absolute bg-dark-pink br2 outline-0",
})`
  z-index: -1;
  bottom: -15px;
  left: 20px;
  width: 30px;
  height: 30px;
  clip-path: polygon(0 0, 50% 100%, 100% 0);
`

const ShareModal = () => (
  <SpeechBubble>
    <Link className="data-fb" href="">
      <ShareIcon src={facebookFilled} alt="share on facebook" />
    </Link>
    <Link className="data-tw" href="">
      <ShareIcon src={twitterFilled} alt="share on twitter" />
    </Link>
    <Triangle />
  </SpeechBubble>
)

export default ShareModal
