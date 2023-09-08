const storeData = require("../models/storeSchema")


const categoryCtrl = async (req, res) => {
	const result = await storeData.find({})
	const response = result.flatMap((item) => item.products)
	res.send(response)
}

const locationCtrl = async (req, res) => {
	const result = await storeData.find({})
	const response = Array(...new Set(result.map((item) => item.city)))
	res.send(response)
}

module.exports = { categoryCtrl, locationCtrl }