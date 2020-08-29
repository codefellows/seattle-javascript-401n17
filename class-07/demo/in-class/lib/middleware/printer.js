'use strict';

module.exports = (words) => {
  return (req, res, next) => {
    if (words.match(/john/)) {
      next('no way you cannot do this');
    }
    else {
      next();
    }
  }
}