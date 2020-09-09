'use strict';

const rootDir = process.cwd();
const supergoose = require('@code-fellows/supergoose');
const { app } = require(`${rootDir}/src/app.js`);
const mockRequest = supergoose(app);

describe('api server', () => {

  it('should respond with a 404 on an invalid route', () => {
  });

  it('should respond with a 404 on an invalid method', () => {
  });

  it('should respond properly on a get request to /api/v1/categories', () => {
  });

  it('should return a new record following a post to /api/v1/categories', () => {

  });

  it('should return a 500 error following a failed post to /api/v1/categories', () => {

  });

  it('should return a properly formatted object following a get to /api/v1/categories', () => {

  });

  it('should return a properly formatted record object following a get to /api/v1/categories/:id', () => {

  });


  it('should return the updated record following a put to /api/v1/categories/:id', () => {

  });

  it('should return a 500 error following a failed put to /api/v1/categories/:id', () => {

  })

  it('should return an empty object following a delete to /api/v1/categories/:id', () => {

  });

  it('should return a 500 error following a failed delete to /api/v1/categories/:id', () => {

  })

});
