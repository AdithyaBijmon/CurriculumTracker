const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var adminSchema = new Schema({
    username:{
        type : String,
        required : true
    },
     password:{
        type : String,
        required : true
    },
    role : {
        type : String
    }
    

})
var adminData = mongoose.model('users',adminSchema);
module.exports = adminData
