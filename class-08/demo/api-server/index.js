'use strict';

const mongoose = require('mongoose');
const server = require('./lib/server.js');

const MONGODB_URI = 'mongodb://localhost:27017/class-08';

const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
};
mongoose.connect(MONGODB_URI, mongooseOptions);

server.start(3000);

// We really should be using some ENVIRONMENT Variables, right class?