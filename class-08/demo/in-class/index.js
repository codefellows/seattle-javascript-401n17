'use strict';

const mongoose = require('mongoose');
require('dotenv').config();

const server = require('./lib/server.js');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

server.start(process.env.PORT);
