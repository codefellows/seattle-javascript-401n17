# Warm Up - Shredder Type Checking

Create a new shredder function to determine the type of a variable

## Overview

Javascript has a few disparate ways to determine what data type your variables represent

- typeof
- instanceof
- Object.constructor
- Array.isArray()

## Challenge 1: `$$.whatIs(thing)`

Write a new function for shredder that takes a single argument (a variable) and returns the correct datatype

- object
- array
- string
- boolean
- function

```javascript
let name = "john";
$$.whatIs(name); // string

let weather = {
  hot: true,
  humid: false
}
$$.whatIs(weather); // object

// Yes, arrays are really objects, but the spirit of the .is() is to get "real"
let dogs = ['rosie','kali'];
$$.whatIs(dogs); // array

// Custom Consructors
function Person(name) {
  this.name=name;
}
let nancy = new Person('Nancy');

$$.whatIs(nancy); // object
```

## Challenge 2: `$$.is(thing, type)`

Write a new function for shredder that takes 2 arguments: a variable, and a data type

Return a boolean indicating whether or not the variable is actually of the type specified

> Note: this function should also be aware of custom classes.

```javascript
let name = "john";
$$.is(name, 'string'); // true

let weather = {
  hot: true,
  humid: false
}
$$.is(weather, 'object'); // true

// Yes, arrays are really objects, but the spirit of the .is() is to get "real"
let dogs = ['rosie','kali'];
$$.is(dogs,'array'); // true
$$.is(dogs,'object'); // false

// Custom Consructors
function Person(name) {
  this.name=name;
}
let nancy = new Person('Nancy');

$$.is(nancy, 'Person'); // true
$$.is(nancy, 'object'); // true
```
