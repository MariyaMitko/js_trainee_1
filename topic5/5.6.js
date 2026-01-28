function calculate(a, b, operator) {
    if (operator === "+") console.log(a + b);
    else if (operator === "-") console.log(a - b);
    else if (operator === "*") console.log(a * b);
    else if (operator === "/") console.log(a / b);
    else console.log("Unknown operator");
}

calculate(5, 2, "+");
calculate(5, 2, "*");
