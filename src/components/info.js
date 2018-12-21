import React from "react"
import styled from "styled-components"

const Container = styled.div.attrs({
  className:
    "mid-gray flex flex-column flex-row-ns items-center justify-center mt2 mt4-ns mb4-ns",
})``

const Column = styled.div.attrs({
  className: "pa2 pa3-ns lh-copy ",
})`
  max-width: 400px;
`

const Info = () => (
  <Container>
    <Column className="ttu f4 f3-ns separat tc">
      The EU compliant meme generator is here to save your memes
    </Column>
    <Column className="apercu font-5 tl-ns tc mb3 mb0-ns">
      Article 13 is putting your memes at risk. But the EU Compliant Meme
      Generator is here to save them from the purge. Simply upload your meme (or
      picture of your cat—both are acceptable) and watch as your picture becomes
      Certified EU Compliant™. Try for yourself!
    </Column>
  </Container>
)

export default Info
