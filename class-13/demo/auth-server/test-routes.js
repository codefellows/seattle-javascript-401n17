'use strict';
const express = require('express');

const bearer = require('./auth/middleware/bearer.js');

const routes = express.Router();

routes.get('/secretarea', bearer, (req, res) => {
  res.status(200).send(`Welcome, ${req.user.username}`);
})

routes.get('/pork', (req, res) => {
  res.status(200).send(`Cooked just right`);
})

module.exports = routes;
