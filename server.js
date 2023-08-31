const express = require('express');
const mongoose = require('mongoose');
const serverConfig = require('./configs/config.js');
const dbConfig = require('./configs/dbConfig.js');
const userModel = require('./model/user.model.js');

const app = express();

// Logic to connect to MongoDB and create an Admin user
mongoose.connect(dbConfig.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', () => {
    console.log('Error while connecting to DB');
});

db.once('open', () => {
    console.log('DB is connected');

    // Logic to create admin user here, if needed
    init();
});

async function init(){
    // check admin is already present or not
    let admin1 = await userModel.findOne({
        userId:"admin"
    })

    if(admin1){
        console.log("Admin user already present.")
        return 
    }
    // Initialize monogoDB here
    const admin = await userModel.create({
        name:"Vinay Rai",
        userId:"admin",
        email:"Vinay@gmail.com",
        userType:"Admin",
        password:"Welcome"
    })
    console.log(admin)
}

db.on('close', () => {
    console.log('DB connection closed');
});

app.listen(serverConfig.PORT, () => {
    console.log('Server is running');
});

// Define your routes and middleware here
// app.use(...)
// app.get(...) 
// etc.
