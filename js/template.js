const person = 'Adam Sandler';
const person2 = 'Ben White';
const person3 = `Donald Trump`; //Backtick

const multiLine = 'First Line\n' + 'Second Line\n' + 'Third Line'; // \n new line
console.log(multiLine);

// Template String
const newMultiLine = `First line of Text
Second of Text
third line of code
fourth line of string`;
// console.log(newMultiLine);
const a = 20;
const b = 30;
const nums = [72, 23, 45, 43, 56, 322];
const summary = 'sum of ' + a + ' and ' + b + ' is ' + (a + b);
console.log(summary);

// Dynamic String
const newSummary = `sum of ${a} and ${nums.length} is: ${a + b}`;
console.log(newSummary);
