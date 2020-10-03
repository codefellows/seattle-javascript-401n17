'use strict';

const LinkedList = require('./singly-linked-list/index.js');

const familyList = new LinkedList();
familyList.append('John');
familyList.append('Cathy');
familyList.append('Zach');
familyList.append('Allie');


function traverseIteratively(list) {
  let current = list.head;
  // While Loop: Base case tells when we are done
  while (current) {
    // Do work
    console.log(current.value);

    // Continue On
    current = current.next;
  }
}

function traverseRecursively(node) {

  // base case ---
  if (!node) { return; }

  // Do your work
  console.log(node.value);

  traverseRecursively(node.next);
}

console.log('iterative');
traverseIteratively(familyList);


console.log('recursive');
traverseRecursively(familyList.head);
