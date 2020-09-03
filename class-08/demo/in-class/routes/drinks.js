'use strict';

// 3rd Party dependencies at the top
const uuid = require('uuid').v4;
const express = require('express');

// express.Router() instead of express()
const router = express.Router();

// Database
let database = {};

router.post('/drinks', create);
router.put('/drinks/:id', update);
router.delete('/drinks/:id', destroy);
router.get('/drinks', getAll);
router.get('/drinks/:id', getOne);

// CRUD FUNCTIONS
function create(req, res) {
  let id = uuid();

  let record = {
    _id: id,
    name: req.body.name,
    calories: req.body.calories,
  }

  database[id] = record;

  res.status(201).json(record);

}

function update(req, res) {
  // get the id from the params
  // replace database[id] with req.body
  res.status(200).send('Update Not Done');
}

function destroy(req, res) {
  // get the id from the params
  // delete the id from the database object
  res.status(200).send('Destroy Not Done');
}

function getAll(req, res) {
  /*
    {
      count: ##,
      results: [
        {},
        {}
      ]
    }
  */
  res.status(200).json(database);
}

function getOne(req, res) {
  let id = req.params.id;
  // database: { id: {}, id2: {} }
  res.status(200).json(database[id])
}

module.exports = router;
