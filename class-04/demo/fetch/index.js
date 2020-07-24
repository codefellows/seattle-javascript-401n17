#!/usr/bin/env node
'use strict';

const mongoose = require('mongoose');

const Input = require('./lib/input.js');
const HTTP = require('./lib/http.js');

// connect and use the options{} to hide Mongoose deprecation warnings
// Note: the URI should really come from .env
mongoose.connect('mongodb://localhost:27017/fetch', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const options = new Input();
const http = new HTTP();

// In order to actually stop the app correctly, we need to disconnect from  mongo
// Therefore, fetch should return a promose, that we can .then() disconnect
if (options.valid()) {
  http.fetch(options)
    .then(mongoose.disconnect)
}
else {
  help();
}

function help() {
  console.log(`

  api USAGE: api -m <method> -u <url> -b '<body>'

   -m - HTTP Method (get/post/put/patch/delete)
   -u - URL (leading :port presumes localhost)
   -b - Body to send for post/put/patch
        Enclosed in single quotes
        JSON must be valid
  `);

  process.exit();
}
