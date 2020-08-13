# Warm Up

The **shredder** library ($$)

## `$$.map()` method

Takes 2 arguments: An array or object and a callback.

Returns a new structure matching the old, based on the return value of the callback.

```javascript
let array = [1,2,3,4];
$$.map(array, (val,idx) => {
  return val * val;
});

// [1,4,9,16]

let obj = {
  hot: "yes",
  sunny: "no",
};

$$.map(obj, (key, val) => {
  return val.toUpperCase;
})

// { hot: "YES", sunny: "NO" }
```
