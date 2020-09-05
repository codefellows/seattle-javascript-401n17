'use strict';

module.exports = (req, res, next) => {
  const output = {
    error: "Not Found"
  }
  res.status(404).json(output);
}