'use strict';

const io = require('socket.io-client');

let host = 'http://67857cc4fcf5.ngrok.io';

const brainConnection = io.connect(host);
const healthConnection = io.connect(`${host}/health-system`);

// Monitor the 'sickness' channel in the health system namespace
healthConnection.emit('join', 'sickness');

brainConnection.on('smell', (payload) => {
  console.log(`I smell ${payload.scent}`);
});

healthConnection.on('bug', (payload) => {
  console.log(`Fighting off ${payload.affliction}`)
})
