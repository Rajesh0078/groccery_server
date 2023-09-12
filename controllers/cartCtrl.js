const User = require("../models/userModel")

const createCart = async (req, res) => {
    const { user } = req.body
    const findUser = await User.find({ email: user })
    if (findUser) {
        const newData = await User.updateMany({ email: user }, { $push: { cart: req.body } })
        res.send(newData)
    }
    else {
        res.json({
            msg: "user not found"
        })
    }
}

module.exports = createCart