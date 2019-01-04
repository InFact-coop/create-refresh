import React from "react"
import styled from "styled-components"

const Background = styled.div.attrs({
  className: "flex justify-center bg-light-pink align-center b0 m0 p0",
})``

const VideoContainer = styled.div.attrs({
  className: "flex justify-center align-center bg-black mb4 mb0-ns",
})`
  width: 80vw;
`

const IFrame = styled.iframe.attrs({
  className: "",
})`
  max-width: 70vw;
  max-height: 70vw;
`

const LetterBox = styled.div.attrs({
  className: "w4-ns db-ns dn",
})``

const Video = () => (
  <Background>
    <VideoContainer>
      <LetterBox />
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
      <LetterBox />
    </VideoContainer>
  </Background>
)

export default Video
