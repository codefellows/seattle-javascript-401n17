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

});
