'use strict';

// Functional Programming: Pure Functions
// Always returns the same output, given the same input
// Causes no side effects

function pureMultiply(a, b) {
  return a * b;
}

// Impure (console.log is a side-effect)
function impureMultiply(a, b) {
  console.log(a, b);
  return a * b;
}

let heightRequirement = 46;

// This function is impure, because reliable, repeatable input cannot be guaranteed.
function canRide(height) {

  // This makes for an impure function because it relies on a mutable (reassignable) variable defined outside of itself.
  return height >= heightRequirement;

  // This would make it a pure function, because it uses an internally defined constant, guaranteeing consisten returns
  // return height >= 46;
}

// Immutabiliy
// This function is pure. JS Passes arrays by reference, so we need to clone the arguments so as not to mutate them
let numbers = [2, 4, 6];
function pureSquares([...nums]) {
  for (var i = 0; i < nums.length; i++) {
    nums[i] = nums[i] * nums[i];
  }
  return nums;
}
console.log(pureSquares(numbers));
console.log(numbers);

// This function is impure. JS Passes arrays by reference, so the original is actually mutated.
function impureSquares(nums) {
  for (var i = 0; i < nums.length; i++) {
    nums[i] = nums[i] * nums[i];
  }
  return nums;
}
console.log(impureSquares(numbers));
console.log(numbers);


// High Order Function and function as a param

function sayHello(person) {
  return function () {
    console.log('Hello', person);
  };
}

let hi = function (name) { console.log('Hi', name); };

function sayHi(person, fn) {
  return function () {
    fn(person);
  };
}

let greetHello = sayHello('John');
greetHello();

let greetHi = sayHi('John', hi);
greetHi();
