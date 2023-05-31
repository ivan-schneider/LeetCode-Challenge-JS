/* ----- Counter ----- (CLOSURE)

Given an integer n, return a counter function. This counter function initially 
returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

*/

const createCounter = function (n) {
  return function () {
    return n++;
  };
};

let initialCounter = 5;
const counter = createCounter(initialCounter);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
