'use strict';

const client = require('socket.io-client');

const socket = client.connect('http://localhost:3000');

socket.emit('getAll');

socket.on('hello', payload => {
  // tell the server that I got the msg
  console.log(payload);
  socket.emit('received', payload.id);
  console.log('HEARD', payload)
})


// Drivers might want...
// socket.emit('getNext');
