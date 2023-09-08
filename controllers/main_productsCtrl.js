const main_products = require("../models/categories")


const main_productsCtrl = async (req, res) => {
    const response = await main_products.find({})
    const number = Array.from({ length: 40 }, () => Math.floor(Math.random() * response.length))
    let arr = []
    for (let i = 0; i < number.length; i++) {
        arr.push(response[number[i]])
    }
    res.send(arr)
}

module.exports = main_productsCtrl