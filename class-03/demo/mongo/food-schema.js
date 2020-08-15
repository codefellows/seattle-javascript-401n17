'use strict';

const mongoose = require('mongoose');

const food = mongoose.Schema({
  name: { type: String, required: true },
  calories: { type: Number, required: true },
  type: { type: String, required: true, enum: ['vegetable', 'fruit', 'meat', 'chocolate'] }
});

module.exports = mongoose.model('food', food);

/*
CREATE TABLE food (
  name: VARCHAR(200),
  calories: INT,
  type: VARCHAR(200)
)
*/
