'use strict';

/*
  Class 16 = Node Events (Internal Events - One App)
  Class 17 = TCP Events (Multiple Clients - Many Apps, Computers talk to each other)
  Class 18 = Socket.io (Multiple Clients, Many Apps, but Class 16 syntax)
  Class 19 = Queues
*/

const Events = require('events');
const { eventNames } = require('process');

const events = new Events();  // Event Pool

// Simulate DB
// Create, Read, Update, Delete
// Cache-Upade

/*
  respondToSun(level) {
    // eyelid();
    // pupil();
    // arm();
  }
*/

// Use
events.on('light', eyelid);
events.on('light', pupil);
events.on('light', arm);

function pupil(payload) {
  console.log('Eyes are dialted at', payload.brightness, '%');
}

function arm(payload) {
  if (payload.brightness >= 90) {
    console.log('Covering Eyes');
  }
}

function eyelid(payload) {
  if (payload.brightness >= 75) {
    console.log('eyes are squinting');
  }
}

events.emit('light', { brightness: 98 });

