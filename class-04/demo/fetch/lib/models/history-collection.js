'use strict';

const schema = require('./history-schema.js');

class History {

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

// This version, unlike the food demo, exports an instance rather than the class
// This is a singleton. How does it work? Why do this?
module.exports = new History();
