class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LL {
  constructor() {
    this.head = null;
  }

  add(val) {
    let node = new Node(val);

    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  // this will be used in our hashmap to display each item in the list
  get() {
    if (!this.head) {
      return null;
    } else {
      let current = this.head;

      while(current) {
        console.log(current.val);
        current = current.next;
      }
    }
  }
}

class Hashmap {
  // hashmaps need a determined size
  // hashmaps need a storage mechanism (ie: bucket), like an array
  // our constructor creates a new storage mechanism (array) with a determined size
  constructor(size) {
    this.size = size;
    this.storage = new Array(size);
  }

  // generates a "hash" (number) that is between 0 and the size of our array
  // to generate the hash we grab the char code for each char in our key (string)
  // we then take those values, add them together, and multiply by a prime number and divide
  // by our storage size (which we determined) and grab the remainder => this is our index placement
  hash(key) {
    return key.split('').reduce((acc, cur, i) => {
      return acc + cur.charCodeAt(0);
    }, 0) * 19 % this.size;
  }

  // will create a new LL for each key/val pair
  // the value will be housed as the "val" of each node in our linked list, given a specific idx placement
  set(key, val) {
    let hash = this.hash(key); // the hash function is meant to give us an index placement

    if(!this.storage[hash]) {
      let ll = new LL();
      ll.add([key, val]);
      this.storage[hash] = ll; // this is a single ll, with a single node, with a value [key, val]
    } else {
      this.storage[hash].add([key, val]); // more than 1 item in a linked list, given an index
    }
  }

  get(key) {
    // you need to build this
  }
}

let hashmap = new Hashmap(4000);

console.log(hashmap);

hashmap.set('key', 'value');
hashmap.set('alex', 'johnson');
hashmap.set('alex', 'nations');
hashmap.set('chris', 'rock');
hashmap.set('bob', 'builder');

hashmap.storage.forEach((item, idx) => {
  item.get();
})