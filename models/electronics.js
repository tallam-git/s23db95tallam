const mongoose = require("mongoose")
const electronicSchema = mongoose.Schema({
Electronic_Name: String,
Electronic_Origin: String,
Electronic_ManufacturingYear: Number
})
module.exports = mongoose.model("Electronic",
electronicSchema)