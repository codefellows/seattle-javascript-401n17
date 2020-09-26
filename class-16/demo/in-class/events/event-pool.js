'use strict';

const Events = require('events');
const events = new Events();

// Export ONE instance of events that all modules can share
// Ben says, this is called a ... "singleton"
module.exports = events;
