'use strict';

const express = require('express');
const router = express.Router();

const foodModel = require('../models/food/food-model.js');
const peopleModel = require('../models/people/people-model.js');

router.param('model', getModel);
router.param('id', showTheID);

router.get('/:model', getAll);
router.get('/:model/:id', getOne);
router.post('/:model', createOne);
router.put('/:model/:id', updateOne);
router.delete('/:model/:id', deleteOne);

function showTheID(req, res, next) {
  console.log('ID:', req.params.id);
  next();
}

// Find the right Model!
function getModel(req, res, next) {
  const modelName = req.params.model;
  if (modelName === "food") {
    req.model = foodModel;
  }
  else if (modelName === "people") {
    req.model = peopleModel;
  }
  next();
}

async function getAll(req, res) {
  const results = await req.model.read();
  const output = {
    count: results.length,
    results
  }
  res.status(200).json(output);
}

async function getOne(req, res) {
  const results = await req.model.read(req.params.id);
  res.status(200).json(results);
}

async function createOne(req, res) {
  const record = await req.model.create(req.body);
  res.status(200).json(record);
}

function updateOne(req, res) {
  res.status(200).send('updateOne');
}

function deleteOne(req, res) {
  res.status(200).send('deleteOne');
}


module.exports = router;