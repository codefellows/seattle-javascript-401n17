'use strict';

const express = require('express');

// Custom Routes
const myRoutes = require('../routes/mine.js');
const yourRoutes = require('../routes/yours.js');

const app = express();

// Actual Routes
app.use(myRoutes);
app.use('/your', yourRoutes);

app.get('/foo', (req,res) => {
  console.log(req.param);
  console.log(req.query);
  console.log(typeof req.param.id, req.param.id);
  res.send('ok');
});

app.get('/foo/:id', (req,res) => {
  console.log(req.params);
  console.log(req.query);
  console.log(typeof req.params.id, req.params.id);
  res.send('ok');
});

module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};

