'use strict';

const io = require('socket.io-client');

const socket = io.connect('http://localhost:3000');

// Generic client
// Doesn't connect to a namespace or join any rooms
// Hears any and all 'emit' events from the server
// But only cares about a couple of them.

socket.on('sunrise', (payload) => {
  console.log('Get ready for work!');
});

socket.on('sunset', (payload) => {
  console.log('Go to bed...');
});

// To prove this, we can wire up a event listener meant for a room in a namespace
socket.on('fire', (payload) => {
  console.log('RUN FOR YOUR LIFE!')
});


