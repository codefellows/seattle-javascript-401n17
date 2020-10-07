'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

const ds = io.connect('http://localhost:3000/digestive-system');

const health = io.connect('http://localhost:3000/health-system');

// No namespace, these goes to every client
socket.emit('light', { level: 45 });
socket.emit('light', { level: 65 });
socket.emit('light', { level: 90 });

socket.emit('smell', { scent: 'flowers' })
socket.emit('smell', { scent: 'vomit' })

// These only go to clients connected to the digestive-system
ds.emit('swallow', 'Hot Dog');

// these go to specific parts of the health system
health.emit('cold', 'Common Cold');
health.emit('flu', 'Covid');
health.emit('sugar', 119);



