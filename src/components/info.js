import React from "react"
import styled from "styled-components"

const Container = styled.div.attrs({
  className:
    "mid-gray flex flex-column flex-row-ns items-center justify-center mt2 mt4-ns mb4-ns",
})``

const Column = styled.div.attrs({
  className:
    "ma3-ns pa1 pa4-ns lh-copy h5 flex w-30-ns items-center justify-center",
})`
  max-width: 400px;
`

const Strap = styled(Column).attrs({ className: "ttu f4 f3-ns separat tc" })``

const Description = styled(Column).attrs({ className: "apercu font-5" })``

const Info = () => (
  <Container>
    <Strap>The EU compliant meme generator is here to save your memes</Strap>
    <Description>
      Article 13 is putting your memes at risk. But the EU Compliant Meme
      Generator is here to save them from the purge. Simply upload your meme (or
      picture of your cat—both are acceptable) and watch as your picture becomes
      Certified EU Compliant™. Try for yourself!
    </Description>
  </Container>
)

export default Info
