'use strict';

// 3rd Party Resources
const express = require('express');
const basicAuth = require('./basic-auth-middleware.js');
const users = require('./users.js');

// Prepare the express app
const app = express();

// App Level MW
app.use(express.json());

// echo '{"username":"john","password":"foo"}' | http post :3000/signup
app.post('/signup', (req, res) => {
  // Could all of this logic actually happen in the model?
  users.save(req.body)
    .then(user => {
      let token = users.generateToken(user);
      res.status(200).send(token);
    })
    .catch(e => { res.status(403).send("Error Creating User"); });
});

// http post :3000/signin -a john:foo
app.post('/signin', basicAuth, (req, res) => {
  res.status(200).send(req.token);
});

app.get('/users', basicAuth, (req, res) => {
  res.status(200).json(users.list());
});


app.listen(3000, () => console.log('server up'));