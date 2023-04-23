const mongoose = require("mongoose")
const electronicSchema = mongoose.Schema({
Electronic_Name: {
    type: String,
    required: true,
    unique: true,
    minLength: [3, "Name of the Electronic is not valid"]
},
Electronic_Origin: {
    type: String,
    required: true,
    minLength: [0, "Location of the Electronic is not valid"]
},
Electronic_ManufacturingYear:  {
    type: Number,
    required: true,
    min: [0, "Variants of the Electronic is not valid"]
}
})
module.exports = mongoose.model("Electronic",
electronicSchema)