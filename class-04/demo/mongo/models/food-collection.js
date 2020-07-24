'use strict';

const schema = require('./food-schema.js');

class Food {

  constructor() {
  }

  get(_id) {
    if (_id) {
      return schema.findOne({ _id });
    }
    else {
      return schema.find({});
    }
  }

  create(record) {
    let newRecord = new schema(record);
    return newRecord.save();
  }

  update(_id, record) {
    return schema.findByIdAndUpdate(_id, record, { new: true });
  }

  delete(_id) {
    return schema.findByIdAndDelete(_id);
  }

}

module.exports = Food;