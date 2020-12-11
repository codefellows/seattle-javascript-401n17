'use strict';

const Queue = require('./queue')

let familyQueue = new Queue();

familyQueue.enqueue('John');
familyQueue.enqueue('Cathy');
familyQueue.enqueue('Zachary');
familyQueue.enqueue('Allie');

// console.log(JSON.stringify(familyQueue, undefined, 2));

console.log('Traverse Iteratively');

while (familyQueue.peek()) {

  // Process the current node
  let person = familyQueue.dequeue();
  console.log(person);

}

console.log('Traverse Recursively');

familyQueue.enqueue('John');
familyQueue.enqueue('Cathy');
familyQueue.enqueue('Zachary');
familyQueue.enqueue('Allie');

function traverseRecursively(queue) {
  // Base Case
  if (!queue.peek()) { return; }

  // Process
  let person = queue.dequeue();
  console.log(person);

  traverseRecursively(queue)

}

traverseRecursively(familyQueue);


console.log('Traverse Recursively with return / array');

familyQueue.enqueue('John');
familyQueue.enqueue('Cathy');
familyQueue.enqueue('Zachary');
familyQueue.enqueue('Allie');

function traverseRecursivelyWithReturnArray(queue, list = []) {
  if (!queue.peek()) { return list; }
  let person = queue.dequeue();
  list.push(person);
  return traverseRecursivelyWithReturnArray(queue, list);
}

console.log(traverseRecursivelyWithReturnArray(familyQueue));
