'use strict';

const users = require('../models/users-model.js')

module.exports = async (req, res, next) => {

  try {

    if (!req.headers.authorization) { next('Invalid Login') }

    const token = req.headers.authorization.split(' ').pop();

    const validUser = users.authenticateWithToken(token);

    req.user = validUser;
    req.token = token;
    next();

  } catch (e) {
    next("Invalid Login");
  }
}
