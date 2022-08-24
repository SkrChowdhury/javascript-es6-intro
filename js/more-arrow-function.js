const add = (first, second) => first + second;

const getFullName = (first, last) => first + ' ' + second;
const multiply = (a, b) => a * b;

const result = multiply(3, 5);
console.log(result);

// multi parameter arrow function
const addAll = (a, b, c, d, e, f) => a + b + c + d + e + f;

// no parameter arrow function
const getPie = () => 3.14;

//single parameter
const doubleIt = (num) => num * 2;

//single parameter simple version
const fiveTimes = (num) => num * 5;

// multi line arrow function
const doMath = (x, y, z) => {
  const firstSum = x + y;
  const secondSum = y + z;
  const multiplyResult = firstSum * secondSum;
  const result = multiplyResult / 2;
  return result;
};
