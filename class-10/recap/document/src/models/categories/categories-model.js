'use strict';

const Model = require('../mongo.js');
const schema = require('./categories-schema.js');

class Categories extends Model {
  constructor() { super(schema); }
}

module.exports = Categories;
