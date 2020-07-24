'use strict';

// Animal Class
class Animal {

  // static thing = "foobar"; // Node > v 12

  // When creating a new animal, store it's name
  constructor(name) {
    this.name = name;
  }

  // All animals can walk.  This will be a prototype method
  walk() {
    console.log('Walking ... ');
  }

}

// Dogs are animals (extends)
class Dog extends Animal {

  // Only dogs can speak.  This will also be a prototype method.
  speak() {
    console.log('WOOF!');
  }

  // Calling the Animal walk() method when dogs run()
  run() {
    super.walk();
  }

}

module.exports = Dog;
