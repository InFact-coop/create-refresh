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

const VideoDiv = styled.div`
  @media (min-height: 40em) {
    max-width: 70vw;
    max-height: 70vw;
  }
`

const Video = () => (
  <Background>
    <VideoDiv
      className="fb-video"
      data-href="https://www.facebook.com/create.refresh/videos/2276532395966735"
      data-height="436"
      data-width="436"
      data-show-text="false"
      data-allowfullscreen="true"
    >
      <blockquote
        cite="https://www.facebook.com/create.refresh/videos/2276532395966735/"
        className="fb-xfbml-parse-ignore"
      >
        <a href="https://www.facebook.com/create.refresh/videos/2276532395966735/">
          The EU-compliant Meme Generator
        </a>
        <p>
          Some say the user experience of the Internet could decline if Article
          13 passes. Well, fear not! The EU-compliant Meme Generator is here to
          make your memes 100% compliant to Article 13! Save your memes at
          www.saveyourinternet.eu
        </p>
        Posted by{" "}
        <a href="https://www.facebook.com/create.refresh/">Create.Refresh</a> on
        Saturday, September 8, 2018
      </blockquote>
    </VideoDiv>
  </Background>
)

export default Video
