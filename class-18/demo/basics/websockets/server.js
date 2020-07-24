'use strict';

// Node.js WebSocket server script
const http = require('http');
const WebSocketServer = require('websocket').server;

const server = http.createServer();

server.listen(3000);

const wsServer = new WebSocketServer({
  httpServer: server,
});

wsServer.on('request', function (request) {
  const connection = request.accept(null, request.origin);

  setInterval( () => {
    connection.sendUTF('Automated Message');
  }, 1000);

  // You can only receive one type of event ("message")
  // this means the message itself would need to carry both the event name and the data
  // This is limiting
  connection.on('message', function (message) {
    console.log('Received Message:', message.utf8Data);

    // Similarly, you can only send text, not a named event AND some payload. Limiting!
    connection.sendUTF('Hi this is WebSocket server!');
  });

  connection.on('close', function (reasonCode, description) {
    console.log('Client has disconnected.');
  });
});
