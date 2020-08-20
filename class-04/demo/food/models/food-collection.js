'use strict';

const schema = require('./food-schema.js');

class Food {

  constructor() {
  }

  // GET one or more records
  // read() {} <= CRUD
  // get() {} <= ReST
  get(id) {
    if (id) {
      return schema.findById(id);
    }
    else {
      return schema.find({});
    }
  }

  // Add a new record to the database
  // create() { }
  post(record) {
    // client.query('INSERT INTO ....')
    let newRecord = new schema(record);
    return newRecord.save();
  }

}

module.exports = Food;
