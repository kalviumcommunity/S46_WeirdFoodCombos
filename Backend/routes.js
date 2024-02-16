const express = require('express')
const router = express.Router();

const Dish = require('./Schema');

//To get data
router.get('/getfoodsdata' , (req,res)=>{
    Dish.find()
    .then((data) => res.json(data))
    .catch((err) =>res.json(err));
})

//To add data
router.post('/createfood' ,(req,res)=>{
    Dish.create(req.body)
    .then((data) => res.json(data))
    .catch((err) =>res.json(err));
})

//To Get data by ID
router.get('/:id' , (req,res) =>{
    const id = (req.params.id)
    Dish.findById({_id:id})
    .then((data)=> res.json(data))
    .catch((err) => res.json(err));
})

//To Update data at ID
router.put('/updatefood/:id', (req , res)=>{
    const id = (req.params.id)
    Dish.findByIdAndUpdate({_id:id} , {
        Dish:req.body.Dish,
        Ingredients:req.body.Ingredients
    })
    .then((data)=>res.json(data))
    .catch((err)=>res.json(err))
})

router.delete('/deletefood/:id' , (req,res) =>{
    const id = (req.params.id)
    Dish.findByIdAndDelete({_id:id})
    .then((data) => res.json(data))
    .catch((err) => res.json(err))
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
