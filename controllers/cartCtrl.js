const User = require("../models/userModel")

const createCart = async (req, res) => {
    const { user, name, product_description, product_image, product_price, product_name } = req.body
    const findUser = await User.find({ email: user })
    const cart = findUser.map((item) => item.cart)
    if (cart[0] === undefined) {
        if (findUser) {
            const newData = await User.updateMany({ email: user }, { $push: { cart: { name: product_name, store: name, description: product_description, image: product_image, price: product_price } } })
            res.send(newData)
        }
        else {
            res.json({
                msg: "user not found"
            })
        }
    } else {
        const product = cart[0].filter((name) => name.name === product_name)
        if (findUser && product.length === 0) {
            const newData = await User.updateMany({ email: user }, { $push: { cart: { name: product_name, store: name, description: product_description, image: product_image, price: product_price } } })
            res.send(newData)
        } else {
            res.send("already exists")
        }
    }
}

const getCart = async (req, res) => {
    try {
        const { user } = req.body
        const findUser = await User.find({ email: user })
        if (findUser) {
            const data = findUser.map((item) => item.cart)
            res.send(data)
        }
        else {
            res.send("user not found")
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = { createCart, getCart }