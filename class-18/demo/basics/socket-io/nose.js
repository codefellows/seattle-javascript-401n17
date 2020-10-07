'use strict';

const io = require('socket.io-client');

const brainConnection = io.connect('http://localhost:3000');
const healthConnection = io.connect('http://localhost:3000/health-system');
healthConnection.emit('join', 'sickness');

brainConnection.on('smell', (payload) => {
  console.log(`I smell ${payload.scent}`);
});

healthConnection.on('bug', (payload) => {
  console.log(`Fighting off ${payload}`);
})

healthConnection.on('cancer', (payload) => {
  console.log(`Possible Cancer ... ${payload}`);
})


