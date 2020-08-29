'use strict';

require('dotenv').config();

let server = require('./lib/server.js');

server.start(process.env.PORT);