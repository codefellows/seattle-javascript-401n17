'use strict';

// WOW. How clean is this server with all of the routes and middleware pulled out?

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// Import our Custom Routes
const foodRoutes = require('../routes/food.js');

const app = express();

// Express built in middleware
app.use(express.json());

// 3rd Party middleware
app.use(morgan('dev'));
app.use(cors());

// Use our custom routes
app.use('/api/v1/', foodRoutes);

module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};

