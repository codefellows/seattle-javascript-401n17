'use strict';

require('dotenv').config();

const server = require('./server.js');

server.start(process.env.PORT);
