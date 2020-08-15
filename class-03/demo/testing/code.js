'use strict';

const uuid = require('uuid');
const minimist = require('minimist');

const app = {};

app.getId = () => {
  let id = uuid.v4();
  app.yell(id)
  return id;
}

app.getInput = () => {
  let input = minimist(process.argv.slice(2))
  return input.add ? input : undefined;
}

app.yell = (thing) => {
  console.log(thing);
}

module.exports = app;
