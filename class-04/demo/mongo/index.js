'use strict';

const mongoose = require('mongoose');

// const Food = require('./models/food-schema');
// Require the collection/interface instead
const Food = require('./models/food-collection');
const food = new Food(); // we can avoid this if the Food collection exports an instance of itself

const MONGOOSE_URI = 'mongodb://localhost:27017/food';

mongoose.connect(MONGOOSE_URI, { useNewUrlParser: true, useUnifiedTopology: true });

console.log('create', Food.create);
console.log('get', Food.get);

const doDataStuff = async () => {

  let carrot = {
    name: 'Carrots',
    calories: 25,
    type: 'vegetable',
  };

  // Creating a resource always returns the thing that got created
  // Instead of calling mongoose directly, call the interface
  // let food = new Food(carrot);
  // await food.save()
  let newFood = await food.create(carrot);
  console.log('Food Created', newFood);

  // Getting one, just gives you an object that is the one
  // let oneFood = await Food.findById(food.id);
  let oneFood = await (food.get(newFood.id));
  console.log('One Food', oneFood);

  // Getting all ... an array!
  // let allFood = await Food.find({});
  let allFood = await (food.get());
  console.log('All Food', allFood);

  // Disconnect from Mongo
  mongoose.disconnect();

};

doDataStuff();
