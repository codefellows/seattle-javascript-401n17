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
    let object = {
      token: req.token,
      user: newUser
    }
    res.status(200).json(object);


  } catch (e) {
    next(e.message);
  }

});

// adding ,basicAuth does?
router.post('/signin', basicAuth, (req, res, next) => {
  res.set('auth', req.token);
  let object = {
    token: req.token,
    user: req.user
  }
  res.status(200).json(object);
});

router.get('/secret', bearer, (req, res) => {
  res.status(200).send(`Welcome, ${req.user.username}`)
})

module.exports = router;
