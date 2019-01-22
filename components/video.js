import React from "react"
import styled from "styled-components"
import video_bg from "../static/images/video_bg.svg"

const Background = styled.div.attrs({
  className:
    "flex justify-center bg-light-pink align-center b0 m0 pv3 ph2 pa0-ns",
})`
  background-image: url(${video_bg});
  background-size: 100%;
`

const IFrame = styled.iframe`
  @media (min-height: 40em) {
    max-width: 70vw;
    max-height: 70vw;
  }
`

const Video = () => (
  <Background>
    <IFrame
      src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fcreate.refresh%2Fvideos%2F2276532395966735%2F&show_text=0&width=476"
      width="436"
      height="436"
      style={{
        border: "none",
        overflow: "hidden",
      }}
      scrolling="no"
      frameBorder="0"
      allowFullScreen={true}
    />
  </Background>
)

export default Video
