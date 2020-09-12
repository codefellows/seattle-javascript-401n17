'use strict';

class Stack {

  constructor() {
    this.container = new Array();
  }

  push(item) {
    this.container.push(item);
  }

  pop() {
    return this.container.pop();
  }

  peek() {
    return this.container[this.container.length - 1]
  }

}

module.exports = Stack;
