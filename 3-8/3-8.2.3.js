const peopleAges = new Map([
    ["Alice", 17],
    ["Bob", 21],
    ["Charlie", 19],
    ["Diana", 16]
]);

const adults = new Map();

for (const [name, age] of peopleAges) {
    if (age > 18) {
        adults.set(name, age);
    }
}

console.log(adults);
