import React from "react"
import styled from "styled-components"
import "../styles/index.css"

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`

const Layout = ({ children }) => (
  <Container>
    <div>{children}</div>
  </Container>
)

export default Layout
