'use strict';

const Queue = require('./queue/index.js');

const familyQueue = new Queue();
const family = ['John', 'Cathy', 'Zach', 'Allie'];

function traverseQueueIteratively(queue) {

  // In a while loop, the base case is declared
  while (queue.peek()) {
    // Do work with the thing you pull off the front
    let person = queue.dequeue();
    console.log(person);

    // Continue on because it's a loop
  }
}


function traverseQueueRecursively(queue) {

  // Base Case?
  if (!queue.peek()) { return; }

  // do the work
  let person = queue.dequeue();
  console.log(person);

  // Continue on with the queue in it's new state
  traverseQueueRecursively(queue);

}

console.log('Iterative');
family.forEach(person => familyQueue.enqueue(person));
traverseQueueIteratively(familyQueue);

console.log('recursive');
family.forEach(person => familyQueue.enqueue(person));
traverseQueueRecursively(familyQueue);
