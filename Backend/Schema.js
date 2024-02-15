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

const Dish = mongoose.model('fooddatas' ,   DishSchema);

module.exports = Dish;