'use strict'

const { SearchSource } = require("jest")

module.exports = (err, req, res, next) => {
  const output = {
    error: err
  };
  res.status(500).json(output);
}