'use strict';

/**
 * Demonstrate the differences between the various ways
 * to create instances.  This should lead us from what
 * we have been using in 301 (constructor functions) and
 * into where we are headed in 401 (classes)
 *
 * This also introduces factory functions as another means
 * of comparison.
 */

const dogClass = require('./class.js');
const dogConstructor = require('./constructor.js');

console.log('Constructor...');
const rosieViaConstructor = new dogConstructor("Rosie");
console.log(rosieViaConstructor);
rosieViaConstructor.walk();
rosieViaConstructor.speak();

console.log('\n-------------------------------\n');

console.log('Class...');
const rosieViaClass = new dogClass("Rosie");
console.log(rosieViaClass);
rosieViaClass.walk();
rosieViaClass.speak();

// console.log(dogClass.thing); // Node 12 only