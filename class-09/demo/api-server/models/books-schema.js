const mongoose = require('mongoose');

const books = mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  isbn: { type: String, required: true },
  image: { type: String, required: true },
});

module.exports = mongoose.model('books', books);