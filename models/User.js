const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    // contributions : type, maxlength, minlength, unique, trim, default 
    name:{
        type : String,
        maxlengh : 50
    },
    email : {
        type:String,
        trim : true, // 공백을 없애주는 것 : Trim
        unique : 1
    },
    password:{
        type: String,
        minlength : 5
    },
    lastname : {
        type : String,
        maxlengh : 50
    },
    role : {
        type : Number,
        default : 0
    },
    image: String,
    token : {
        type : String
    },
    tokenExp:{
        type : Number
    }
});
const User = mongoose.model('User', userSchema);
module.exports = {User};