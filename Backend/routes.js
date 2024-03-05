const express = require('express');
const router = express.Router();
const Joi = require('joi');
const {Dish , User} = require('./Schema');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
require('dotenv').config();

const secretKey = process.env.SECRETKEY;



// const CreateDishSchema = Joi.object({
//     Dish: Joi.string().required().pattern(new RegExp('^[A-za-z ,.!? ]+$')).messages({
//         'string.pattern.base': `"Dish" should only contain alphabetic characters`
//       }),

//     Ingredients: Joi.string().required().pattern(new RegExp('^[A-Za-z ,.!? ]+$')).messages({
//         'string.pattern.base': `"Ingredients" should only contain alphabetic characters`
//       })
// });



const UpdateDishSchema = Joi.object({
    Dish: Joi.string().required().pattern(new RegExp('^[A-Za-z ,.!?]+$')).messages({
        'string.pattern.base': `"Dish" should only contain alphabetic characters`
      }),
    Ingredients: Joi.string().required().pattern(new RegExp('^[A-Za-z ,.!?]+$')).messages({
        'string.pattern.base': `"Ingredients" should only contain alphabetic characters`
      })
});



router.post("/CreateUser", async (req, res) => {
    console.log(req.body);
    try {
        const {Username , Email , Password} = req.body;
        const hashedPassword = await bcrypt.hash(Password , 10);
        const newUser = await User.create({Username , Email , Password : hashedPassword});
        res.status(201).json(newUser);
    } catch (err) {
        console.error("Error creating user:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});



router.post("/login", async (req, res) => {

    try {
        const { Email, Password } = req.body;

        const user = await User.findOne({ Email });

        if (!user) {
            return res.status(400).json({ error: "Incorrect Email or Password" });
        }

        const passwordMatch = await bcrypt.compare(Password, user.Password);
        const payload = {Username:user.Username , Email:user.Email};

        if (passwordMatch) {
            const token = jwt.sign(payload, secretKey, {expiresIn: 3600});
            // res.cookie("token" , token, {maxAge:360000, httpOnly:true});

            
            console.log("SignedIn")
            return res.json({token , payload});
        }

        else {
            return res.status(400).json({ error: "Incorrect Email or Password" });
        }
    }

    catch (err) {
        console.error("Error Checking User:", err);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});



// To get all data
router.get('/getfoodsdata', async (req, res) => {
    try {
        const data = await Dish.find();
        // const user = await User.findOne({ Email });
        res.json(data);
        // res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});



// To Get data by ID
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Dish.findById(id);

        if (!data) {
            return res.status(404).json({ message: 'Data not found' });
        }
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// To get the particular user 
router.post('/getsingleUser', async (req, res) => {
    try {
      const { token } = req.body;
      console.log(token);
      
      if (!token) {
        return res.status(400).json({ error: 'Token is required' });
      }
      
      jwt.verify(token, secretKey, async (error, data) => {
        if (error) {
          return res.status(401).json({ error: 'Invalid token' });
        }
        
        const { Email } = data;
        const userData = await User.findOne({ Email });
        
        if (!userData) {
          return res.status(404).json({ error: 'User not found' });
        }
        
        return res.status(200).json(userData);
      });
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

// To add data
router.post('/createfood', async (req, res) => {
    try {
        // const { error } = CreateDishSchema.validate(req.body);
        // if (error) {
        //     return res.status(400).json({ error: error.details[0].message });
        // }
        const newData = await Dish.create(req.body);
        res.json(newData);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// To Update data at ID
router.put('/updatefood/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const { error } = UpdateDishSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        const updatedData = await Dish.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedData) {
            return res.status(404).json({ message: 'Data not found' });
        }
        res.json(updatedData);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// To Delete data at ID
router.delete('/deletefood/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deletedData = await Dish.findByIdAndDelete(id);
        if (!deletedData) {
            return res.status(404).json({ message: 'Data not found' });
        }
        res.json(deletedData);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


router.post('/list', (req, res) => {
    res.status(200).send("List Posted");
});

router.get('/list', (req, res) => {
    res.status(200).json({ DishName: "Dosa And Pasta" });
});

router.put('/list/:id', (req, res) => {
    res.status(200).send("List Updated");
});

router.delete('/list/:id', (req, res) => {
    res.status(200).send("List Deleted");
});

module.exports = router;
