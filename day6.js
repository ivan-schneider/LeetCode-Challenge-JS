let arr = [1, 2, 3, 4];
let init = 0;
let total;

let reduce = function (arr, fn, init) {
  let accum = init;
  for (let i = 0; i < arr.length; i++) {
    accum = fn(accum, arr[i]);
  }

  let total = accum;
  return total;
};

let fn = function (accum, curr) {
  return accum + curr;
};

let somaTotal = reduce(arr, fn, init);

console.log(arr);
console.log(somaTotal);
