const express = require('express')
const router = express.Router();

const Dish = require('./Schema');


router.get('/getfoodsdata' , (req,res)=>{
    Dish.find()
    .then((data) => res.json(data))
    .catch((err) =>res.json(err));
})


router.post('/createfood' ,(req,res)=>{
    Dish.create(req.body)
    .then((data) => res.json(data))
    .catch((err) =>res.json(err));
})

router.post('/list' , (req,res) => {
    res.status(200).send("List Posted");
})

router.get('/list', (req,res)=> {
    res.status(200).json({DishName: "Dosa And Pasta"});
})

router.put('/list/:id' ,(req,res)=> {
    res.status(200).send("List Updated");
})

router.delete('/list/:id' ,(req,res)=>{
    res.status(200).send("List Deleted");
})

module.exports = router;
