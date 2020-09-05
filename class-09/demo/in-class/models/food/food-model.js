'use strict';

const mongoose = require('mongoose');

const Model = require('../mongo-collection.js');

const schema = mongoose.Schema({
  name: { type: String, required: true }
});

const foodSchema = mongoose.model('food', schema)

module.exports = new Model(foodSchema);
