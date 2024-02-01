
const mongoose = require("mongoose")

const schema = mongoose.Schema({
    img: String,
    title: String,
})

const exporting = mongoose.model("simpleaddcard", schema)

module.exports = exporting