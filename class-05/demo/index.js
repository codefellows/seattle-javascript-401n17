'use strict';

const LL = require('./lib/ll.js');
let list = new LL();

list.append('first');
list.append('second');
list.append('third');

console.log('constructed list:', list);