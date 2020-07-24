'use strict';

// Built after the core demo, to show namespaces and rooms
// Using the "slick" namespace to separate slick connections from others like games
// Using "rooms" to indicate which channel they are chatting in
// Using a simple system of event names to make this hub generic
// Effectively, the hub here, just regurgitates the message back to the clients

module.exports = (io) => {

  // Slick Namespace
  const slick = io.of('/slick');

  slick.on('connection', (socket) => {

    console.log('Welcome to the Slick Chat Server!', socket.id);

    let currentRoom = '';

    // When a user joins a new room, all of their chatting will happen there only
    socket.on('join', room => {

      socket.leave(currentRoom);
      socket.join(room);
      currentRoom = room;

      console.log('joined room', room);

      // io.emit --- seen by anyone connected to the non-namespaced server above
      io.emit('action', `Someone joined the room: ${room}`);

      // This uses my socket id, so it goes only to sender
      slick.to(`${socket.id}`).emit('joined', room)

    });

    // Goes only to specific slick
    socket.on('message', (payload) => {
      // This uses the "slick" connection (the neamespace). emitting here goes to everyone, including sender

      slick.to(currentRoom).emit('message', payload);

      // This uses sender's socket. emitting here goes to everyone but sender
      // socket.to(currentRoom).emit('message', payload);
    });

  });

}

