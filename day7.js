/* ----- Function Composition -----

Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

The function composition of an empty list of functions is the identity function f(x) = x.

You may assume each function in the array accepts one integer as input and returns one integer as output.

*/

/**
 * @param {Function[]} functions
 * @return {Function}
 */
const fn1 = (x) => 2 * x;
const fn2 = (x) => x + 1;

let functions = [fn1, fn2];

let compose = function (functions) {
  return function (x) {
    for (const fn of functions.reverse) {
      x = fn(x);
    }
    return x;
  };
};

// console.log(compose(functions));
// // const fn0 = x;

// const fn = compose([(x) => x + 1, (x) => 2 * x]);
// fn(4); // 9

// console.log(fn(4));
