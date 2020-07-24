'use strict';

class HTTP {

  constructor() {}

  fetch(opts) {
    if (opts) {

      // Simulate an API call.
      // Later, we'll hook this up and fetch (with superagent) real data
      let fakeResult = {
        count: 2,
        results: [
          { name: 'Luke Skywalker' },
          { name: 'R2D2' },
        ],
      };

      this.render(fakeResult);
    }
  }

  render(results) {
    console.log(results);
  }

}

module.exports = HTTP;
