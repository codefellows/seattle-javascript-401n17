'use strict';

module.exports = (io) => {

  // Slick Namespace
  const slick = io.of('/slick');

  const messages = {};

  slick.on('connection', (socket) => {

    console.log('Welcome to the Slick Chat Server!', socket.id);

    let currentRoom = '';

    // When a user joins a new room, all of their chatting will happen there only
    socket.on('join', payload => {

      const room = payload.channel;
      const clientID = payload.clientID;

      socket.leave(currentRoom);
      socket.join(room);
      currentRoom = room;

      // Create the messages list for the client
      if (!messages[currentRoom]) { messages[currentRoom] = {}; }
      if (!messages[currentRoom][clientID]) { messages[currentRoom][clientID] = {}; }

      console.log('joined room', room);

      // This uses my socket id, so it goes only to sender
      slick.to(`${socket.id}`).emit('joined', room)

      // On joining a room, send them all messages from the room so far
      Object.keys(messages[currentRoom][clientID]).forEach(messageID => {
        let payload = messages[currentRoom][clientID][messageID];
        console.log('sending to', clientID);
        slick.to(`${socket.id}`).emit('message', { messageID, payload });
      })

    });

    // Delete all received messages from the queue
    socket.on('received', payload => {
      try {
        let { messageID, clientID } = payload;
        delete messages[currentRoom][clientID][messageID];
      } catch (e) { console.log('unknown message ack'); }
    });

    // Goes only to specific slick
    socket.on('message', (payload) => {

      let messageID = Math.random();

      // Add the message to every active queue
      Object.keys(messages[currentRoom]).forEach(client => {
        messages[currentRoom][client][messageID] = payload;
      })

      // Broadcast out just the last one, if clients want to do their own management
      slick.to(currentRoom).emit('message', { messageID, payload });

    });

  });

}
