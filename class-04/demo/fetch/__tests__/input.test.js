'use strict';

jest.mock('minimist');
const minimist = require('minimist');

minimist.mockImplementation(() => {
  return {
    u: ':8080',
    m: 'post',
    b: 'testBody',
    h: 'hi',
  }
});

const Input = require('../lib/input.js');

describe('Input Module', () => {

  it('getMethod() defaults to "GET" when no method is specified', () => {
    let options = new Input();
    expect(options.getMethod()).toEqual('GET');
  });

  it('getMethod() defaults to "GET" when an invalid method is specified', () => {
    let options = new Input();
    expect(options.getMethod('foo')).toEqual('GET');
  });

  it('getMethod() uses a properly specified method, when specified', () => {
    let options = new Input();
    expect(options.getMethod('get')).toEqual('get');
    expect(options.getMethod('post')).toEqual('post');
    expect(options.getMethod('put')).toEqual('put');
    expect(options.getMethod('delete')).toEqual('delete');
    expect(options.getMethod('patch')).toEqual('patch');
  });

  it('getURL() returns undefined if not specified', () => {
    let options = new Input();
    expect(options.getURL()).toBeUndefined();
  });

  it('getURL() returns undefined if an invalid URL is presented', () => {
    let options = new Input();
    expect(options.getURL('foobar')).toBeUndefined();
  });

  it('getURL() returns localhost if only a :port presented', () => {
    let options = new Input();
    expect(options.getURL(':3000')).toEqual('http://localhost:3000');
  });

  it('getURL() returns a properly formatted URL when presented', () => {
    let options = new Input();
    let url = 'http://www.foo.com';
    expect(options.getURL(url)).toEqual(url);
  });

  it('getBody() returns undefined if not specified', () => {
    let options = new Input();
    expect(options.getBody()).toBeUndefined();
  });

  it('getBody() returns JSON if an stringified object is presented', () => {
    let options = new Input();
    let obj = { name: 'john' };
    let str = JSON.stringify(obj);
    expect(options.getBody(str)).toEqual(obj);
  });

  it('getBody() returns a sring if a non-object is presented', () => {
    let options = new Input();
    let str = 'This is a test'
    expect(options.getBody(str)).toEqual(str);
  });

  it('valid() respects a proper object', () => {
    let options = new Input();
    expect(options.valid()).toBeTruthy();
  });

  it('valid() rejects an invalid object', () => {
    let options = new Input();
    // force a bad url for the test
    options.url = undefined;
    expect(options.valid()).toBeFalsy();
  });

});