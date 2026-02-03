// Система управления обучением (LMS)
// 1. Объявление переменных
const score1 = 85; // баллы за тест 1
const score2 = 92; // баллы за тест 2
const isActive = true; // статус активности
const difficulty = 0.95; // коэффициент сложности курса

// 2. Общий Средний Балл (ОСБ)
const averageScore = (score1 + score2) / 2;
// применяем коэффициент сложности:
const totalScore = averageScore * difficulty;
console.log(`Общий средний балл: ${totalScore}`);

// 3. Проверка статуса успешности
const isSuccess = (totalScore >= 90) && isActive;
console.log(`Статус успешности: ${isSuccess}`);

// 4. Финальная оценка
let grade;

if (totalScore >= 95) {
    grade = "A";
} else if (totalScore >= 85) {
    grade = "B";
} else if (totalScore >= 75) {
    grade = "C";
} else {
    grade = "D";
}

console.log(`Финальная оценка: ${grade}`)

// Тема Map и Set, их основные методы
// 1.
function countWords(str) {
    const wordsMap = new Map();

    const words = str.split(" ");
    for (let word of words) {
        let count = wordsMap.get(word) || 0;
        wordsMap.set(word, count + 1);
    }

    return wordsMap;
}

console.log(countWords("apple banana apple orange"));

// 2.
const employees = new Map([
    ["Ivan", "IT"],
    ["Anna", "HR"],
    ["Oleg", "IT"]
]);

const departments = new Map();

employees.forEach((dept, name) => {
    if (!departments.has(dept)) {
        departments.set(dept, []);
    }

    departments.get(dept).push(name);
});

console.log(departments);

// 3.
const people = new Map([
    ["Max", 25],
    ["Kate", 16],
    ["Alex", 30]
]);

const adults = new Map();

people.forEach((age, name) => {
    if (age > 18) {
        adults.set(name, age);
    }
});

console.log(adults);

// 4.
function uniqueArray(arr) {
    return [...new Set(arr)];
}

console.log(uniqueArray([5, 7, 9, 5, 8, 9, 14]));

// Тема деструктурирующее присваивание, REST, SPREAD, Object.keys/values/entries
// 1.
const arr = [10, 20, 30, 40];

const [a,b, ,c] = arr;
console.log(a,b,c)

// 2.
const a = [1, 2];
const b = [3, 4];
const c = [5, 6];

const arr_new = [...a, ...b, ...c];
console.log(arr_new)