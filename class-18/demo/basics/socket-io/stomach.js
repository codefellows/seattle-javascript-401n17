'use strict';

const io = require('socket.io-client');

const brainConnection = io.connect('http://localhost:3000');

const dsConnection = io.connect('http://localhost:3000/digestive-system');

const healthConnection = io.connect('http://localhost:3000/health-system');
healthConnection.emit('join', 'diabetes')

brainConnection.on('smell', (payload) => {
  if (payload.scent === "vomit") { console.log('out the way it came in...look out!') }
});

dsConnection.on('swallow', (payload) => {
  console.log('system processing', payload);
});

healthConnection.on('high-sugar', payload => {
  if (payload > 120) {
    console.log('Sugar is high, pancreas get to work, please');
  }
});

