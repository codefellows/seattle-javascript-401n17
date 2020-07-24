# Classes, Inheritance, Functional Programming

Explore more advanced Javascript development patterns using ES6 Classes, Inheritance, Functional Programming techniques and error handling.

## Learning Objectives

### Students will be able to

#### Describe and Define

- The main tenets of functional programming
  - Pure functions, Higher Order Functions, Immutable State
- Javascript Prototypal Inheritance
- Class Based Inheritance
- Test Driven Development: Pros and Cons
- Continuous Integration and Deployment

#### Execute

- Converting Javascript Classes between Constructor/Prototypes and ES6 Class syntax
- Create a Class using ES6 Class Syntax
- Produce/Throw a custom Javascript error
- Write unit test for javascript code
- Setup Github Actions for their repositories for live build testing

## Today's Outline

<!-- To Be Completed By Instructor -->

## Notes on Testing

### Setting up and running tests on your machine

### Running Tests

- Install `jest` and `eslint` as dependencies
- Install a valid .eslintrc.json file in your project
- Edit your package.json to include test commands (see below)
- Run `npm test` in your project to run your test suite
- Run `npm run test-watch` in your project to continually test your code as you develop.

> **package.json**

```javascript
  ...
  "scripts": {
    "start": "node index.js",
    "lint": "eslint **/*.js",
    "test": "jest --verbose --coverage",
    "test-watch": "jest --watchAll --verbose --coverage"
  },
  ...
```

### Example GitHub Action for running tests as you push

``` javascript
name: Node CI

on: [push,pull_request]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [12.x]

    steps:
    - uses: actions/checkout@v1
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v1
      with:
        node-version: ${{ matrix.node-version }}
    - name: npm install, build, and test
      run: |
        npm ci
        npm run build --if-present
        npm test
      env:
        CI: true
```
