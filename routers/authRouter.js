const express = require("express")
const { createUser, loginCtrl } = require("../controllers/authCtrl")
const router = express.Router()


router.post("/register", createUser)
router.get("/login", loginCtrl)

module.exports = router