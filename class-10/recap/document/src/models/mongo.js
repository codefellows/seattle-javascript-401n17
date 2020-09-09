'use strict';

class Model {

  constructor(schema) {
    this.schema = schema;
  }

  jsonSchema() {
    return typeof this.schema.jsonSchema === 'function'
      ? this.schema.jsonSchema()
      : {};
  }

  get(queryObject = {}) {
    return this.schema.find(queryObject);
  }

  create(record) {
    let newRecord = new this.schema(record);
    return newRecord.save();
  }

  update(_id, record) {
    return this.schema.findByIdAndUpdate(_id, record, { new: true });
  }

  delete(_id) {
    return this.schema.findByIdAndDelete(_id);
  }

}

module.exports = Model;
