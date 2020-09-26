'use strict';

const events = require('./event-pool');

require('./body.js');

setInterval(() => {
  let brightness = Math.ceil(Math.random() * 100);
  events.emit('light', { brightness })
}, 2000)


events.on('light', (payload) => {
  console.log('light happened');
});
