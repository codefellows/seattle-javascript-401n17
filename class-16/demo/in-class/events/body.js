'use strict';

const events = require('./event-pool');

events.on('light', eyelid);
events.on('light', pupil);
events.on('light', arm);

function pupil(payload) {
  console.log('Eyes are dialted at', payload.brightness, '%');
}

function arm(payload) {
  if (payload.brightness >= 90) {
    console.log('Covering Eyes');
  }
}

function eyelid(payload) {
  if (payload.brightness >= 75) {
    console.log('eyes are squinting');
  }
}

module.exports = { pupil, arm, eyelid }

// TO TEST

/*
const body = require('body.js');
describe('light', () => {
  it('pupils dilate', () => {
    let payload = { brightness: 75}
    const result = pupil(payload);
    expoect(result).toEqual('dilated');
  })
})
*/
