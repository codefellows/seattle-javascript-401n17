'use strict';

const io = require('socket.io')(3000);

io.on('connection', (socket) => {
  console.log('CONNECTED', socket.id);

  socket.on('light', (payload) => {
    io.emit('brightness', payload);
  });

  socket.on('smell', (payload) => {
    io.emit('smell', payload);
  });

});

// Namespaced Events
const guts = io.of('/digestive-system');
guts.on('connection', (socket) => {

  console.log('GUTS CHANNEL', socket.id);

  socket.on('swallow', (payload) => {
    guts.emit('swallow', payload);
  });

});


// Namespaces and Rooms
const healthSystem = io.of('/health-system');

// Assume we have 2 rooms that we care about clients joining: police and fire
healthSystem.on('connection', (socket) => {

  console.log('HEALTH SYSTEM CHANNEL', socket.id);

  // When a user joins a new room, all of their chatting will happen there only
  socket.on('join', room => {
    const valid = ['sickness', 'diabetes']
    if (valid.includes(room)) {
      console.log('joined', room);
      socket.join(room);
    }
  });

  socket.on('cold', (payload) => {
    healthSystem.to('sickness').emit('bug', payload);
  });

  socket.on('flu', (payload) => {
    healthSystem.to('sickness').emit('bug', payload);
  });

  socket.on('sugar', (payload) => {
    healthSystem.to('diabetes').emit('high-sugar', payload);
  });

});

