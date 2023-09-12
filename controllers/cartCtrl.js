const User = require("../models/userModel")

const createCart = async (req, res) => {
    const { user, name, product_description, product_image, product_price, product_name } = req.body
    const findUser = await User.find({ email: user })
    if (findUser) {
        const newData = await User.updateMany({ email: user }, { $push: { cart: { name: product_name, store: name, description: product_description, image: product_image, price: product_price } } })
        res.send(newData)
    }
    else {
        res.json({
            msg: "user not found"
        })
    }
}

module.exports = createCart