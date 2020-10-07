'use strict';

const io = require('socket.io-client');

const brainConnection = io.connect('http://localhost:3000');

brainConnection.on('brightness', (payload) => {
  if (payload.level >= 90) { console.log('Close Eyes!'); }
  else if (payload.level >= 50) { console.log('Squinting...'); }
});


