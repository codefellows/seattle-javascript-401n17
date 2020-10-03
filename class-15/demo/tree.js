'use strict';

class TreeNode {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }

}

class BinaryTree {
  constructor(node = null) {
    this.root = node;
  }

  preOrder() {

    let results = [];

    const _walk = (node) => {
      // do the work
      results.push(node.value);

      // continue along
      if (node.left) { _walk(node.left); }
      if (node.right) { _walk(node.right); }
    }

    _walk(this.root);

    return results;

  }

  inOrder() {

    let results = [];

    const _walk = (node) => {

      if (node.left) { _walk(node.left); }
      results.push(node.value);
      if (node.right) { _walk(node.right); }
    }

    _walk(this.root);
    return results;

  }

  postOrder() {
    let results = [];

    const _walk = (node) => {

      if (node.left) { _walk(node.left); }
      if (node.right) { _walk(node.right); }
      results.push(node.value);
    }

    _walk(this.root);
    return results;

  }

}

class BinarySearchTree extends BinaryTree() {
  add(value) {
    // make a new node
    // traverse and put node in the right spot
  }
}

let twenty = new TreeNode(20);
let twelve = new TreeNode(12);
let six = new TreeNode(6);
let seventeen = new TreeNode(17);
let thirtytwo = new TreeNode(32);
let twentyfive = new TreeNode(25);
let fourty = new TreeNode(40);
let seventy = new TreeNode(70);

twenty.left = twelve;
twenty.right = thirtytwo;
twelve.left = six;
twelve.right = seventeen;
thirtytwo.right = fourty;
thirtytwo.left = twentyfive;
fourty.right = seventy;

let tree = new BinaryTree(twenty);
// For a bst ...
// tree.add(20);
// tree.add(12);

console.log(tree.preOrder());
console.log(tree.inOrder());
console.log(tree.postOrder());

// console.log(JSON.stringify(tree, undefined, 4));
