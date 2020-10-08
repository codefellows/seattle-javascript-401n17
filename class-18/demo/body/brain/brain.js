'use strict';

// brain.js

const port = process.env.PORT || 3000;

const io = require('socket.io')(port);

// Global -- all connections and all events go to everyone
io.on('connection', (socket) => {

  console.log('CONNECTED', socket.id);

  let requests = 0;
  socket.on('light', (payload) => {
    // if(requests > 50 && lastRequestTime <= .0001)
    console.log('SERVER EVENT: light', payload);
    io.emit('brightness', payload);
  });

  socket.on('smell', (payload) => {
    console.log('SERVER EVENT: smell', payload);
    io.emit('smell', payload);
  })

  // Deal with events ...
})

// Namespaces let us carve out slices of the sockets
const guts = io.of('/digestive-system');
guts.on('connection', (socket) => {
  socket.on('swallow', (payload) => {
    guts.emit('swallow', payload);
  })
});

const healthSystem = io.of('/health-system');
healthSystem.on('connection', (socket) => {

  // Socket.io uses "rooms", but let's call them channels
  // Open channels called sickness and diabetes
  socket.on('join', room => {
    const valid = ['sickness', 'diabetes']
    if (valid.includes(room)) {
      console.log('Welcome to', room);
      socket.join(room);
    }
  });

  socket.on('cold', (payload) => {
    healthSystem.to('sickness').emit('bug', payload);
  })

  socket.on('flu', (payload) => {
    healthSystem.to('sickness').emit('bug', payload);
  })

  socket.on('sugar', (payload) => {
    healthSystem.to('diabetes').emit('high-sugar', payload);
  })

})
