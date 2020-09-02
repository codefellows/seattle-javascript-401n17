'use strict';

const express = require('express');
const app = express();
const handlers = require('./handlers.js');

app.use(express.json());

// In Middleware, next() takes you to the next one
// next(stuff) takes you to ... error handler
app.post('/api', handlers.createNewRecord);

app.use((err, req, res, next) => {
  res.status(500).send(err);
});


module.exports = {
  start: (port) => app.listen(port, console.log('up on', port)),
  app
};
