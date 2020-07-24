'use strict';

const express = require('express');
const router = express.Router();

function getZip(req, res, next) {
  req.body.zip = Math.floor(Math.random() * 10000).toString().padStart(5, 0);
  next();
}
router.param('city', getZip);


// That middleware will not run here
router.get('/places/seattle', function (req, res, next) {
  res.send(`Zip: ${req.body.zip}`);
});

// That middleware does run here
router.get('/places/:city', function (req, res, next) {
  res.send(`Zip: ${req.body.zip}`);
});

// But not here
router.get('/flights/to/:airport', function (req, res, next) {
  res.send(`Zip: ${req.body.zip}`);
});


module.exports = router;