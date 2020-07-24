'use strict';

// 3rd Party Resources
const express = require('express');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const jwt = require('jsonwebtoken');

// Prepare the express app
const app = express();

// App Level MW
app.use(express.json());

let users = {};
let SECRET = 'myserverhasfleas';

// echo '{"username":"john","password":"foo"}' | http post :3000/signup
app.post('/signup', async (req, res) => {

  // We'll just assume it's all ok ...
  let user = req.body;
  if (!users[user.username]) {
    // Hash the password and save it to the user
    user.password = await bcrypt.hash(req.body.password, 5)

    // Create a new user
    users[user.username] = user;

    // Create a signed "token"
    let token = await jwt.sign({ username: user.username }, SECRET)

    // Send it out
    res.status(200).send(token);
  }
  else {
    res.status(403).send("Username taken, sorry");
  }
});


// http post :3000/signin -a john:foo
app.post('/signin', async (req, res) => {
  // req.headers.authorization is : "Basic sdkjdsljd="

  // Pull out just the encoded part by splitting the header into an array on the space and popping off the 2nd element
  let basic = req.headers.authorization.split(' ').pop();

  // decodes to user:pass and splits it to an array
  let [user, pass] = base64.decode(basic).split(':');

  // users[user] should be a record in our in-memory database
  // that object's password should be a hash that we've encrypted
  let verified = users[user] ? await bcrypt.compare(pass, users[user].password) : false;

  if (verified) {
    // Create a signed "token"
    let token = jwt.sign({ username: user.username }, SECRET)

    // Send it out
    res.status(200).send(token);
  }
  else {
    res.status(403).send("Invalid Login");
  }

});

app.get('/users', (req, res) => {
  res.status(200).json(users);
});


app.listen(3000, () => console.log('server up'));