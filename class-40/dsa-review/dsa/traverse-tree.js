'use strict';
const BST = require('./binary-search-tree');

const tree = new BST();

const nodes = [9, 4, 12, 3, 11, 22, 2];
nodes.forEach((number) => tree.insert(number))

// console.log(JSON.stringify(tree, undefined, 2));


function traverseWithHelper(root) {

  const results = [];

  const _walk = (node) => {
    results.push(node.value);
    if (node.left) { _walk(node.left); }
    if (node.right) { _walk(node.right) }
  }

  _walk(root);

  return results;

}

console.log(traverseWithHelper(tree.root));


console.log('Recursive without helper...');

function iterateRecursiveWithoutHelper(node, results = []) {
  results.push(node.value);
  if (node.left) { iterateRecursiveWithoutHelper(node.left, results) }
  if (node.right) { iterateRecursiveWithoutHelper(node.right, results) }
  return results
}

console.log(iterateRecursiveWithoutHelper(tree.root))


function goWide(tree) {

  let results = [];
  let nodeQueue = [];

  nodeQueue.push(tree.root); // enqueue

  while (nodeQueue.length) {  // queue.peek()
    // Process it
    let current = nodeQueue.shift();
    results.push(current.value);

    // Move through the children, accross the tree
    if (current.left) { nodeQueue.push(current.left) }
    if (current.right) { nodeQueue.push(current.right) }
  }

  return results;

}

console.log(goWide(tree))
