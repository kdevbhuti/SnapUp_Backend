const mongoose = require("mongoose");
const connectDB = require("../mongooes");

const userSchema = new mongoose.Schema({ 
    name:{
        type: String,
    }, 
    email: {
     type: String,
    },
    password:{
        type: String,
    }
});

var userModel = connectDB.model('Users', userSchema);
module.exports = userModel;