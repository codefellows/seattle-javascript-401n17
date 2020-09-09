'use strict';

const cwd = process.cwd();

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Prepare the express app
const app = express();

// App Level MW
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Custom Middleware
app.param('model', (req, res, next) => {
  let modelName = req.params.model.replace(/[^a-z0-9-_]/gi, '');
  const Model = require(`./models/${modelName}/${modelName}-model.js`);
  req.model = new Model();
  next();
});

// Routes
app.get('/api/v1/:model', handleGetAll);
app.post('/api/v1/:model', handlePost);
app.get('/api/v1/:model/:id', handleGetOne);
app.put('/api/v1/:model/:id', handlePut);
app.delete('/api/v1/:model/:id', handleDelete);

// Route Handlers
function handleGetAll(request, response, next) {
  request.model.get(request.query)
    .then(data => {
      const output = {
        count: data.length,
        results: data,
      };
      response.status(200).json(output);
    })
    .catch(next);
}

function handleGetOne(request, response, next) {
  request.model.get({ _id: request.params.id })
    .then(result => response.status(200).json(result[0]))
    .catch(next);
}

function handlePost(request, response, next) {
  request.model.create(request.body)
    .then(result => response.status(200).json(result))
    .catch(next);
}

function handlePut(request, response, next) {
  request.model.update(request.params.id, request.body)
    .then(result => response.status(200).json(result))
    .catch(next);
}

function handleDelete(request, response, next) {
  request.model.delete(request.params.id)
    .then(result => response.status(200).json(result))
    .catch(next);
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Catchalls
app.use((req, res, next) => {
  let error = { error: 'Resource Not Found' };
  res.status(404).json(error).end();
});

app.use((err, req, res, next) => {
  let error = { error: err };
  res.status(500).json(error).end();
});

/**
 * Start Server on specified port
 * @param port {integer} (defaults to process.env.PORT)
 */
let start = (port = process.env.PORT) => {
  app.listen(port, () => {
    console.log(`Server Up on ${port}`);
  });
};

module.exports = { app, start };
