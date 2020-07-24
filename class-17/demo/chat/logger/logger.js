'use strict';

const net = require('net');

const client = new net.Socket();

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;
client.connect(port, host, () => { })

client.on('data', function (data) {
  let event = JSON.parse(data);
  console.log(new Date().toUTCString(), event.event, event.payload);
});

client.on('close', function () {
  console.log('Connection closed');
});
