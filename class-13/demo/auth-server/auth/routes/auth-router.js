'use strict';

const express = require('express');

const basicAuth = require('../middleware/basic.js');
const users = require('../models/users-model.js');

// Initialize Express Router
const router = express.Router();

router.post('/signup', async (req, res, next) => {

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

    let output = {
      user: newUser,
      token: token
    }
    res.status(200).json(output);


  } catch (e) {
    next(e.message);
  }

});

// adding ,basicAuth does?
router.post('/signin', basicAuth, (req, res, next) => {

  let output = {
    user: req.user,
    token: req.token
  }
  res.status(200).json(output);

});

module.exports = router;
