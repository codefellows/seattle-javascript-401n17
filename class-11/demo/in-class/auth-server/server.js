'use strict';

const express = require('express');
const users = require('./auth/models/users-model.js');
const basicAuth = require('./auth/middleware/basic.js');
const basic = require('./auth/middleware/basic.js');

const app = express();

// global middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/signup', async (req, res, next) => {

  try {
    // username, password, email, etc ..
    // will be on req.body

    // use the users module to create a new user

    // Create an object that looks like the data model shape
    let obj = {
      username: req.body.username,
      password: req.body.password
    }

    // Create a new instance from the schema, using that object
    let record = new users(obj);

    // Save that instance to the database
    let newUser = await record.save();

    let token = record.generateToken();

    // Prove it
    res.status(201).send(token);


  } catch (e) {
    next(e.message);
  }

});

// adding ,basicAuth does?
app.post('/signin', basicAuth, (req, res, next) => {

  let output = {
    user: req.user,
    token: req.token
  }
  res.status(200).json(output);

});

app.get('/secretstuff', basicAuth, (req, res) => {
  res.send('hi');
})

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
