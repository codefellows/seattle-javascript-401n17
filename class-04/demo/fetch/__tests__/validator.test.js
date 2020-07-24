'use strict';

const faker = require('faker');
const Validator = require('../lib/validator.js');

let str = 'yes';
let num = 1;
let arr = ['a'];
let obj = { x: 'y' };
let func = () => { };
let bool = false;

const schema = {
  id: { type: 'string', required: true },
  name: { type: 'string', required: true },
  age: { type: 'number' },
  children: { type: 'array', valueType: 'string' },
};

const validator = new Validator(schema);

describe('Validator module performs basic validation of', () => {

  it('strings', () => {
    expect(validator.isString(str)).toBeTruthy();
    expect(validator.isString(num)).toBeFalsy();
    expect(validator.isString(arr)).toBeFalsy();
    expect(validator.isString(obj)).toBeFalsy();
    expect(validator.isString(func)).toBeFalsy();
    expect(validator.isString(bool)).toBeFalsy();
  });

  it('numbers', () => {
    expect(validator.isNumber(str)).toBeFalsy();
    expect(validator.isNumber(num)).toBeTruthy();
    expect(validator.isNumber(arr)).toBeFalsy();
    expect(validator.isNumber(obj)).toBeFalsy();
    expect(validator.isNumber(func)).toBeFalsy();
    expect(validator.isNumber(bool)).toBeFalsy();
  });

  it('arrays', () => {
    expect(validator.isArray(str)).toBeFalsy();
    expect(validator.isArray(num)).toBeFalsy();
    expect(validator.isArray(arr)).toBeTruthy();
    expect(validator.isArray(obj)).toBeFalsy();
    expect(validator.isArray(func)).toBeFalsy();
    expect(validator.isArray(bool)).toBeFalsy();
  });

  it('arrays of type', () => {
    let numArray = [1, 2, 3];
    let strArray = ['a', 'b', 'c'];

    expect(validator.isArray(str)).toBeFalsy();
    expect(validator.isArray(num)).toBeFalsy();
    expect(validator.isArray(obj)).toBeFalsy();
    expect(validator.isArray(func)).toBeFalsy();
    expect(validator.isArray(bool)).toBeFalsy();
    expect(validator.isArray(arr)).toBeTruthy();
    expect(validator.isArray(numArray, 'number')).toBeTruthy();
    expect(validator.isArray(numArray, 'string')).toBeFalsy();
    expect(validator.isArray(strArray, 'string')).toBeTruthy();
    expect(validator.isArray(strArray, 'number')).toBeFalsy();
  });

  it('objects', () => {
    expect(validator.isObject(str)).toBeFalsy();
    expect(validator.isObject(num)).toBeFalsy();
    expect(validator.isObject(arr)).toBeFalsy();
    expect(validator.isObject(obj)).toBeTruthy();
    expect(validator.isObject(func)).toBeFalsy();
    expect(validator.isObject(bool)).toBeFalsy();
  });

  it('booleans', () => {
    expect(validator.isBoolean(str)).toBeFalsy();
    expect(validator.isBoolean(num)).toBeFalsy();
    expect(validator.isBoolean(arr)).toBeFalsy();
    expect(validator.isBoolean(obj)).toBeFalsy();
    expect(validator.isBoolean(func)).toBeFalsy();
    expect(validator.isBoolean(bool)).toBeTruthy();
  });

  it('functions', () => {
    expect(validator.isFunction(str)).toBeFalsy();
    expect(validator.isFunction(num)).toBeFalsy();
    expect(validator.isFunction(arr)).toBeFalsy();
    expect(validator.isFunction(obj)).toBeFalsy();
    expect(validator.isFunction(func)).toBeTruthy();
    expect(validator.isFunction(bool)).toBeFalsy();
  });

});

describe('Validator module evaluates a basic schema', () => {
  it('isValid() validates a good record', () => {
    // Go through the schema and fill in perfect values for every field
    var testRecord = {};
    for (var field in schema) {
      switch (schema[field].type) {
        case 'boolean':
          testRecord[field] = faker.random.boolean();
          break;
        case 'number':
          testRecord[field] = faker.random.number();
          break;
        case 'string':
          testRecord[field] = faker.random.word();
          break;
        case 'array':
          testRecord[field] = [];
          testRecord[field].push(faker.random.arrayElement());
          testRecord[field].push(faker.random.arrayElement());
          break;
        default:
          null;
      }
    }

    expect(validator.isValid(testRecord)).toBeTruthy();
  });

  it('isValid() returns undefined on type mismatch', () => {
    // Go through the schema and fill in incorrect values for every field
    var testRecord = {};
    for (var field in schema) {
      switch (schema[field].type) {
        case 'boolean':
          testRecord[field] = faker.random.number();
          break;
        case 'number':
          testRecord[field] = faker.random.word();
          break;
        case 'string':
          testRecord[field] = faker.random.number();
          break;
        default:
          null;
      }
    }
    expect(validator.isValid(testRecord)).toBeFalsy();
  });

  it('isValid() returns undefined with missing requirements', () => {
    // Go through the schema and fill in perfect values for every field
    var testRecord = {};
    for (var field in schema) {
      if (schema[field].required) {
        testRecord[field] = null;
      }
    }
    expect(validator.isValid(testRecord)).toBeFalsy();
  });

});
