/* ----- Counter II ----- (CLOSURE)

Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
*/

const createCounter = function (init) {
  let initialCounter = init;

  function decrement() {
    initialCounter = init;
    return --initialCounter;
  }

  function increment() {
    initialCounter = init;
    return ++initialCounter;
  }

  function reset() {
    initialCounter = init;
    return initialCounter;
  }

  return {
    decrement: decrement,
    increment: increment,
    reset: reset,
  };
};

const counter = createCounter(15);
console.log(counter.decrement());
console.log(counter.increment());
console.log(counter.reset());
