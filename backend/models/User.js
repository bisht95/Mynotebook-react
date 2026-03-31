const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserSchema = new Schema ({
    name:{
        type: String,
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require: true
    },
    Date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('user', UserSchema);