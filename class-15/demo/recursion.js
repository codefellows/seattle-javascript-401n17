'use strict';

function add(a, b) {
  return a + b;
}

function recursiveAdd(a, b) {
  // 1. What is the base case?
  // (when do we stop)
  if (b === 0) { return a; }

  // Recursive Logic -- call ourselves over and over
  // But slightly different each time

  return recursiveAdd(a + 1, b - 1);
}

console.log(add(2, 5));

console.log(recursiveAdd(2, 5));
