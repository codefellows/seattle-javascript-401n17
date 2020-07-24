'use strict';

let client = require('socket.io-client');
let socket = client.connect();

const instructor = require('../day.js');

describe('Day Client', () => {
  it('works', () => {
    // Trigger the event we want to see work
    // The mocker will fire it for us
    socket.emit('sunrise');
    // Now, prove that the right handler function got called
    // To do this, we need to make day a proper module and export the
    // handlers so that we can test them.
  });
});