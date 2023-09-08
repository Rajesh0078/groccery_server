const express = require("express")
const dbConnection = require("./config/databaseConfig")
const bodyParser = require("body-parser")
const router = require("./routers/AllRouters")
const cors = require("cors")
const app = express()
require("dotenv").config()
const port = process.env.Port || 8000

dbConnection()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("", router)

app.listen(port, () => {
    console.log(`server is running on ${port} value`)
})