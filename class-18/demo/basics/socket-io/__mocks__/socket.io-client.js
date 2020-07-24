'use strict';

let EVENTS = {};

function emit(event, ...args) {
  EVENTS[event] && EVENTS[event].forEach(func => func(...args));
}

function on(event, func) {
  if (EVENTS[event]) { return EVENTS[event].push(func); }
  EVENTS[event] = [func];
}

const socket = { on, emit };

const io = { connect() { return socket; } };

module.exports = io;