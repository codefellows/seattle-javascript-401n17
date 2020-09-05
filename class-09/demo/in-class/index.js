'use strict';

require('dotenv').config();

const mongoose = require('mongoose');

const server = require('./lib/server.js');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

server.start(3000);