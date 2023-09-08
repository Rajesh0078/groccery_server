const mongoose = require("mongoose")

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.dbURL)
        console.log("DB connected successfully")
    } catch (error) {
        console.log(error)
    }
}

module.exports = dbConnection