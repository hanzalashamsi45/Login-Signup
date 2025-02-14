const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/wanderlustDB"; 
// const mongoURI = "mongodb://127.0.0.1:27017/wanderlustDB"; 


const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to Mongo Successfully");
    } catch (err) {
        console.error("Failed to connect to Mongo", err);
        process.exit(1); 
    }
};
module.exports = connectToMongo;

