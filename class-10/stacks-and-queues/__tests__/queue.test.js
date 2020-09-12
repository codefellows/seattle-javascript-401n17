'use strict';

const { exportAllDeclaration } = require('@babel/types');
const Queue = require('../queue.js');

describe('queue', () => {

  it('can enqueue an item', () => {
    let queue = new Queue()
    queue.enqueue(1);
    expect(queue.peek()).toEqual(1);
  });

  it('can dequeue an item', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    let item = queue.dequeue();
    expect(item).toEqual(1);
    expect(queue.peek()).toEqual(2)
  });

  it('can process properly', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);

    while (queue.peek()) {
      let item = queue.dequeue();
    }

    expect(queue.peek()).toBeUndefined();
  })
})
