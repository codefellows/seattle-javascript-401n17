'use strict';

function Request(obj) {
  this.command = obj;
}

Request.prototype.go = function () {
  return `Fetched ${this.command.url} using ${this.command.method}`;
}

module.exports = Request;