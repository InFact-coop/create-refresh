const nextJs = require("next")
const express = require("express")

const dev = process.env.NODE_ENV !== "production"

const nextApp = nextJs({ dev })
const handle = nextApp.getRequestHandler()

nextApp.prepare().then(() => {
  const app = express()

  app.get("*", (req, res) => handle(req, res))

  app.listen(process.env.PORT || 3000, err => {
    if (err) throw err
    console.log("💃 Ready on http://localhost:3000 🕺")
  })
})
