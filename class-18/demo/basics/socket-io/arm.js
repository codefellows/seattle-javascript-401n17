'use strict';

const io = require('socket.io-client');

const brainConnection = io.connect('http://localhost:3000');

brainConnection.on('brightness', (payload) => {
  if (payload.level >= 75) { console.log('Cover eyes with hand'); }
});
