const express = require("express")
const dbConnection = require("./config/databaseConfig")
const bodyParser = require("body-parser")
const router = require("./routers/AllRouters")
const authRouter = require("./routers/authRouter")
const authMiddleware = require("./middlewares/authMiddleware")

const cors = require("cors")
const userModel = require("./models/userModel")
const app = express()
require("dotenv").config()
const port = process.env.Port || 8000

dbConnection()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())




app.get("/user", authMiddleware, async (req, res) => {
    try {
        let exist = await userModel.findById(req.user.id)
        if (!exist) {
            return res.send("user not found")
        }
        res.json(exist)
    } catch (error) {
        console.log(error)
    }
})
app.use('/api', authRouter)
app.use("", router)

app.listen(port, () => {
    console.log(`server is running on ${port} value`)
})