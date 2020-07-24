'use strict';

// Build this first, Without Supergoose ...
// const mongoose = require('mongoose');
// const MONGOOSE_URI = 'mongodb://localhost:27017/food';
// mongoose.connect(MONGOOSE_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Later, Add Supergoose. What's the difference?
// require('@code-fellows/supergoose');

const Food = require('../models/food-collection.js');
const food = new Food();

describe('Food Model', () => {
  it('can create() a new food item', () => {
    let obj = { name: 'test food 1', calories: 999, type: 'fruit' };
    return food.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  it('can get() a food item', () => {
    let obj = { name: 'test food 2', calories: 555, type: 'Vegetable' };
    let expected = { name: 'TEST FOOD 2', calories: 555, type: 'vegetable' };

    return food.create(obj)
      .then(record => {
        return food.get(record._id)
          .then(foodItem => {
            Object.keys(obj).forEach(key => {
              expect(foodItem[key]).toEqual(expected[key]);
            });
          });
      });
  });
});
