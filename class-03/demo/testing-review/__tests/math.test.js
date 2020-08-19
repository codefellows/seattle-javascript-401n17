'use strict';

// Bring in the "object under test"
// let Math = require('../math');    //  Could find ./math/index.js
let Math = require('../math.js'); //  Semantically different

describe('Math', () => {
  // Describe level global ... anything under this describe can see it...
  let math;

  // Set the global before all of the tests
  // Runs only once
  beforeAll(() => {
    math = new Math();
  })

  it('is a constructor', () => {
    expect(math instanceof Math).toBe(true);
  });

  it('returns false if only one number sent', () => {
    let expected = false;
    let actual = math.hasTwo([1]);
    expect(actual).toEqual(expected);
  });

  it('returns undefined if no numbers are sent', () => {
    let expected = false;
    let actual = math.hasTwo([]);
    expect(actual).toEqual(expected);
  });

  it('returns undefined if any params are strings', () => {
    let expected = false;
    let actual = math.areAllValuesNumeric(['one', 'two']);
    expect(actual).toEqual(expected);
  });

  it('can add 2 numbers', () => {
    let expected = 3;
    let actual = math.add(1, 2);
    expect(actual).toEqual(expected);
  });

  it('can add 3 numbers', () => {
    let expected = 4;
    let actual = math.add(1, 2, 1);
    expect(actual).toEqual(expected);
  });

})
