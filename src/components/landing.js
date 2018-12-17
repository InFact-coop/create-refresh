import React from "react"
import RedButton from "./shared/redButton"
import styled from "styled-components"
import Upload from "./upload"

const Background = styled.div.attrs({
  className:
    "blue bg-blue ba b--light-blue bw4 vh-100 flex justify-center items-center flex-column",
})``

const ButtonHolder = styled.div.attrs({
  className: "flex justify-between",
})``

const LinkToForm = styled.p.attrs({
  className: "white",
})``

const Landing = () => {
  return (
    <Background>
      <Upload />
      <LinkToForm>
        Want to be part of the network to stop Article 13?{" "}
        <a>Join now and save your memes!</a>
      </LinkToForm>
      <ButtonHolder>
        <RedButton>Upload</RedButton>
        <RedButton>Paste URL</RedButton>
        <RedButton>Suprise me</RedButton>
      </ButtonHolder>
    </Background>
  )
}

export default Landing
