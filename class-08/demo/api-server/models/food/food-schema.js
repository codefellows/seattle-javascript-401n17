'use strict';

const mongoose = require('mongoose');

const food = mongoose.Schema({
  name: { type: String, required: true },
  calories: { type: Number, required: true },
  type: { type: String, uppercase: true, enum: ['FRUIT', 'VEGETABLE', 'PROTIEN'] },
});

module.exports = mongoose.model('food', food);

// Take a look in the mongo CLI ... what is the created collection actually called???
