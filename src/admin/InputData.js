const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://Adithya:Appuskunju5@cluster0.kkxodvi.mongodb.net/AdminDB")

const Schema = mongoose.Schema;
const InputSchema = new Schema({
    requirement:String,
    area:String,
    institute:String,
    category:String,
    hours:String
})

//Model creation
var InputData = mongoose.model('curriculum',InputSchema)
module.exports = InputData
