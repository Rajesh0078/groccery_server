const categoriesData = require("../models/cat.json")
const storeData = require("../models/categories")

const categoriesCtrl = async (req, res) => {
    const response = await categoriesData.map((item) => item)
    res.send(response)
}

const navCategoryCtrl = async (req, res) => {
    const { value } = req.body
    const response = await storeData.find({ category: value })
    res.send(response)
}

module.exports = { categoriesCtrl, navCategoryCtrl }