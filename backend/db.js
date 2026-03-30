const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/mynotebook";

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log(" hi Connected to Mongo Successfully");
    } catch (error) {
        console.error("Mongo connection error:", error);
    }
};

module.exports = connectToMongo;