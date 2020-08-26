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

## Notes

### Setting up and running tests on your machine

By Convention:

- Tests should be in a folder named `__tests__` in the root of your project
- Test files should be named `modulename.test.js`, corresponding to each `module.js` that you write

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

### Writing Tests

Groups of tests go into a function, labeled `describe` which takes a title and a callback. The describe's 'title' is traditionally written as the start of a statement

   ```javascript
   describe('The math module', () => {
     // tests go here
   });
   ```

Individual tests (unit tests) live within the describe "block" as a function, labeled `it` or `test` which takes a title and a callback. Traditionally, these describe one part or one function (or one part of one function) and are titled in lowercase, as the completion of the describe 'sentence'

   ```javascript
   describe('The math module', () => {

     test('can add two numbers', () => {
     // assertions go here
     });

   });
   ```

[Assertions](https://jestjs.io/docs/en/expect) live within each `test()` block. Their purpose is to execute the code in your module to exercize it's proper functionality. Traditionally, we like to see only one `expect` per block, so that our testing is more granular

   ```javascript
   describe('The math module', () => {

     test('can add two numbers', () => {
       let Arithmetic = new Arithmetic();
       let exected = 4;
       let actual = Arithmetic.add(2,2);
       expect(actual).toEqual(expected);

     });

   });
   ```

### Setup and Tear Down

The JEST testing framework allows you to additionally run some code to set thing up before you run all of your tests (or in ahead of every test). For example, in the code above, it is a waste to make a `new Arithmetic()` in every test, so we can do that once, and the [JEST Setup and Tear Down System](https://jestjs.io/docs/en/setup-teardown) will run that code for us ahead of everything.

   ```javascript
   describe('The math module', () => {

     let arithmetic;

     // Runs once, before all of the 'tests' below run
     beforeAll( () => {
       let arithmetic = new Arithmetic();
     })

    // or ... beforeEach(), which would run right before each 'test()'

     test('can add two numbers', () => {
       let exected = 4;
       let actual = arithmetic.add(2,2);
       expect(actual).toEqual(expected);

     });

   });
   ```

### Testing Asynchronous Code

When [testing async code](https://jestjs.io/docs/en/asynchronous), you'll need to obey a few special conventions in jest.

- For callbacks, pass a `done` param into the `test()` and then call it when your interior callbacks have completed

   ```javascript
   test(`will wait for a callback to complete', (done) => {
     fs.readFile('something.txt, (err,data) => {
       expect(data).toBeDefined();
       done();
     })
   })
   ```

- For promises, `return` the promise code in your test and Jest will wait for it to finish before running the `expect`

   ```javascript
   test(`will wait for a promise to complete', () => {
     return superagent.get('http://pokemon.co')
       .then(response => {
         expect(resonse.body).toBeDefined();
       });
   })
   ```

- For async/await, simply declare your `test` as asynchronous and run your code like "normal"

   ```javascript
   test(`will wait for a async/await to complete', async () => {
     let response = await superagent.get('http://pokemon.co')
     expect(resonse.body).toBeDefined();
   })
   ```
