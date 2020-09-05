'use strict';

// const Food = new Model(foodSchema);

class Model {

  constructor(schema) {
    this.schema = schema;
  }

  create(obj) {
    let record = new this.schema(obj);
    return record.save();
  }

  read(id) {
    if (id) {
      return this.schema.findById(id);
    }
    else {
      return this.schema.find({});
    }
  }

  delete() {

  }

  update() {

  }

}

module.exports = Model;