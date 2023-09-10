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
        name: String,
        description: String,
        category: String,
        stock: Number,
        rating: Number,
        price: Number,
        image: String
    }],
})

module.exports = mongoose.model("Restaurants", storeSchema, "Restaurants")