'use strict';

const { server } = require('../lib/server.js');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

describe('Food API', () => {
  it('can post() a new food', () => {
    let obj = { name: 'apples', calories: 100, type: 'FRUIT' };
    return mockRequest.post('/api/v1/food')
      .send(obj)
      .then(data => {
        let record = data.body;
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  it('can get() a food', () => {
    let obj = { name: 'oranges', calories: 100, type: 'FRUIT' };
    return mockRequest.post('/api/v1/food')
      .send(obj)
      .then(data => {
        return mockRequest.get(`/api/v1/food`)
          .then(record => {
            Object.keys(obj).forEach(key => {
              expect(record.body[1][key]).toEqual(obj[key]);
            });
          });
      });
  });

});
