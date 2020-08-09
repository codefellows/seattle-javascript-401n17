'use strict';

const Input = require('./input.js');
const Request = require('./request.js');

const input = new Input();
const request = new Request(input);
const output = request.go();

console.log(output);
