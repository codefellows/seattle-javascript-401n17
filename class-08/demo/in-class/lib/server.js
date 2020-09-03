'use strict';

const express = require('express');
const app = express();

// Our Middleware
const notFoundHandler = require('../middleware/404.js');
const errorHandler = require('../middleware/500.js')
const logger = require('../middleware/logger.js');

// Our Routes
const foodMemoryRouter = require('../routes/food-memory.js');
const foodMongoRouter = require('../routes/food-mongo.js');
const drinksRouter = require('../routes/drinks.js');

// App level middleware

// turns {} into req.body
app.use(express.json());

// Logs the method and the path for all requests
app.use(logger);

// Use the routers
app.use('/api/v1', foodMemoryRouter);
app.use('/api/v2', foodMongoRouter);
app.use('/api/v1', drinksRouter);

app.get('/', (req, res) => {
  res.redirect('http://www.google.com');
})

// 404 errors
app.use('*', notFoundHandler);

// Catastrophes
app.use(errorHandler);

module.exports = {
  app,
  start: (port) => app.listen(port, () => console.log('starting server on', port))
}
