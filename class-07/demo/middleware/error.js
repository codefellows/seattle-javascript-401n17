'use strict';

/**
 * Note that there's nothing special about this middleware on it's own
 * other than that it has 4 parameters, the first being "error"
 *
 * It will only "fire" if you define it in the chain in your server
 * and an error occurs...
 * in that event, this will run and send a proper 500 header and message.
 *
 * This should fire on any thrown error or any next() with a param, such as:
 * next('You did something wrong')
 *
 * @param req
 * @param res
 * @param next
 */
module.exports = (err,req,res,next) => {
  console.log('In the error handler');
  res.status(500);
  res.send('WTF?');
};
