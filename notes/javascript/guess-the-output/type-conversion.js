console.log(isNaN("hello")); // true
console.log(Number.isNaN("hello")); // false

console.log(NaN == undefined); // false
console.log(NaN == NaN); // false

console.log(NaN == false); // false
console.log(NaN == true); // false

// ! [] == false is true while {} == false is false
console.log([] == false); // true
console.log({} == false); // false
