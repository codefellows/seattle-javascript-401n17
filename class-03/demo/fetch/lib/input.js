'use strict';

const isUrl = require('is-url');
const minimist = require('minimist');

class Input {

  constructor() {
    let args = minimist(process.argv.slice(2));
    this.method = this.getMethod(args.m);
    this.url = this.getURL(args.u);
    this.body = this.getBody(args.b);
    this.headers = this.getHeaders(args.h);
  }

  // -m is the method. default to "GET"
  getMethod(method = '') {
    let validMethods = /get|put|patch|post|delete/i;
    return validMethods.test(method) ? method : 'GET';
  }

  // -u is the URL.
  getURL(url = '') {
    // Prefix it with http://localhost if they just give a port (:)
    url = url.startsWith(':') ? `http://localhost${url}` : url;
    return isUrl(url) ? url : undefined;
  }

  // -b is the body.
  getBody(body = undefined) {
    // using try catch as JSON.parse will throw an error
    // We'll gobble that up and sent out raw text instead
    try {
      return JSON.parse(body);
    }
    catch (e) {
      return body;
    }
  }

  // -h is the headers
  getHeaders() {

  }

  valid() {
    return this.url && this.method;
  }

}

module.exports = Input;
