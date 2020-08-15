'use strict';

const filterArray = (input, callback) => {
  let newThing = [];
  input.forEach((val, idx) => {
    if (callback(val) === true) { newThing.push(val); }
  });
  return newThing;
}

const filterObject = (input, callback) => {
  let newThing = {};
  for (let key in input) {
    let value = input[key];
    if (callback(key, value)) { newThing[key] = value; }
  }
  return newThing;
}

module.exports = { filterArray, filterObject };

