'use strict';

const LinkedList = require('./singly-linked-list');

const list = new LinkedList();
list.append("John");
list.append("Cathy");
list.append("Zachary");
list.append("Allie");

// console.log(JSON.stringify(list, undefined, 2));

console.log('Traverse Iteratively');
let current = list.head;
while (current) {

  // do some work
  console.log(current.value);

  // Move our pointer
  current = current.next;

}

console.log('Traverse recursively');

function traverseLinkedListRecursively(node) {
  if (!node) { return; }

  // do our work
  console.log(node.value);

  // Move our pointer
  traverseLinkedListRecursively(node.next);
}

traverseLinkedListRecursively(list.head);


console.log('Traverse Recursively w/return value');

function traverseLinkedListRecursivelyWithReturn(node, biggestOne = "") {
  if (!node) { return biggestOne; }

  // Do Your Work
  if (node.value.length > biggestOne.length) { biggestOne = node.value; }

  return traverseLinkedListRecursivelyWithReturn(node.next, biggestOne);
}

console.log('Longest Name: ', traverseLinkedListRecursivelyWithReturn(list.head))
