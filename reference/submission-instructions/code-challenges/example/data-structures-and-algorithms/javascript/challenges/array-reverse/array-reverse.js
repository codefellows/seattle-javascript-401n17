'use strict';

module.exports = ([...arr]) => {

  let start = 0;
  let end = arr.length-1;
  while(start < end ) {
    let tmp = arr[start];
    arr[start] = arr[end];
    arr[end] = tmp;
    end--;
    start++;
  }

  return arr;

};
