const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstName:{
        type:String,
        trim:true,
        required:[true,'first name is required'],
        maxlength: 32
    },
    lastName:{
        type:String,
        trim:true,
        required:[true,'last name is required'],
        maxlength: 32
    },
    email:{
        type:String,
        trim:true,
        required:[true,'email is required'],
        unique:true,
        match:[
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ]
    },
    password:{
        type:String,
        trim:true,
        required:[true,'password is required'],
        minlength: [6,'password must have at least (6) charcters']
    },
    imageURL:{
        type:String}
});

const User = mongoose.model("User", UserSchema);
module.exports = User;