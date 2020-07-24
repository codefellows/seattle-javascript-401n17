#!/usr/bin/env node
'use strict';

const Input = require('./lib/input.js');
const HTTP = require('./lib/http.js');

const options = new Input();

HTTP.fetch(options);
