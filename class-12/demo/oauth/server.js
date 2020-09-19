'use strict';

const express = require('express');
const oauth = require('./middleware/oauth.js');

const app = express();

app.get('/oauth', oauth, (req, res) => {
  res.status(200).send('ok');
})

module.exports = {
  app: app,
  start: (port) => { app.listen(port, console.log('Up on', port)) }
}
