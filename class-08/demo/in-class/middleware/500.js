'use strict';

module.exports = (err, req, res, next) => {

  let output = {
    error: err
  }

  res.status(500).json(output);

}
