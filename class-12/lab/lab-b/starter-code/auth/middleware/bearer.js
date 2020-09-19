'use strict';

const users = require('../models/users-model.js')

module.exports = (req, res, next) => {
  if (!req.headers.authorization) { next('Invalid Login') }

  let token = req.headers.authorization.split(' ').pop();

  users.authenticateWithToken(token)
    .then(validUser => {
      req.user = validUser;
      req.token = token;
      next();
    })
    .catch(err => next('Invalid Login'))
}
