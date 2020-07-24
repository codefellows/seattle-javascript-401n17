'use strict';

const schema = require('./food-schema.js');
const dataModel = require('./model.js');

class Food extends dataModel { }


module.exports = new Food(schema);