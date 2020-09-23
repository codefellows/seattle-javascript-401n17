'use strict';

const base64 = require('base-64');
const users = require('../models/users-model.js');

// gets loaded as basicAuth in the router
// ie. const basicAuth = require('./auth/middleware/basic.js')
module.exports = async (req, res, next) => {

  // req.headers, req.params, req.body, req.query -- those all belong to express
  // req.<xyz> belongs to you.
  try {
    // Get the username and password from the user
    // It will be in the headers
    let authorization = req.headers.authorization;
    let encoded = authorization.split(' ')[0]
    let creds = base64.decode(encoded);
    let [username, password] = creds.split(":");

    // Get user instance from the model, if we can.
    let userRecord = await users.validateBasic(username, password);

    // If it's good, send a token
    // Put the token on the request object so other middleware can see it
    req.token = userRecord.generateToken();

    // Put the user record (object) on the request object so other middleware can see it
    req.user = userRecord;

    next();

  } catch (e) {
    next("Invalid Login")
  }

}
