'use strict';

module.exports = (err, req, res, next) => {
  console.error('ERRROR', err);
  // next();
  res.status(500).send(err);
}