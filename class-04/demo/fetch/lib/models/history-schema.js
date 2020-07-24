'use strict';

const mongoose = require('mongoose');

const history = mongoose.Schema({
  url: { type: String, required: true },
  method: { type: String, uppercase: true, enum: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE'] },
  body: { type: String },
  headers: { type: String }
});

module.exports = mongoose.model('history', history);
