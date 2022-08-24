// Object Destructuring

const fish = {
  name: 'King Hilsa',
  address: 'Chandpur',
  color: 'Silver',
  phone: '01072638227',
  price: 4000,
};
//not efficient
// const phone = fish.phone;
// const phone = fish.color;
// const phone = fish.price;

const { phone, address, color } = fish;
console.log(phone, color);

const { age, profession } = { name: 'Almas', age: 45, profession: 'Artist' }; //declare variable same as property name
console.log(age, profession);

// Array Destructuring

const [first, second, third] = [44, 35, 45, 32, 56];

const nayoks = ['Sakib', 'Bappi', 'Raj'];
const [king, lost, notun] = nayoks;
console.log(king);

//in function
function getNames() {
  return ['Alim', 'Halim'];
}
const [baba, chacha] = getNames();
console.log(baba);
