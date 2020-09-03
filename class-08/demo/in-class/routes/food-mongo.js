'use strict';

// 3rd Party dependencies at the top
const express = require('express');

// express.Router() instead of express()
const router = express.Router();
const food = require('../models/food/food-collection.js');

// RESTFUL paths ... "resource"
router.post('/food', create);
router.put('/food/:id', update);
router.delete('/food/:id', destroy);
router.get('/food', getAll);
router.get('/food/:id', getOne);

// CRUD FUNCTIONS
async function create(req, res) {
  let record = await food.create(req.body);
  res.status(201).json(record);
}

function update(req, res) {
  // get the id from the params
  // call food.update(id, req.body)
  res.status(200).send('Update Not Done');
}

function destroy(req, res) {
  // get the id from the params
  // call food.delete(id)
  res.status(200).send('Destroy Not Done');
}

async function getAll(req, res) {

  let data = await food.read();

  let output = {
    count: data.length,
    results: data
  }

  res.status(200).json(output);
}

async function getOne(req, res) {
  let id = req.params.id;
  let record = await food.read(id);
  res.status(200).json(record);
}

module.exports = router;
