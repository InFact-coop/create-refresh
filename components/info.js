import React from "react"
import styled from "styled-components"
import info_bg from "../static/images/info_bg.svg"

const Container = styled.div.attrs({
  className:
    "mid-gray flex flex-column flex-row-ns items-center justify-center justify-between-ns ph7-ns pt2 pt4-ns pb4-ns",
})`
  background-image: url(${info_bg});
  background-size: 100%;
  @media (max-width: 40em) {
    background-color: var(--light-pink);
  }
`

const Paragraph = styled.div.attrs({
  className: "pa3 apercu font-5-ns f5 tl-ns tc mb3 mb0-ns",
})`
  max-width: 500px;

  @media (max-width: 40em) {
    line-height: 29px;
  }
`

const Heading = styled.div.attrs({
  className: "pa3 ttu f4 f3-ns separat tc",
})`
  max-width: 400px;

  @media (max-width: 40em) {
    line-height: 42px;
  }
`

const Info = () => (
  <Container>
    <Heading>
      The EU compliant meme generator is here to save your memes
    </Heading>
    <Paragraph>
      Article 13 is putting your memes at risk. But the EU Compliant Meme
      Generator is here to save them from the purge. Simply upload your meme (or
      picture of your cat—both are acceptable) and watch as your picture becomes
      Certified EU Compliant™. Try for yourself!
    </Paragraph>
  </Container>
)

export default Info
