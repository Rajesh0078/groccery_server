const mongoose = require("mongoose")

const storeSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    products: [{
        product_id: String,
        name: String,
        category: String,
        price: String,
        quantity_in_stock: Number
    }],
})

module.exports = mongoose.model("Restaurants", storeSchema, "Restaurants")