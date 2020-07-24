'use strict';

const HTTP = require('../lib/http.js');

// Spies!
// Wouldn't it be great to know if something got called the right way?
// Or the right number of times?
// Or with the right arguments?

// This "spies" on console.log() so that we can watch it being called by our
// code and letting us make assertions on if it got called correctly
jest.spyOn(global.console, 'log');

describe('HTTP Module', () => {

  it('fetch() does nothing with invalid options', () => {
    const http = new HTTP();
    http.fetch();
    expect(console.log).not.toHaveBeenCalled();
  });

  it('fetch() logs out options, when given', () => {
    const http = new HTTP();
    http.fetch({ url: 'foo' });
    expect(console.log).toHaveBeenCalled();
  });

});