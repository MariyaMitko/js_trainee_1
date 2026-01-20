// 1.
// let s = "Knowledge of built-in JavaScript methods speeds up a tester’s work.";

// console.log(s.charAt()); // K
// console.log(s.charAt(s.length -1)); // .
// console.log(s.substring(1, 4)); // now
// console.log(s.substr(1, 3)); // now
// console.log(s.slice(-3)); // rk.
// console.log(s.indexOf("l")); // 4
// console.log(s.lastIndexOf("l")); // 16
// console.log(s.split("of")); // ['Knowledge ',' built-in JavaScript methods speeds up a tester’s work.']
// console.log(s.replace("l", "L")); // 'KnowLedge of built-in JavaScript methods speeds up a tester’s work.'
// console.log(s.replaceAll("l", "L")); // 'KnowLedge of buiLt-in JavaScript methods speeds up a tester’s work.'
// console.log(s.toUpperCase()); // 
// console.log(s.toLowerCase()); // 
// console.log(s)

// 2.
// let str = "Hello, my name is John";

// console.log(str.at(-3)) // "o"
// console.log(str.charAt(2)) // "l"
// console.log(str.charCodeAt(0)) // 72
// console.log(str.concat("!")) // "Hello, my name is John!"
// console.log(str.includes("John")) // true
// console.log(str.indexOf("name")) // 10
// console.log(str.lastIndexOf("my")) // 10
// console.log(str.padEnd(30, ".")) // "Hello, my name is John........"
// console.log(str.padStart(30, "*")) // "********Hello, my name is John"
// console.log(str.repeat(2)) // "Hello, my name is JohnHello, my name is John"
// console.log(str.replace("John", "Diana")) // "Hello, my name is Diana"
// console.log(str.replaceAll("o", "0")) // "Hell0, my name is J0hn"
// console.log(str.slice(7, 9)) // "my"
// console.log(str.split(" ")) // [ 'Hello,', 'my', 'name', 'is', 'John' ]
// console.log(str.endsWith("John")) // true
// console.log(str.startsWith("Hello")) // true
// console.log(str.substring(7, 9)) // "my"
// console.log(str.substr(10, 4)) // "name"
// console.log(str.toUpperCase()); // "HELLO, MY NAME IS JOHN"
// console.log(str.toLowerCase()) // "hello, my name is john"
// console.log(str.toString()) // "Hello, my name is John"
// console.log(" hello ".trim()) // "hello"
// console.log(" hello ".trimEnd()) // " hello"
// console.log(" hello ".trimStart()) // "hello "

// 3.

const monthNumber = 1;
const result3 = "";

switch (monthNumber) {
     case "1":
          result3 = "January";
          break;
     case "2":
          result3 = "February";
          break;
     case "3":
          result3 = "March";
     case "4":
          result3 = "April";
          break;
     case 5:
          results3 = "May";
          break;
     case 6
          result3 == "June";
          break;
}

console.log(result3);