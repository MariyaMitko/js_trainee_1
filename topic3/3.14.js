const numbers = [1, 2, 3, 4, 5];
let sum2 = 0;

for (let i = 0; i < numbers.length; i++) {
    if (i % 2 !== 0) {
        sum2 += numbers[i];
    }
}

console.log(sum2);