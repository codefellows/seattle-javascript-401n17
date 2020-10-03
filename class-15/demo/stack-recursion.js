'use strict';

const Stack = require('./stack/index.js');

let familyStack = new Stack();

let family = ['John', 'Cathy', 'Zach', 'Allie'];


function traverseStack(stack) {
  while (stack.peek()) {
    // do the work with the thing you popped off
    let person = stack.pop();
    console.log(person);

    // Continue the iteration (while loops just go...)
  }
}


function traverseStackRecursively(stack) {
  // Base case ...
  if (!stack.peek()) { return; }

  // Do the work
  let person = stack.pop();
  console.log(person);

  // Continue on down the stack ...
  traverseStackRecursively(stack)
}

// Create a stack
console.log('Iterative');
family.forEach(person => familyStack.push(person));
console.log(traverseStack(familyStack))

console.log('Recursive');
// It's empty now, so re-create it
family.forEach(person => familyStack.push(person));
console.log(traverseStackRecursively(familyStack))

// console.log(JSON.stringify(familyStack, null, 4));
