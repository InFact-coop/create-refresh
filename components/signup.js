import React, { Component } from "react"
import styled from "styled-components"
import bitSteps from "../static/images/8bit.svg"
import CountrySelect from "./countrySelect"

const Section = styled.section.attrs(({ view }) => ({
  className: `${
    view === "form" ? "pa0" : "pv4-ns"
  } flex justify-center w-100 bg-near-white`,
}))``

const Container = styled.div.attrs({
  className:
    "flex pa4-ns pa3 justify-between flex-column flex-row-ns flex-column-reverse ",
})`
  background: ${({ theme }) =>
    `url(${bitSteps}), var(--${theme === "light" ? `pink` : `dark-pink`})`};
  background-position: bottom right;
  background-repeat: no-repeat;
  max-width: 797px;
  @media (max-width: 30em) {
    background-position: bottom left;
  }
`

const Input = styled.input.attrs(({ theme }) => ({
  className: `${
    theme === "light"
      ? "b--dark-pink dark-pink bg-transparent"
      : "b--light-pink light-pink bg-transparent"
  } ba mv1 pt0-ns db pl2 bw1 w5-ns w-100 calibreMedium apercu-ns font-5`,
}))`
  &::placeholder {
    color: ${({ theme }) =>
      theme === "light" ? "var(--dark-pink)" : "var(--light-pink)"};
  }
`

const getBoxColor = (value, theme) => {
  if (value) {
    if (theme === "light") {
      return "var(--dark-pink)"
    }
    return "var(--light-pink)"
  }
  return ""
}

const Checkbox = styled.div.attrs(({ theme }) => ({
  className: `${
    theme === "light" ? "b--dark-pink pink" : "b--light-pink"
  } bw1 ba mr2`,
}))`
  background-color: ${({ value, theme }) => getBoxColor(value, theme)};
  border-width: 3px;
  min-width: 16px;
  min-height: 16px;
`
const FormButton = styled.button.attrs(({ theme }) => ({
  className: `${
    theme === "light" ? "bg-dark-pink light-pink" : "bg-light-pink dark-pink"
  } bn ph2 tc calibreMedium apercu-ns font-5 ma0-ns mv3 data-signup db dib-ns center`,
}))`
  width: 184px;
  height: 40px;
`

const InfoText = styled.div.attrs({
  className:
    "w-30-ns w-100 pa0-ns pv3 tr-ns tl dark-pink f6 font-5-ns self-end",
})`
  @media (min-width: 43.75em) {
    width: 25%;
  }
  @media (max-width: 40em) {
    line-height: 29px;
  }
`

const TinyLink = styled.a.attrs(({ theme }) => ({
  className: `${
    theme === "light" ? "dark-pink" : "light-pink"
  } tc tl-ns db font-7 no-underline underline-hover i`,
}))`
  font-size: 8px;
`

const ConsentText = styled.p.attrs(({ theme }) => ({
  className: `${theme === "light" ? "dark-pink" : "light-pink"} font-7`,
}))``

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
    const { theme, view, submitForm, seeMeme, display } = this.props
    return (
      <div className={display}>
        <Section view={view} id="form-section">
          <Container theme={theme}>
            <form className="w-100">
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
                  name="consent"
                  value={checked}
                  theme={theme}
                  onClick={this.clickCheckBox}
                  required
                />
                <ConsentText theme={theme}>
                  I allow Create.Refresh to use my contact information to send
                  me email updates about campaign activities.*
                </ConsentText>
              </div>
              <FormButton
                className="data-signup"
                type="button"
                theme={theme}
                onClick={() => {
                  submitForm(this.state)
                  if (seeMeme) seeMeme()
                }}
              >
                Sign Up
              </FormButton>
              <TinyLink href="https://createrefresh.eu/privacy/" theme={theme}>
                Learn more about how we use, store, and handle your information
                here.
              </TinyLink>
            </form>
            <InfoText>
              We’re building a network of people dedicated to fixing copyright,
              protecting memes, and saving our Internet forever. Will you join
              our network and help stop Article 13?
            </InfoText>
          </Container>
        </Section>
      </div>
    )
  }
}

export default Signup
