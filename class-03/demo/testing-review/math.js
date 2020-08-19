'use strict';

class Math {
  constructor() { }

  // If you have 2, you have 'n'
  add(...numbers) {
    // are there at least 2 things in the numbers array?
    if (!this.hasTwo(numbers)) { return undefined; }

    // are all the things in the numbers array numbers?
    if (!this.areAllValuesNumeric(numbers)) { return undefined; }

    // Add them all
    return numbers.reduce((accumulator, val) => {
      return accumulator + val;
    }, 0);

  }

  subtract(...numbers) {

    // are there at least 2 things in the numbers array?
    if (!this.hasTwo(numbers)) { return undefined; }

    // are all the things in the numbers array numbers?
    if (!this.areAllValuesNumeric(numbers)) { return undefined; }

    return numbers.reduce((accumulator, val) => {
      return accumulator - val;
    }, 0);

  }

  areAllValuesNumeric(arr) {
    return arr.every(val => {
      return typeof val === "number";
    });
  }

  hasTwo(arr) {
    return arr.length >= 2;
  }

}


module.exports = Math;
