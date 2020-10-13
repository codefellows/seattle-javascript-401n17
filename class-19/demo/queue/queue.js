'use strict'

const io = require('socket.io')(3000);

// Queue of events
// Each key in the queue is an event name
// Ech entry under the event name is a message

const queue = {
  hello: {
  }
}

/*
  queue: {
    hello: {
      12345.1: { words: 'hi john' },
      237.1: { words: 'hi mary' },
    }
  }
*/

io.on('connection', socket => {

  socket.on('hello', payload => {
    let id = Math.random();
    queue.hello[id] = payload;
    console.log(queue);
    // goes to everyone except the socket that started it
    socket.broadcast.emit('hello', { id, payload })
  })

  socket.on('getAll', () => {
    Object.keys(queue.hello).forEach(id => {
      let payload = queue.hello[id];
      // goes to everyone, including the socket that started it
      socket.emit('hello', { id, payload });
    })
  });

  // getNext --- pulls only the next one
  // from the queue (i.e. the front);

  // When a client gets a message, delete it
  socket.on('received', id => {
    console.log('delete', id);
    delete queue.hello[id];
    console.log(queue);
  })

})
