const mongoose = require("mongoose");
const connectDB = require("../mongooes");

const userSchema = new mongoose.Schema({ 
    itemName:{
        type: String,
    }, 
    price: {
     type: String,
    },
    description:{
        type: String,
    },
    image:{
        type: String,
    }
});

var userModel = connectDB.model('Items', userSchema);
module.exports = userModel;