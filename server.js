// This file doesn't go through babel or webpack transformation.
// Make sure the syntax and sources this file requires are compatible with the current node version you are running
// See https://github.com/zeit/next.js/issues/1245 for discussions on Universal Webpack or universal Babel
const { createServer } = require("http")
const { parse, format } = require("url")
const next = require("next")
const express = require("express")

const dev = process.env.NODE_ENV !== "production"
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

nextApp.prepare().then(() => {
  const app = express()

  app.use((req, res, next) => {
    if (!req.secure) {
      return res.redirect(["https://", req.get("Host"), req.url].join(""))
    }
    next()
  })

  app.get("*", (req, res) => handle(req, res))

  app.listen(3000, err => {
    if (err) throw err
    console.log("Ready on http://localhost:3000")
  })
})
