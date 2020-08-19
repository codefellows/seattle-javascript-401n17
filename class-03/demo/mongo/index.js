'use strict';

const mongoose = require('mongoose');

const Food = require('./food-schema.js');

// Connect to Mongo
const MONGODB_URI = 'mongodb://localhost:27017/food';
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Insert a record
let carrot = {
  name: "Carrot",
  calories: 15.2,
  type: "vegetable"
}

class FoodDemo {
  constructor() { }
  async add() {
    try {
      let food = new Food(carrot);
      // This is the same as ...
      // food.save().then( addedFood => console.log('...'));
      let addedFood = await food.save();
      console.log('Added', addedFood);
    } catch (e) {
      console.error(e)
    }
  }

  async delete(id) {
    await Food.findByIdAndRemove(id);
  }

  async list() {
    try {
      let allFoods = await Food.find({ type: "vegetable" });
      console.log('All Foods', allFoods);
    } catch (e) {
      console.error(e)
    }
  }
}

async function doFoodStuff() {
  let code = new FoodDemo();
  // await code.add();

  code.delete('5f3852310ca8a93048a00212');

  await code.list();

}

doFoodStuff()
