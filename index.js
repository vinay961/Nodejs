const express = require('express');
const mongoose = require('mongoose');
// Creating instance of express
const app = express();

// express Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// connecting database
mongoose.connect('mongodb://0.0.0.0:27017')
const db = mongoose.connection;
db.on('error',()=>{
    console.log("Get error while connecting to DB.");
})
db.once('open',()=>{
    console.log("DB is connected successful.");
})


// mounting router's
const userRoutes = require('./routes/UserRoutes.js')
app.use('/',userRoutes);

// Creating Server


app.get( "/", (req,res)=>{
    res.send("hello world");
})

PORT=2000;
app.listen(PORT,()=>{
    console.log(`Server is running on Port Number:${PORT}`);
})