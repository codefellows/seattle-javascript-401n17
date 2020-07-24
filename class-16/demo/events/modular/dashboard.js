'use strict';

const events = require('./events.js');

// We're only putting "save" events in the dashboard
// All the others are ignored by this module
events.on('save', handleSave);

// Imagine this updating a sreen instead of a boring console.log()
function handleSave(payload) {
  console.log(`Record ${payload.id} was saved`);
}