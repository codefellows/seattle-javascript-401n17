'use strict';

const express = require('express');

// Our Modules
const notFoundHandler = require('../middleware/404.js');
const errorHandler = require('../middleware/500.js');

// Our Routes
const v1Routes = require('../routes/v1.js');

// Wire Up Express
const app = express();

// Express Middleware
app.use(express.json());

app.get('/', (req, res) => {
  // Should go to our documentation, not google
  res.redirect('http://www.google.com');
})

app.use('/api/v1', v1Routes);

app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
  app,
  start: (port) => app.listen(port, console.log('Up on', port))
}