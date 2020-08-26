# Express

Express Server Mechanics: Routing, Middleware, and Approaches to Testing

## Learning Objectives

### Students will be able to

#### Describe and Define

- Express Middleware
- Express Routing
- HTTP Status Codes
- CRUD Operations using REST

#### Execute

- Write an express API server
  - Implement CRUD behavior through HTTP to a REST API
- Incorporate application level middleware
- Incorporate route level middleware
- Properly test an `express` server

## Today's Outline

<!-- To Be Completed By Instructor -->

## Notes

### Express Routing

- Event driven system
  - `app.get('/thing', (req,res) => {})`
  - This is the same pattern we see in Vanilla JS, jQuery
  - 'When a get event happens in our server, on "/thing", run this function...'
- The Request Object
  - `(req,..)`
  - /:parameters
    - `app.get('/api/:thing',...)` = `req.params.thing`
  - Query Strings
    - `http://server/route?ball=round` = `req.query.ball`
- The Response Object
  - `(..., res)`
  - Responsible for sending data back to the browser
  - Has methods like `send()` and `status()` that Express uses to format the output to the browser properly
    - Sends Headers
      - Cookies
      - Status Codes

### CRUD Operations with REST and Express

- CREATE
  - `app.post('/resource')`
- READ
  - `app.get('/resource')`
- UPDATE
  - `app.put('/resource/:id')`
- DESTROY
  - `app.get('/resource/:id')`

### Express Middleware

- What does it do?
  - A series of functions that the request "goes through"
  - Each function receives `request`, `response` and `next` as parameters
  - Application Middleware run on every route/request
    - Error Handling, Logging, BODY Parsing
  - Route Middleware runs on specific routes
    - Are you logged in?

Middleware runs your code, and then runs the `next()` middleware in the series.

```javascript
function myLogger(req,res,next) {
  console.log(req.method);
  next(); // runs the next middleware in line
}
```

If you call `next()` with an argument, it'll skip all remaining middleware and run your error handler, with that argument as the error

```javascript
function loggedIn(req,res,next) {
  if( validUser ) { next(); } // Run the next middleware
  else { next("you need to login"); } // Run the error handler, skipping all other middleware
}
```

> Your route handler (your normal `(req,res)` function) is always the last middleware in the series!

### Server Testing

- Generally, avoid starting the actual server for testing
- Instead, export your server as a module in a library
- Then, you can use `supertest` or `supergoose` to run your tests
  - This will hit your routes as though your server was running, without actually starting it

server.js

```javascript
const express = require('express');
const app = express();
app.get('/data', (req,res) => res.json({}));
// Export an object with the "app" in it.
module.exports = {
  start: () => app.listen(3000),
  server: app
}
```

server.test.js

```javascript
const supertest = require('supertest');
const myServer = require('server.js');
const client = supertest(myServer.server);
describe('my server', () => {
  test('can send data', () => {
    return client.get('/data')
      .then( response => {
        expect(response.body).toBeDefined();
      })
  })
})
```
