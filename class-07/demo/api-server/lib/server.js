'use strict';

const express = require('express');

const app = express();

// Global Middleware ...
app.use(express.json())

// --------------------------------------------------
// Routing Demo
// --------------------------------------------------

app.get('/fruit', (req, res) => {
  let output = {
    type: req.query.type
  }
  res.status(200).json(output);
});

// How does express match params?
// Try with apple being declared explicitly above and below the one where :type is a dynamic param...

// app.get('/fruit/apple', (req, res) => {
//   res.status(200).send("I Love Apples!");
// });

app.get('/fruit/:type', (req, res) => {
  let output = {
    type: req.params.type
  }
  res.status(200).json(output);
});

// app.get('/fruit/apple', (req, res) => {
//   res.status(200).send("I Love Apples!");
// });

// post and put can read the body
app.post('/fruit', (req, res) => {
  console.log('What got added?', req.body);
  res.status(201).send('ok');
});

app.put('/fruit', (req, res) => {
  console.log('What got updated?', req.body);
  res.status(201).send('ok');
});


// --------------------------------------------------
// Middleware Demo
// --------------------------------------------------

// Middleware functions. Notice the 'next' parameter. Middleware functions have these options:
// All good: run next() to go to the next middleware function
// Not good: run next('message') to force an error with 'message' (can be any format)
// Deal with it yourself: Don't call next(), but use the response object yourself

// All of these can be in separate files and required in.

// Log a request
// function logRequest(req, res, next) {
//   console.log('__REQUEST__', req.method, req.path);
//   next();
// }

// Move that function to a file and require it.
// Now, the server has less code in it, and we can test this middleware
const logRequest = require('./logger.js');

// Adds the name of the browser to the request
function getBrowser(req, res, next) {
  req.browser = req.headers['user-agent'];
  next();
}

// Curried middleware (can take a parameter)
// Adds a squared number to request.custom
// Note how it calls next with a message if we have an error?
function square(n) {
  return (req, res, next) => {
    if (typeof n !== 'number') {
      next("Not a number!");
    }
    else {
      req.number = n * n;
      next();
    }
  };
}

function notFoundHandler(req, res, next) {
  res.status(404);
  res.statusMessage = 'Resource Not Found';
  res.json({ error: 'Not Found' });
}

function errorHandler(err, req, res, next) {
  res.status(500);
  res.statusMessage = 'Server Error';
  res.json({ error: err });
}

// Here is some global middleware
// Because we define it with no "route" at the app level, it runs on every route
// Our middleware that logs to the console.
app.use(logRequest);

app.get('/mw', square(10), getBrowser, (req, res) => {
  let output = {
    browser: req.browser,
    number: req.number
  }
  res.status(200).json(output);
});

// Notice how this one doesn't do the getBrowser middleware
// Not all are required, but all are available to you so that you
// can tailor how your routes use common behavior!
app.get('/number', square(10), (req, res) => {
  let output = {
    browser: req.browser,
    number: req.number
  }
  res.status(200).json(output);
});

// Here, our route calls all the middleware, but one of the middleware functions
// will throw an error. Where does the output come from?
app.get('/bad-math', square('a'), getBrowser, (req, res) => {
  let output = {
    browser: req.browser,
    number: req.number
  }
  res.status(200).json(output);
});

// Just all bad ... we'll throw an actual JS error. What happens?
app.get('/bad', (req, res) => {
  throw new Error('Baddy McBaderson was here')
});


// --------------------------------------------------
// API Demo
// --------------------------------------------------

// If you have time, use the schema and the validator library created in Module 1 to validate data
// const schema = ['id', 'name', 'title', 'author', 'article'];
let db = [];

app.get('/api/v1/food', (req, res, next) => {
  let count = db.length;
  let results = db;
  res.json({ count, results });
});

app.get('/api/v1/food/:id', (req, res, next) => {
  let id = req.params.id;
  let record = db.filter((record) => record.id === parseInt(id));
  res.json(record[0]);
});


app.post('/api/v1/food', (req, res, next) => {
  let { name } = req.body;
  let record = { name };
  record.id = db.length + 1;
  db.push(record);
  res.json(record);
});

app.put('/api/v1/food/:id', (req, res, next) => {
  let idToUpdate = req.params.id;
  let { name, id } = req.body;
  let updatedRecord = { name, id };
  db = db.map((record) => (record.id === parseInt(idToUpdate)) ? updatedRecord : record);
  res.json(updatedRecord);
});

app.delete('/api/v1/food/:id', (req, res, next) => {
  let id = req.params.id;
  db = db.filter((record) => record.id !== parseInt(id));
  res.json({});
});


// because these are defined last, they end up as catch-alls.
app.use('*', notFoundHandler);
app.use(errorHandler);

// Export an object with the whole server and a separate method that can start the server
module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};

