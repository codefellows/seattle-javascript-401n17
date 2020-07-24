'use strict';

const reverse = require('./array-reverse.js');

describe('reverse()', () => {
  it('can reverse', () => {
    let arr = [1,2,3,4,5];
    let reversed = reverse(arr);
    expect(arr).not.toEqual(reversed);
    expect(reverse(reversed)).toEqual(arr);
  });
});
