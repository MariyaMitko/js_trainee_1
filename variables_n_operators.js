// 1. Переменные
let firstName, lastName;

firstName = "John";
lastName = "Adams";

console.log(firstName, lastName) // "John Adams"

firstName = "Brandon";
lastName = "Smith";

console.log(firstName, lastName) // "Brandon Smith"

// 2.
let a;
console.log(typeof a); // undefined

let c = 9;
console.log(typeof c); // Number

let str = "Hi 5!";
console.log(typeof str); // String

let b = true;
console.log(typeof b); // Boolean

let y = 9 + "1";
console.log(typeof y); // String

let x = "a" / 6;
console.log(typeof x); // Number

// 3. 
const pi = 3.14159;
const birthYear = 1999;
const country = "Belarus";
const nickname = "dizdonchik";

console.log(pi);
console.log(birthYear);
console.log(country);
console.log(nickname);

// 4.
console.log(10 > 10 && 10 < 20); // false
console.log(11 > 10 && 11 < 20); // true
console.log(12 > 10 && 12 < 20); // true
console.log(13 > 10 && 13 < 20); // true
console.log(14 > 10 && 14 < 20); // true
console.log(15 > 10 && 15 < 20); // true
console.log(16 > 10 && 16 < 20); // true
console.log(17 > 10 && 17 < 20); // true
console.log(18 > 10 && 18 < 20); // true
console.log(19 > 10 && 19 < 20); // true
console.log(20 > 10 && 20 < 20); // false

// 5.
// 5.1
const number = 15;
const result = number + 5;
console.log(result); // 20

// 5.2
const number2 = "28";
const result = number2 + 2;
console.log(result); // "282" - сложение строк

// 5.3
console.log( null || 2 || undefined ); // 2 - null = false

// 5.4
const x = 5;
const y = 10;

console.log(x > 0 && y < 20); // true
console.log(x < 0 && y > 0); // false
console.log(x < 0 && y < 0); // false
console.log(x > 0 && "Hello"); // "Hello"

// 5.5
const a = 0;
const b = "World";

console.log(a > 0 || b.length > 0); // true
console.log(a > 0 || b.length === 0); // false
console.log(a > 0 || ""); // ""
console.log(a < 0 || "Hello"); // "Hello"

// 5.6
let x = 5;
let y = 10;
let z = 15;
let result = (x > y || y < z) && !(z === x); // true

// 6.
let age = 18;
let isAdult = age >= 18;
let typeOfIsAdult = typeof isAdult;
console.log(typeOfIsAdult); // Boolean