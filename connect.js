const mongoose = require("mongoose")
require('dotenv').config();

const url  = process.env.MONGO_URL;

async function connectToMongoDB() {
 
    try{
        await mongoose.connect(url, {

        });
        console.log("MongoDB connected");
     } catch(err) {
        console.error("MongoDB connection failed", err);
        process.exit(1)
     }
}


module.exports = {
    connectToMongoDB,
}