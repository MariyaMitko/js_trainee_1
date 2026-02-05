// 
const test1 = 85;
const test2 = 92;
const active = true;
const coeff = 0.95;

let OSB = ((test1 + test2) / 2) * coeff;

let finalScore = (OSB) => {
    if (OSB >= 95) console.log("Grade: A");
    else if (OSB >= 85) console.log("Grade: B");
    else if (OSB >= 75) console.log("Grade: C");
    else console.log("Grade: D");
}

if (OSB >= 80 && active) {
    finalScore(OSB);
}
else {
    console.log(`Не выполнилось условие: ${OSB}`);
    
}

// Тема Map и Set, их основные методы
// 1
function mapFromStr(str) {
    const words = str.toLowerCase().match(/\p{L}+/gu) || [];

    return words.reduce((tempMap, currWord) => {
        tempMap.set(currWord, (tempMap.get(currWord) || 0) + 1);
        return tempMap;
    }, new Map());     
}

// 2
const staffMap = new Map([
    ["Иван Иванов", "IT"],
    ["Анна Сидорова", "HR"],
    ["Петр Петров", "IT"],
    ["Мария Кузнецова", "Marketing"]
]);

const departments = new Map();

staffMap.forEach((dep, name) => {
    if (!departments.has(dep)) departments.set(dep, []);
    departments.get(dep).push(name);
});

console.log(departments);

// 3
const people = new Map([
    ["Алексей", 25],
    ["Мария", 30],
    ["Иван", 15],
    ["Елена", 30],
    ["Дмитрий", 17]
]);

const adults = new Map();

for (const [name, age] of people) {
    if (age > 18) adults.set(name, age);
}

console.log(adults);

//4 
const setFromArr = (arr) =>  [...new Set(arr)];
console.log(setFromArr([1, 2, 1, 1, 15, 2, 44]));

// Тема деструктурирующее присваивание, REST, SPREAD, Object.keys/values/entries
const arr = [10, 20, 30, 40];
let [a, b, , c] = arr;
console.log(a);
console.log(b);
console.log(c);

const a = [1, 2];
const b = [3, 4];
const c = [5, 6];

let concatenated = [...a, ...b, ...c];
console.log(concatenated);
