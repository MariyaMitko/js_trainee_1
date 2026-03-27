let arr = [0, 10, 20, 30];
let fn = function greaterThan10(n) { return n > 10; };

let filteredArr = [];

for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
        filteredArr.push(arr[i]);
    }
}

console.log(filteredArr);
