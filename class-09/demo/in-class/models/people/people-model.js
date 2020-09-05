'use strict';

const mongoose = require('mongoose');

const Model = require('../mongo-collection.js');

const people = mongoose.Schema({
  name: { type: String, required: true }
});

const peopleSchema = mongoose.model('people', people)

module.exports = new Model(peopleSchema);
