const categoriesData = require("../models/cat.json")
const storeData = require("../models/storeSchema")

const categoriesCtrl = async (req, res) => {
    const response = await categoriesData.map((item) => item)
    res.send(response)
}

const navCategoryCtrl = async (req, res) => {
    const { value, sort } = req.body
    let payload = {}
    if (value) {
        payload['products.category'] = { $in: value }
    }
    const responses = await storeData.find(payload)

    const finalResponse = []

    for (const response of responses) {
        const products = response.products.filter((item) => item.category === value)
        for (let product of products) {
            if (products.length > 0) {
                finalResponse.push({
                    name: response.name,
                    id: response.id,
                    address: response.address,
                    city: response.city,
                    mobile: response.phone,
                    product_name: product.name,
                    product_description: product.description,
                    product_price: product.price,
                    product_stock: product.stock,
                    product_image: product.image,
                    product_category: product.category,
                    product_rating: product.rating
                })
            }
        }
    }
    if (sort) {
        let sortedData = finalResponse.sort((a, b) => {
            if (sort === 1) {
                return b.product_price - a.product_price
            }
            if (sort === -1) {
                return a.product_price - b.product_price
            }
            if (sort === 0) {
                return 0
            }
        })
        res.send(sortedData)
    }
    else {
        res.send(result)
    }
    //res.send(responses)
}

module.exports = { categoriesCtrl, navCategoryCtrl }