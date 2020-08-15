'use strict';

const helperFunctions = require('./helpers.js');


const $$ = module.exports = {};

$$.map = (input, callback) => {

  let type = $$.whatIs(input);

  if (type === "array") {
    let newThing = [];
    input.forEach((val, idx) => {
      newThing.push(callback(val, idx));
    });
    return newThing;
  }
  else if (type === "object") {
    // map over the object ...
    let newThing = {};
    for (let key in input) {
      let value = input[key];
      newThing[key] = callback(key, value);
    }
    return newThing;
  }

  else {
    return undefined;
  }
}

$$.filter = (input, callback) => {
  let type = $$.whatIs(input);
  if (type === "array") { return helperFunctions.filterArray(input, callback); }
  else if (type === "object") { return helperFunctions.filterObject(input, callback) }
}



$$.whatIs = (thing) => {
  if (Array.isArray(thing)) { return 'array'; }
  else if (thing instanceof Object) { return 'object'; }
  else { return undefined; }
}

