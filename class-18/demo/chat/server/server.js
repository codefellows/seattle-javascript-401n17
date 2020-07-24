'use strict';

const io = require('socket.io')(3000);

// Load the things we'll be managing
require('./apps/slick.js')(io);

// Core Demo -- global operations
io.on('connection', (socket) => {
  console.log('Welcome Global Connection', socket.id);
  socket.on('error', (payload) => {
    io.emit('error', payload);
  });

  socket.on('action', (payload) => {
    io.emit('action', payload);
  });
});