'use strict';

require('@code-fellows/supergoose');

const Food = require('../models/food-collection.js');
const food = new Food();

describe('Food Model', () => {
  it('can .post() a new record', () => {

    const item = {
      name: 'test food 1',
      calories: 10,
      type: "meat"
    };

    return food.post(item)
      .then(record => {
        expect(record._id).toBeDefined();
      })

  })

  it('can .get() a record', () => {
    const item = {
      name: 'test food 2',
      calories: 10,
      type: "meat"
    };

    return food.post(item)
      .then(record => {
        food.get(record.id)
          .then(foundRecord => {
            expect(foundRecord._id).toEqual(record.id);
          })
      })
  })
})
