'use strict';

const { exportAllDeclaration } = require('@babel/types');
let Stack = require('../stack.js');

describe('stack', () => {

  it('can push an item', () => {
    let stack = new Stack();
    stack.push(1);
    expect(stack.peek()).toEqual(1);
  });

  it('properly pushes items to the top', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toEqual(2);
  })

  it('can pop the top off of the stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    let item = stack.pop();
    expect(item).toEqual(2)
    expect(stack.peek()).toEqual(1);
  });

  it('can process completely', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);

    // Base Case -- when does the loop end?
    while (stack.peek()) {
      let item = stack.pop();
    }

    expect(stack.peek()).toBeUndefined();

  })

});
