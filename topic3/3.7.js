const mixed = [[1, 2], [3, 4, 5], [6, 7, 8], 9, [10], [0, 11], "Hello"];
let sum = 0;

for (let item of mixed) {
    if (Array.isArray(item)) {
        for (let num of item) sum += num;
    } else if (typeof item === "number") {
        sum += item;
    }
}

console.log(sum);