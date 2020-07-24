'use strict';

class DataModel {

  constructor(schema) {
    this.schema = schema;
  }

  get(id) {
    if (id) {
      return this.schema.findById(id);
    }
    else {
      return this.schema.find({});
    }
  }

  post(record) {
    let newRecord = new this.schema(record);
    return newRecord.save();
  }

}

module.exports = DataModel;