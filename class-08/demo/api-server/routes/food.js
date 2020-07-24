'use strict';

const express = require('express');

// Get an instance of a model (food, in this case)
const food = require('../models/food/food-model.js');

const router = express.Router();

// Define our routes
router.get('/food', getFood);
router.post('/food', postFood);

function getFood(req, res, next) {
  food.get()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

function postFood(req, res, next) {
  food.create(req.body)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

module.exports = router;
