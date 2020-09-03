'use strict';

module.exports = (req, res, next) => {
  let output = {
    error: "Not Found"
  };

  res.status(404).json(output);
}
