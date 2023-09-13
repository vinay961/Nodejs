const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true,"Name is required"]
    },
    email:{
        type:String,
        require:[true,"Email is mandatory"],
        unique:true
    }
})

module.exports = mongoose.model("NewUser",UserSchema);