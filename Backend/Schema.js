const mongoose = require('mongoose')

const DishSchema = new mongoose.Schema({
    Dish:{
        type:String,
        required:true,
    },
    Ingredients:{
        type:String,
        required:true
    }
});


const UserSchema = new mongoose.Schema({
    Username:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
        unique:true,
        validate:{
            validator: function(value) {
                return /\S+@\S+\.\S+/.test(value);
            },
            message: props => `${props.value} is not a valid email address!`
        }
    },
    Password:{
        type:String,
        required:true,
        minlength:6
    }
})

const Dish = mongoose.model('fooddatas' ,   DishSchema);
const User = mongoose.model('userdatas' , UserSchema);

module.exports = {Dish , User};