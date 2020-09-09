'use strict';

module.exports = (err, req, res, next) => {
  let error = { error: err };
  res.status(500).json(error).end();
};
