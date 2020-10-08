'use strict';

const io = require('socket.io-client');

let host = 'http://67857cc4fcf5.ngrok.io';

const brainConnection = io.connect(host);
const dsConnection = io.connect(`${host}/digestive-system`);
const healthConnection = io.connect(`${host}/health-system`);
healthConnection.emit('join', 'diabetes'); // diabetes channel in the health system

brainConnection.on('smell', (payload) => {
  if (payload.scent === "vomit") { console.log('coming out the way it came in') }
})

// Events that only occur in the digestive system
dsConnection.on('swallow', (payload) => {
  console.log(`System Processing ${payload.item}`);
})

healthConnection.on('high-sugar', (payload) => {
  if (payload.count >= 160) { console.log('Pancreas get to work') }
  if (payload.count <= 40) { console.log('Take a sugar pill') }
})
