'use strict';

const express = require('express');

const notFoundHandler = require('./middleware/404.js');
const errorHandler = require('./middleware/500.js');
const printer = require('./middleware/printer.js');

const app = express();

// Applicataion middleware
// Runs on every single route
app.use(logger);

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const myDatabase = [];

function addStuff(req, res, next) {
  req.stuff = {
    couch: "recliner",
    pictures: 7,
    coffee: 'cold'
  }
  next();
}

function normalize(req, res, next) {
  Object.keys(req.query).forEach(key => {
    req.query[key] = req.query[key].toLowerCase();
  });
  next();
}

function logger(req, res, next) {
  console.log('PATH:', req.path)
  next();
}

app.get('/', printer('cathy is amazing'), addStuff, normalize, (req, res) => {
  const parts = {
    query: req.query,
    params: req.params,
    body: req.body,
    stuff: req.stuff
  }
  res.status(200).json(parts);
});

app.post('/food', (req, res) => {
  console.log(req.body);
  myDatabase.push(req.body);
  res.status(200).send('ok');
});

app.get('/food', (req, res) => {
  res.status(200).send(myDatabase);
})

app.get('/food/:id', printer('john is not a good cook'), (req, res) => {
  // go through the array and get the id from it....
  const parts = {
    query: req.query,
    params: req.params,
    body: req.body,
    stuff: req.stuff
  }
  res.status(200).json(parts);
});

app.use(notFoundHandler)
app.use(errorHandler)

function start(port) {
  app.listen(port, () => console.log('running on', port));
}

module.exports = {
  start: start,
  server: app,
}