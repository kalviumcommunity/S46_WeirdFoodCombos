const express = require('express')
const router = express.Router();


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
