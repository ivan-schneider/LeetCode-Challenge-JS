/* ----- Create Hello World Function ----- (CLOSURE)

Write a function createHelloWorld. It should return a new function that always returns "Hello World".

*/

const createHelloWorld = function () {
  return function () {
    return "Hello World";
  };
};

const greet = createHelloWorld();
console.log(greet());
