'use strict';


class Queue {

  constructor() {
    this.container = new Array();
  }

  enqueue(item) {
    this.container.push(item)
  }

  dequue() {
    return this.container.shift();
  }

  peek() {
    return this.container[0];
  }
}

module.exports = Queue;
