const max = Math.max(12, 34, 456, 564, 345);
console.log(max);
const numbers = [12, 23, 45, 67];
const largest = Math.max(...numbers);
console.log(numbers); //returns the array of numbers
console.log(...numbers); //returns numbers from the array
console.log(largest);

const numbers2 = [...numbers]; // will only assign number from the array numbers
const numbers2 = [444, 76, ...numbers, 567]; // will  assign numbers along with [numbers]
numbers.push(55);
numbers2.push(777);
console.log(numbers);
console.log(numbers2);
