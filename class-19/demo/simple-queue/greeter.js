'use strict';

const client = require('socket.io-client');

const socket = client.connect('http://localhost:3000');

let x = 1;
setInterval(() => {
  socket.emit('hello', `Hello ${x++}`)
}, 200);