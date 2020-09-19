'use strict';

const express = require('express');
const cors = require('cors');
const authRoutes = require('./auth/routes/auth-router.js')
const testRoutes = require('./test-routes.js');

const app = express();

// global middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route Definitions
app.use(authRoutes);
app.use(testRoutes);

// 404 / not found handler
app.use('*', (req, res, next) => {
  res.status(404).send('not found');
});

// Error Handler - last express route!
app.use((err, req, res, next) => {
  res.status(500).send(err);
})

module.exports = {
  app,
  start: (port) => app.listen(port, console.log('up on', port))
}
