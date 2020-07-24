'use strict';

const superagent = require('superagent');

const History = require('./history');

class HTTP {

  constructor() {
  }

  // Chain some promises together to do some work ...
  fetch(opts) {
    if (opts) {
      return superagent(opts.method, opts.url)
        .send(opts.body)
        .then(this.render)
        .then(() => this.save(opts))
    }
  }

  render(results) {
    console.log(results.body);
  }

  async save(opts) {
    let record = new History(opts);
    let saved = await record.save();
    return saved;
  }

}

module.exports = HTTP;
