'use strict';

const mongoose = require('mongoose');
const superagent = require('superagent');

// #1 Responsibility: Describe the form or shape of the data
// #2 Responsibility: Assert/Conform/Execute "Business Rules"
// i.e. never save a raw password
//      always lowercase categories
//      automatically decrement quantity on hand if an item is in the cart


// Schema/Shape
const foodDefinition = mongoose.Schema({
  name: { type: String, required: true },
  calories: { type: Number, required: true },
  // inStock: { type: Number, required: true },
  type: { type: String, required: true, enum: ['meat', 'vegetable', 'chocolate'] }
});

foodDefinition.pre('validate', function () {
  // `this` is ... the current record
  this.type = this.type.toLowerCase();
})

foodDefinition.pre('save', function () {
  // `this` is ... the current record
  this.calories = this.calories * 100;
})

foodDefinition.post('save', function () {
  // `this` is ... the current record
  // if (this.inStock <= 0) {
  //   superagent.get('http://pokeapi.co/api/v1/pokemon')
  //   then(results => console.log(results.body));
  // }
  // console.log('POST SAVE', this);
})

// Initialize and Export
module.exports = mongoose.model('food', foodDefinition);
