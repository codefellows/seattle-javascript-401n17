'use strict';

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

$$.whatIs = (thing) => {
  if (Array.isArray(thing)) { return 'array'; }
  else if (thing instanceof Object) { return 'object'; }
  else { return undefined; }
}

