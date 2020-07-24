'use strict';

// Notice: This is not a constructor.
// this demonstrates exporting a POJO (plain old javascript object)
const http = {};

http.fetch = function (opts) {
  if (opts) {
    console.log(`Fetching ${opts.url}`);
    console.log(`Method ${opts.method}`);
  }
};

module.exports = http;
