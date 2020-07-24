'use strict';

const io = require('socket.io')(3000);

const queue = {
  hello: {}
};

io.on('connection', socket => {

  socket.on('hello', payload => {
    let id = Math.random();
    queue.hello[id] = payload;
    socket.broadcast.emit('hello', { id, payload });
  });

  socket.on('getall', () => {
    Object.keys(queue.hello).forEach(id => {
      socket.emit('hello', { id, payload: queue.hello[id] });
    })
  });

  socket.on('received', message => {
    delete queue.hello[message.id];
  });

})

