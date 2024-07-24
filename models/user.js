const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({

    name : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    work : {
        type : String,
        enum : ["chef","waiter" ,'manger'],
        required : true
    },
    email : {
        type : String,
        unique : true,
        required : true,
    },
    address:{
        type: String,
    },
    salary :{
        type : Number,
        required : true
    }
}, {
    timestamps : true
});


const User = mongoose.model("User" , UserSchema);
module.exports = User;