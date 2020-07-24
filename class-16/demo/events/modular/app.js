'use strict';

// The events.js file is the one event "pool" that all of our
// modules will share. It's kind of a global variable in that respect
const events = require('./events.js');

// Beause we're making one application, we will require in
// the "clients" ... later, these will actually be different servers
require('./logger.js');
require('./dashboard.js');

events.emit('save', { id: 77 });
