'use strict';

const minimist = require('minimist');

let Input = function () {
  const args = minimist(process.argv.slice(2));
  this.url = this.getUrl(args)
  this.method = this.getMethod(args);
  this.query = args.query || args.q || {};
  this.body = args.body || args.b || {};
}

Input.prototype.getUrl = function (args = {}) {
  if (args.url) { return args.url; }
  else if (args.u) { return args.u; }
  else { return undefined; }
}

Input.prototype.getMethod = function (args = {}) {
  if (args.method === "get") { return args.method; }
  else { return undefined; }
}


module.exports = Input;