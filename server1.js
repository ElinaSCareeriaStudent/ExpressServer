const express = require('express')
const app = express()
const port = 3000 || process.env.PORT
const path = require('path')

const polku = path.join(__dirname, "./public")

app.use(express.static(polku))

app.listen(port, () => console.log("Server is up on port: "+ port))

