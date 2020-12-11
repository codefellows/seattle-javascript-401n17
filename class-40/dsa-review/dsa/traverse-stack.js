'use strict';

const Stack = require('./stack');

let familyStack = new Stack();
familyStack.push('John');
familyStack.push('Cathy');
familyStack.push('Zach');
familyStack.push('Allie');

console.log('Iterative Traversal');

while (familyStack.peek()) {
  // Process
  let person = familyStack.pop();
  console.log(person);
}


console.log('Recursive ...');
familyStack.push('John');
familyStack.push('Cathy');
familyStack.push('Zach');
familyStack.push('Allie');

function iterateRecursively(stack) {

  // Base Case
  if (!stack.peek()) { return; }

  // Process
  let person = stack.pop();
  console.log(person);

  // Move the pointer
  iterateRecursively(stack);

}

console.log(iterateRecursively(familyStack))
