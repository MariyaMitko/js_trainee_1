function checkBrackets(arr) {
    let stack = [];
    const pairs = {
        ")": "(",
        "}": "{",
        "]": "["
    };

    for (let el of arr) {
        if (["(", "{", "["].includes(el)) {
            stack.push(el);
        } else if ([")", "}", "]"].includes(el)) {
            if (stack.pop() !== pairs[el]) return false;
        }
    }
    return stack.length === 0;
}
console.log(checkBrackets(['(', ')', '(', ')', ')']));
console.log(checkBrackets(['(', ')', '{', '(', '}', ')']));
console.log(checkBrackets(['(', '(', ')', ')']));