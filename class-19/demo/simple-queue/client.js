'use strict';

const client = require('socket.io-client');

const socket = client.connect('http://localhost:3000');

socket.emit('getall');

socket.on('hello', message => {
  console.log('heard', message.payload);
  socket.emit('received', message);
});
