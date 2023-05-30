let arr = [0, 10, 20, 30, 40, 50];
let newArr = [];
let n = 20;

let filter = function (arr, fn) {
  for (i = 0; i < arr.length; i++) {
    if (fn(arr[i], n)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

let fn = function (element, n) {
  if (element > n) {
    return true;
  }
  return false;
};

let filteredArr = filter(arr, fn);

console.log(arr);
console.log(filteredArr);
