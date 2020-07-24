'use strict';

const mongoose = require('mongoose');

const food = mongoose.Schema({
  name: { type: String, required: true },
  calories: { type: Number, required: true },
  type: { type: String, lowercase: true, enum: ['fruit', 'vegetable', 'protien'] },
});

// --------- LIFECYCLE HOOKS -------------- //
// Runs any time we run the .findOne() method
food.post('findOne', function (doc) {
  doc.name = doc.name.toUpperCase();
});

// Runs any time we create a new record instance
food.post('init', function () {
  // Maybe we can create our own serial id in here?
});

// Runs before we save
food.pre('save', function () {
  this.type = this.type.toLowerCase();
});

module.exports = mongoose.model('food', food);
