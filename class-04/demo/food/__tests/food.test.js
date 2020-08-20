'use strict';

require('@code-fellows/supergoose');

const Food = require('../models/food-collection.js');

const food = new Food();

describe('Food Collection', () => {

  it('can .post() a new record', () => {

    let obj = {
      name: 'test record',
      calories: 1,
      type: 'meat'
    };

    return food.post(obj)
      .then(record => {
        expect(record._id).toBeDefined();
      })

  });

  it('can .get() a record from the database', async () => {
    // insert a new record
    // use it's _id
    // find that record (with the _id that we just added)
    // Assert that we have data

    let obj = {
      name: 'test record',
      calories: 1,
      type: 'meat'
    };

    let insertedRecord = await food.post(obj);
    let foundRecord = await (food.get(insertedRecord._id))
    expect(foundRecord._id).toEqual(insertedRecord._id);

  });

});
