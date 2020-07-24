'use strict';

// Animal Constructor
const Animal = function (name) {
  this.name = name;
};

// Animal's walk prototype method
Animal.prototype.walk = () => {
  console.log('Walking ...');
};

// Dog Constructor
const Dog = function (name) {
  // Essentially calling super() on our parent class
  Animal.call(this, name);
};

// Instantiate an Animal, with our param
// We are both a Dog and an Animal (dogs are copies of animals, with their own overrides)
Dog.prototype = Object.create(Animal.prototype);

// Dog specific prototype methods
Dog.prototype.speak = () => {
  console.log('WOOF!');
};

module.exports = Dog;
