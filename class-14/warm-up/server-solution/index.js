'use strict';

// dependencies
require('dotenv').config();
let mongoose = require('mongoose');
let server = require('./server.js');

// connect to mongo
mongoose.connect(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

// start the server
server.start(process.env.PORT)
