import React from "react"
import Header from "./header"

const Layout = ({ children }) => (
  <div>
    <Header />
    <div>{children}</div>
    <p className="apercu i font-2">apercu italic</p>
    <p className="apercu i fw6 font-2">apercu italic</p>
    <p className="apercu-mono font-2">apercu mono</p>
    <p className="separat font-2">separat</p>
    <p className="calibre font-2">calibre</p>
    <p className="calibre b font-2">calibre bold</p>
    <p className="franklin b font-2">franklin</p>
  </div>
)

export default Layout
