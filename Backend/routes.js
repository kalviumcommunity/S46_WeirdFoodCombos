const express = require('express');
const router = express.Router();
const Joi = require('joi');
const Dish = require('./Schema');

const CreateDishSchema = Joi.object({
    Dish: Joi.string().required().pattern(new RegExp('^[A-za-z ]+$')).messages({
        'string.pattern.base': `"breed" should only contain alphabetic characters`
      }),

    Ingredients: Joi.string().required().pattern(new RegExp('^[A-za-z ]+$')).messages({
        'string.pattern.base': `"breed" should only contain alphabetic characters`
      })
});

const UpdateDishSchema = Joi.object({
    Dish: Joi.string().required().pattern(new RegExp('^[A-za-z ]+$')).messages({
        'string.pattern.base': `"breed" should only contain alphabetic characters`
      }),
    Ingredients: Joi.string().required().pattern(new RegExp('^[A-za-z ]+$')).messages({
        'string.pattern.base': `"breed" should only contain alphabetic characters`
      })
});

// To get all data
router.get('/getfoodsdata', async (req, res) => {
    try {
        const data = await Dish.find();
        res.json(data);
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

// To add data
router.post('/createfood', async (req, res) => {
    try {
        const { error } = CreateDishSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
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
