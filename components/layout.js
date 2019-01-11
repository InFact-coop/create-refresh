import React from "react"
import styled from "styled-components"

const Container = styled.div`
  margin: 0 auto;
  max-width: 1500px;
`

const Layout = ({ children }) => (
  <Container>
    <div>{children}</div>
  </Container>
)

export default Layout
