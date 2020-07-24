'use strict';

// 3rd Party Resources
const express = require('express');
const users = require('./users.js');
const basicAuth = require('./basic-auth-middleware.js');
const bearerAuth = require('./bearer-auth-middleware.js');
const oauth = require('./oauth-middleware.js');

// Prepare the express app
const app = express();

// App Level MW
app.use(express.static('./public'));
app.use(express.json());

// echo '{"username":"john","password":"foo"}' | http post :3000/signup
app.post('/signup', (req, res) => {
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

app.get('/oauth', oauth, (req, res) => {
  res.status(200).send(req.token);
});

app.get('/user', bearerAuth, (req, res) => {
  res.status(200).json(req.user);
});


app.listen(3000, () => console.log('server up'));

