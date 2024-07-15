const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const adminModel = require('./src/admin/adminModel')
const InputData = require("./src/admin/InputData");

const mongoose = require('mongoose')

const cors = require('cors')
app.use(cors());
// var routes = require('./routes/routes')
const authroutes=require('./routes/authroutes')
app.use(express.json())
app.use('/auth',authroutes);
mongoose.connect('mongodb+srv://Adithya:Appuskunju5@cluster0.kkxodvi.mongodb.net/AdminDB')

app.post('/input',bodyParser.json(),function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods:GET,POST,PUT,DELETE')
    console.log(req.body);
    var item = {
        requirement: req.body.item.requirement,
        area:req.body.item.area,
        institute:req.body.item.institute,
        category:req.body.item.category,
        hours:req.body.item.hours
    }
    var item = new InputData(item);
    item.save();
  
})

    app.listen(3000,function port(error){
        if(error){
            console.log(error)
        }
        else{
            console.log("Port Connected...")
        }
    })

