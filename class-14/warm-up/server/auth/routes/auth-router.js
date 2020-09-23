'use strict';

const express = require('express');

const basicAuth = require('../middleware/basic.js');
const bearer = require('../middleware/bearer.js');
const users = require('../models/users-model.js');

// Initialize Express Router
const router = express.Router();

router.post('/signup', async (req, res, next) => {

  try {
    let obj = {
      username: req.body.username,
      password: req.body.password
    }

    // Create a new instance from the schema, using that object
    let record = new users(obj);

    // Save that instance to the database
    let newUser = await record.save();

    let token = record.generateToken();

    res.set('auth', req.token);
    res.status(200).send(`Hello, ${newUser.username}`)


  } catch (e) {
    next(e.message);
  }

});

// adding ,basicAuth does?
router.post('/signin', basicAuth, (req, res, next) => {
  res.set('auth', req.token);
  res.status(200).send(`Hello, ${req.user.username}`)
});

router.get('/test', bearer, (req, res) => {
  res.status(200).send(`Welcome, ${req.user.username}`)
})

module.exports = router;
