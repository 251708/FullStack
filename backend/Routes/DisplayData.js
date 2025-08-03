/*
const express = require('express')
const router = express.Router()

router.post('/foodData' , (req ,res) => {
    try{
        console.log(fetched_data);
        res.send([fetched_data])
    }catch(error){
        console.error(error.messagae);
        res.send("Server Error");
    }
})

module.exports = router;
*/
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

router.post('/foodData', async (req, res) => {
  try {
    const foodItems = await mongoose.connection.db.collection('food_items').find({}).toArray();
    const foodCategory = await mongoose.connection.db.collection('food_category').find({}).toArray();

    res.json({ foodItems, foodCategory });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;



