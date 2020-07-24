'use strict';

const express = require('express');

const router = express.Router();

router.get('/stuff:id', getStuff);

function getStuff(req,res,next) {
  res.status(200).send('Get off their lawn!');
}

module.exports = router;
