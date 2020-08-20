'use strict'

// 3rd Party Modules
require('dotenv').config();
const minimist = require('minimist');
const mongoose = require('mongoose');

// Custom Modules
const Food = require('./models/food-collection.js');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// argv = [path, node, actual stuff we care about]
let options = minimist(process.argv.slice(2));
let thing = {
  name: options.n,
  calories: options.c,
  type: options.t
}

let food = new Food(); // <- Facade in front of the mongo schema
food.post(thing)
  .then(record => {
    console.log(record);
    mongoose.disconnect();
  })

/*
let food = new Food(thing); // <- Actual Mongo Schema
food.save().then();
*/
