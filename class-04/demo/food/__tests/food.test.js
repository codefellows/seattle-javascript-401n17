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

  it('can .get() a record', async () => {
    const item = {
      name: 'test food 2',
      calories: 10,
      type: "meat"
    };

    const record = await food.post(item)
    const found = await food.get(record.id)
    expect(found._id).toEqual(record._id);
  })
})
