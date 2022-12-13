const express = require("express")
const app = express()
const marsMissions = require("./models/mars-missions.js")
const port = 3000


app.listen(port, () => {
    console.log("listening")
})    