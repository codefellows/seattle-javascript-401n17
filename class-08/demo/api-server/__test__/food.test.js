'use strict';

const supergoose = require('@code-fellows/supergoose');

const food = require(`../models/food/food-model.js`);

let testObject = { name: 'apples', calories: 100, type: 'FRUIT' };

describe('Food Model', () => {
  it('can create() a new food', () => {
    return food.create(testObject)
      .then(record => {
        Object.keys(testObject).forEach(key => {
          expect(record[key]).toEqual(testObject[key]);
        });
      });
  });

  it('can get() food', () => {
    return food.get()
      .then(foundObject => {
        Object.keys(testObject).forEach(key => {
          expect(foundObject[0][key]).toEqual(testObject[key]);
        });
      });
  });

});
