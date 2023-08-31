// This hold the schema for the user

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    userId:{
        type : String,
        required : true,
        unique : true
    },
    password:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true,
        unique : true,
        minLenght : 10,
        lowecase : true
    },
    userType:{
        type : String,
        required : true,
        default : "Customer",
        enum : ['Customer','Admin']
    }
},{timestamps:true});

module.exports = mongoose.model("User",userSchema);