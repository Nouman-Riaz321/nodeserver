const mongoose = require("mongoose")

const connectdb = () => {
    mongoose.connect("mongodb+srv://numanriaz:12345@cluster0.sarjrbp.mongodb.net/?retryWrites=true&w=majority").then(res => {
        console.log("db connect successfully");
    })
}

module.exports = connectdb