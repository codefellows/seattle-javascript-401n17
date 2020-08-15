'use strict';

const $$ = require('../shredder.js');

describe('shredder library', () => {
  it('can determine if a thing is an array', () => {
    let input = [];
    let expected = 'array';
    let actual = $$.whatIs(input);
    expect(actual).toEqual(expected);
  });

  it('can determine if a thing is an object', () => {
    let input = {};
    let expected = 'object';
    let actual = $$.whatIs(input);
    expect(actual).toEqual(expected);
  });

  it('skips non-array/object', () => {
    let input = '';
    let expected = undefined;
    let actual = $$.whatIs(input);
    expect(actual).toEqual(expected);
  });

  it('returns undefined if not an array or object', () => {

    let start = 'john'
    let expected = undefined;
    let callback = (val) => val * val;

    let squares = $$.map(start, callback);

    expect(squares).toStrictEqual(expected);

  });

  it('can map over an array of 1', () => {

    let start = [2];
    let expected = [4];
    let callback = (val) => val * val;

    let squares = $$.map(start, callback);

    expect(squares).toStrictEqual(expected);

  });

  it('can map over an array of n', () => {

    let start = [2, 4, 6];
    let expected = [4, 16, 36];
    let callback = (val) => val * val;

    let squares = $$.map(start, callback);

    expect(squares).toStrictEqual(expected);

  });

  it('can filter an array', () => {
    let input = [1, 2, 3, 4, 5, 6];
    let expected = [2, 4, 6];
    let callback = (val, idx) => val % 2 === 0;
    let actual = $$.filter(input, callback);
    expect(actual).toStrictEqual(expected);
  });

  it('can filter an object', () => {
    let input = {
      sunny: false,
      temp: 80,
      wind: 'gusty'
    }
    let expected = {
      temp: 80
    };

    let callback = (key, val) => key === "temp";

    // given that this is an object, does it properly call helperFunctions.filterObject?
    let actual = $$.filter(input, callback);

    expect(actual).toStrictEqual(expected);

  })

});
