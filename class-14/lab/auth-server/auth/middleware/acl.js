'use strict';

module.exports = (capability) => {

  return (req, res, next) => {
    // Does the user have capability
    if (req.user.can(capability)) {
      next();
    }
    else {
      next('No Soup For You!')
    }
  }

}
