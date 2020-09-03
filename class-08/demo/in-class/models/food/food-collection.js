'use strict';

const schema = require('./food-schema');
const e = require('express');

class FoodCollection {

  create(newRecord) {
    let record = new schema(newRecord);
    return record.save();
  }

  read(id) {
    if (!id) {
      return schema.find({});
    }
    else {
      return schema.findById(id);
    }
  }

  update(id, newRecord) {

  }

  delete(id) {

  }

}

module.exports = new FoodCollection();
