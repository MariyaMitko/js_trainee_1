let a = 10;
let b = -2;
let operator = "*";
let result;

if (operator === "+") result = a + b;
else if (operator === "-") result = a - b;
else if (operator === "*") result = a * b;
else if (operator === "/") result = a / b;
else result = "Unknown operator";

console.log(result);
