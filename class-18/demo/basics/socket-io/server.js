'use strict';

const io = require('socket.io')(3000);

// Core Demo -- basic operations on the main socket interface
// Couple this with the "day.js" client
io.on('connection', (socket) => {
  console.log('CONNECTED', socket.id);

  socket.on('sunrise', (payload) => {
    io.emit('sunrise', payload);
  });

  socket.on('sunset', (payload) => {
    io.emit('sunset', payload);
  });

});

// Build this second -- it showcases namespaces
// Couple this with the weather.js client
const weather = io.of('/weather');
weather.on('connection', (socket) => {

  console.log('WEATHER CHANNEL', socket.id);

  socket.on('rain', (payload) => {
    weather.emit('rain', payload);
  });

  socket.on('snow', (payload) => {
    weather.emit('snow', payload);
  });

});


// Build last, to show namespaces and rooms
// Couple this with the fire.js and police.js clients
const emergency = io.of('/emergency');

// Assume we have 2 rooms that we care about clients joining: police and fire
emergency.on('connection', (socket) => {

  console.log('EMERGENCY CHANNEL', socket.id);

  // When a user joins a new room, all of their chatting will happen there only
  socket.on('join', room => {
    console.log('joined', room);
    socket.join(room);
  });

  socket.on('crime', (payload) => {
    emergency.to('policeDepartment').emit('crime', payload);
  });

  socket.on('fire', (payload) => {
    emergency.to('fireDepartment').emit('fire', payload);
  });

});

