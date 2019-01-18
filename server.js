const nextJs = require("next")
const express = require("express")

const dev = process.env.NODE_ENV !== "production"

const nextApp = nextJs({ dev })
const handle = nextApp.getRequestHandler()

nextApp.prepare().then(() => {
  const app = express()

  app.use(
    // (req, res, next) => {
    //   if (req.get("X-Forwarded-Proto") !== "https" && !dev) {
    //     return res.redirect(["https://", req.get("Host"), req.url].join(""))
    //   }
    //   next()
    // },
    (req, res, next) => {
      if (req.headers.host.slice(0, 4) === "www.") {
        const newHost = req.headers.host.slice(4)
        return res.redirect(
          301,
          req.protocol + "://" + newHost + req.originalUrl
        )
      }
      next()
    }
  )

  app.set("trust proxy", true)

  app.get("*", (req, res) => handle(req, res))

  app.listen(process.env.PORT || 3000, err => {
    if (err) throw err
    console.log("💃 Ready on http://localhost:3000 🕺")
  })
})
