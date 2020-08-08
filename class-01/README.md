# Node Ecosystem, TDD, CI/CD

Application development in the Node.js ecosystem, including the writing of modular code using CommonJS modules, writing tests to assert code quality, setting up and working in a "Continuous Integration"  environment (Github Actions).

## Learning Objectives

### Students will be able to

#### Describe and Define

- Node and the V8 Engine
- Command Line Interface

#### Execute

- Setup a Node.js Package using npm
- Create CommonJS modules
- Receive input from the command line

## Today's Outline

<!-- To Be Completed By Instructor -->

### Importing and Exporting Modules

If one module **exports** a function, object, or class ...

```javascript
// person.js
const person = {};

person.walk = function() {
  return 'walking';
}

module.exports = person;
```

Another module can **import** and use that function or object

```javascript
const human = require('./person.js'))
console.log( human.walk() );  // prints 'walking'
```

### Command Line Input

We can allow users to send our program information when they run it. Generally, this is done with "flags" and "parameters"

- `-x` a simple flag that an app might use as a boolean internally
- `--port 3000` a more complex flag that sends a value

```bash
node server.js -v --port 3000
```

In our applications, these command line arguments are "visible" to node via `process.argv`, which is an array. In this example, we can see that:

- `[0]` is always the path to node,
- `[1]` is always the path to the javascript app
- everything after that, is whatever the user typed, each word as a new part of the array

```javascript
console.log(process.argv);

// Output:
[
  '/Users/johncokos/.nvm/versions/node/v10.19.0/bin/node',
  '/Users/johncokos/tmp/test.js',
  '-v',
  '--port',
  '3000'
]

console.log(process.argv.slice(2);
// Output:
['-v', '--port', '3000']
```

As you can see, it's easy to access what the user typed, but it's hard to tie those array values together into something meaningful. There are many node.js libraries on npm that make this easy for us.

- [Minimist](https://www.npmjs.com/package/minimist)
- Commander, ArgParse

There are also libraries that ask for input with a question and answer like interface

- Prompt, Inquirer
