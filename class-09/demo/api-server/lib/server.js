'use strict';

const express = require('express');

// Custom Middleware
const errorHandler = require('../middleware/500.js');
const notFoundHandler = require('../middleware/404.js');

// Custom Routes
const apiRouter = require('../routes/v1.js');
const paramsRouter = require('../routes/params.js');

const app = express();

app.use(express.json());

// Actual Routes
app.use(apiRouter);
app.use(paramsRouter);

app.use('*', notFoundHandler);
app.use(errorHandler);


module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};

