'use strict';

const supergoose = require('@code-fellows/supergoose');
const server = require('../server.js');

const request = supergoose(server.app)

describe('/api', () => {

  it('.post() sends a 500 error if there is no name presen', async () => {
    let obj = {
      foo: 'bar'
    };

    let response = await request.post('/api').send(obj);
    expect(response.status).toEqual(500);
  })

  it('.post() sends a 201 error if the input was valid', async () => {
    let obj = {
      name: 'test'
    };

    let response = await request.post('/api').send(obj);
    expect(response.status).toEqual(201);
  })

  it('.post() gets an id from the DB when input is valid', async () => {
    let obj = {
      name: 'test',
      height: 'short',
      hair: false
    };

    let response = await request.post('/api').send(obj);

    // is ._id there?
    expect(response.body._id).toBeDefined();

  });

  it('.post() receives an object when input is valid', async () => {
    let obj = {
      name: 'test',
      height: 'short',
      hair: false
    };

    let response = await request.post('/api').send(obj);

    // check the properties one by one
    Object.keys(obj).forEach(prop => {
      expect(response.body[prop]).toEqual(obj[prop])
    })

  })

})
