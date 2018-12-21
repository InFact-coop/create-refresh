import React, { Component } from "react"
import styled from "styled-components"
import bitSteps from "../assets/images/8bit.svg"
import CountrySelect from "./countrySelect"

const Section = styled.section.attrs({
  className: ({ view }) =>
    `${
      view === "form" ? "pa0" : "pv4-ns"
    } flex justify-center w-100 bg-near-white`,
})``

const Container = styled.div.attrs({
  className:
    "flex pa4-ns pa3 justify-between flex-column flex-row-ns flex-column-reverse ",
})`
  background: ${({ theme }) =>
    `url(${bitSteps}), var(--${theme === "light" ? `pink` : `dark-pink`})`};
  background-position: bottom right;
  background-repeat: no-repeat;
  max-width: 797px;
`

const Input = styled.input.attrs({
  className: ({ theme }) =>
    `${
      theme === "light"
        ? "b--dark-pink dark-pink bg-pink"
        : "b--light-pink light-pink bg-dark-pink"
    } ba mv1 db pl2 w5-ns w-100 apercu font-5`,
})`
  border-width: 3px;
  &::placeholder {
    color: ${({ theme }) =>
      theme === "light" ? "var(--dark-pink)" : "var(--light-pink)"};
  }
`

const Checkbox = styled.div.attrs({
  className: ({ theme }) =>
    `${theme === "light" ? "b--dark-pink pink" : "b--light-pink"} bw1 ba mr2`,
})`
  background-color: ${({ value }) => value && "var(--dark-pink)"};
  border-width: 3px;
  min-width: 16px;
  min-height: 16px;
`
const FormButton = styled.button.attrs({
  className: ({ theme }) =>
    `${
      theme === "light" ? "bg-dark-pink light-pink" : "bg-light-pink dark-pink"
    } bn ph2 tc apercu font-5 ma0-ns mv3`,
})`
  width: 184px;
  height: 40px;
`

const InfoText = styled.div.attrs({
  className:
    "w-30-ns w-100 pa0-ns pv3 tr-ns tl dark-pink font-5-ns mobile-body self-end",
})``

const TinyLink = styled.a.attrs({
  className: "db font-7 light-pink underline i",
})`
  font-size: 8px;
`

const ConsentText = styled.p.attrs({
  className: ({ theme }) =>
    `${theme === "light" ? "dark-pink" : "light-pink"} font-7`,
})``

class Signup extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    country: "",
    socialmedia: "",
    checked: false,
  }
  updateForm = event => {
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]: value,
    })
  }
  clickCheckBox = () => {
    this.setState(prevState => ({ checked: !prevState.checked }))
  }

  render() {
    const {
      firstname,
      lastname,
      email,
      country,
      socialmedia,
      checked,
    } = this.state
    const { theme, view, submitForm } = this.props
    return (
      <Section view={view}>
        <Container theme={theme}>
          <form>
            <Input
              name="firstname"
              placeholder="First Name"
              type="text"
              required
              theme={theme}
              value={firstname}
              onChange={this.updateForm}
            />
            <Input
              name="lastname"
              placeholder="Last Name"
              type="text"
              required
              theme={theme}
              value={lastname}
              onChange={this.updateForm}
            />
            <Input
              name="email"
              placeholder="Email"
              type="email"
              required
              theme={theme}
              value={email}
              onChange={this.updateForm}
            />
            <CountrySelect
              theme={theme}
              value={country}
              updateOnChange={this.updateForm}
            />
            <Input
              name="socialmedia"
              placeholder="@SocialMediaHandle"
              type="text"
              theme={theme}
              value={socialmedia}
              onChange={this.updateForm}
            />
            <div className="flex items-center w5-ns w-100 mv2">
              <Checkbox
                value={checked}
                theme={theme}
                onClick={this.clickCheckBox}
              />
              <ConsentText theme={theme}>
                I allow Create.Refresh to use my contact information to send me
                email updates about campaign activities.*
              </ConsentText>
            </div>
            <FormButton type="button" theme={theme} onClick={() => submitForm(this.state)}>
              Sign Up
            </FormButton>
            <TinyLink href="https://createrefresh.eu/privacy/" theme={theme}>
              Learn more about how we use, store, and handle your information
              here.
            </TinyLink>
          </form>
          <InfoText>
            We’re building a network of people dedicated to fixing copyright,
            protecting memes, and saving our Internet forever. Will you join our
            network and help stop Article 13?
          </InfoText>
        </Container>
      </Section>
    )
  }
}

export default Signup
