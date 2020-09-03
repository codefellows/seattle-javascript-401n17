'use strict';

module.exports = (req, res, next) => {
  console.log(req.method, req.path)
  next();
}
