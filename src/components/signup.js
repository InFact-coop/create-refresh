import React from "react"
import styled from "styled-components"
import bitSteps from "../assets/images/8bit.svg"

const Section = styled.section.attrs({
  className: "flex justify-center pv4-ns w-100",
})`
  background-color: #f9f9f9;
`

const Container = styled.div.attrs({
  className:
    "flex pa4-ns pa3 justify-between flex-column flex-row-ns flex-column-reverse ",
})`
  background: url(${bitSteps}), var(--pink);
  background-position: bottom right;
  background-repeat: no-repeat;
  max-width: 797px;
`

const Input = styled.input.attrs({
  className:
    "b--dark-pink ba dark-pink bg-pink mv1 db pl2 w5-ns w-100 apercu font-5",
})`
  border-width: 3px;
  &::placeholder {
    color: var(--dark-pink);
  }
`

const Checkbox = styled.div.attrs({
  className: "b--dark-pink bw1 ba pink mr2",
})`
  border-width: 3px;
  min-width: 16px;
  min-height: 16px;
`
const FormButton = styled.button.attrs({
  className: "bg-dark-pink light-pink bn ph2 tc apercu font-5 ma0-ns mv3",
})`
  width: 184px;
  height: 40px;
`

const InfoText = styled.div.attrs({
  className:
    "w-30-ns w-100 pa0-ns pv3 tr-ns tl dark-pink font-5-ns mobile-body self-end",
})``

const Signup = () => (
  <Section>
    <Container>
      <form>
        <Input name="firstname" placeholder="First Name" type="text" required />
        <Input name="lastname" placeholder="Last Name" type="text" required />
        <Input name="email" placeholder="Email" type="email" required />
        <Input name="country" placeholder="Country" type="text" required />
        <Input
          name="socialmedia"
          placeholder="@SocialMediaHandle"
          type="text"
        />
        <div className="flex items-center w5-ns w-100 mv2">
          <Checkbox checked={false} />
          <p className="font-7 dark-pink">
            I allow Create.Refresh to use my contact information to send me
            email updates about campaign activities.*
          </p>
        </div>
        <FormButton type="button">Sign Up</FormButton>
      </form>
      <InfoText>
        We’re building a network of people dedicated to fixing copyright,
        protecting memes, and saving our Internet forever. Will you join our
        network and help stop Article 13?
      </InfoText>
    </Container>
  </Section>
)

export default Signup
