const User = require('../models/userModel')
const jwt = require("jsonwebtoken")

const createUser = async (req, res) => {
    try {
        const { email } = req.body
        const findUser = await User.findOne({ email: email })
        if (!findUser) {
            const newUser = await User.create(req.body)
            res.send(newUser)
        }
        else {
            res.json({
                msg: "user already exists",
                success: false
            })
        }
    } catch (error) {
        console.log(error)
    }

}

const loginCtrl = async (req, res) => {
    try {
        const { email, password } = req.body
        const findUser = await User.findOne({ email: email })
        if (!findUser) {
            res.json({
                msg: "User not found"
            })
        }
        if (findUser.password !== password) {
            res.json({
                msg: "password not matches"
            })
        }
        let payload = {
            user: {
                id: findUser.id
            }
        }
        jwt.sign(payload, "jwtsecretKey", { expiresIn: 3600000 }, (err, token) => {
            if (err) throw err;
            return res.json({ token })
        })
    }
    catch (error) {
        console.log(error)
    }
}
module.exports = { createUser, loginCtrl }