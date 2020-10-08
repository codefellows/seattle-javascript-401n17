'use strict';

const io = require('socket.io-client');

// dotenv this
let host = 'http://67857cc4fcf5.ngrok.io';

const brainConnection = io.connect(host);

brainConnection.on('brightness', payload => {
  if (payload.level >= 90) { console.log('Close Eyes!') }
  else if (payload.level >= 50) { console.log('Squinting...') }
})
