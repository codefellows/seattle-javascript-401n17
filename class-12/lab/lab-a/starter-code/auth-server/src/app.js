'use strict';

// 3rd Party Resources
const express = require('express');
const cors = require('cors');

// Esoteric Resources
const oauth = require('./github.js');

// Prepare the express app
const app = express();

// App Level MW
app.use(cors());

// Website Files
app.use(express.static('./public'));

// Routes
app.get('/oauth', oauth, (req, res) => {
  res.status(200).send(req.token);
});

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server Up on ${port}`);
    });
  },
};
