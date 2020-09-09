# API Server Recap

Working in teams, spend roughly 45 minutes on each of the following tasks.

- Use Mob Programming Techniques
- For each task, assign different roles
  - Driver (must only type)
  - Primary Navigator (must dictate logic)
  - Primary Researcher (must be looking up and validating)
  - You may disconnect at any time for a group discussion and resume coding when agreements are reached

## 1. Modularize the server

  An API server is presented to you in monolithic form. Refactor the server with the following entities in mind:

- Middleware
- Routes
- Handlers

## 2. DRY the Models

An API server is presented with models that are totally independent.

Refactor just the models to use a common model class for the CRUD methods, wrapping each schema.

## 3. Write Tests

An API server is presented that works, but has no tests. The tests are scaffolded out, but have no code.

Write the tests for the server and the models

## 4. Document the server

Using [JSDoc](https://jsdoc.app/) standards, write documentation for the following aspects of the application:

1. Each Module (summary)
1. Router Methods
1. Middleware
1. Model Interface (collection) CRUD methods

Be sure to identify inputs, outputs, summary information for each
