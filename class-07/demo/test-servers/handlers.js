'use strict';

const handlers = {};


handlers.createNewRecord = (req, res, next) => {

  let record = req.body;
  // let record = Schema.save(req.body);
  // when saving to mongo, you get bonuses ... _id, __v
  if (record.name) {
    record._id = Math.random();
    res.status(201).json(record);
  }
  else {
    next('this is broke');
  }
};


module.exports = handlers;
