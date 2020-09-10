'use strict';

const express = require('express');
const users = require('./users-model.js');
const base64 = require('base-64');

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

app.post('/signin', basicAuth, async (req, res, next) => {

  try {
    // Get the username and password from the user
    // It will be in the headers
    let authorization = req.headers.authorization;
    let encoded = authorization.split(' ')[1]
    let creds = base64.decode(encoded);
    let [username, password] = creds.split(":");

    // Get user instance from the model, if we can.
    let userRecord = await users.validateBasic(username, password);

    // If it's good, send a token
    let token = userRecord.generateToken();

    res.status(201).send(token);

  } catch (e) {
    next(e.message);
  }

});

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
