// 1.
const testerPositions = [
    "Quality Assurance Engineer",
    "Software Tester",
    "Test Automation Engineer",
    "Quality Analyst",
    "QA Tester",
    "Test Engineer",
    "Quality Control Analyst",
];

testerPositions.push("SDET", "Lead SDET");
console.log(testerPositions);

// 4.
// через стек
const sequences = [
    ['(', ')', '(', ')', ')'],
    ['(', ')', '(', ')', '{', '(', '}', ')', 2, 'a'],
    ['(', ')', '(', '(', '(', ')', '}', '(', ')', ')']
];

for (let j = 0; j < sequences.length; j++) {
    const currentArray = sequences[j];
    const stack = [];
    let isCorrect = true;

    for (let i = 0; i < currentArray.length; i++) {
        const char = currentArray[i];

        // 1. Если открывающая скобка - добавляем в стек
        if (char === '(' || char === '{') {
            stack.push(char);
        } 
        // 2. Если закрывающая - проверяем
        else if (char === ')' || char === '}') {
            
            // Если стек пуст, а встретилась закрывающая - ошибка
            if (stack.length === 0) {
                isCorrect = false;
                break;
            }

            // Достаем последнюю открытую скобку
            const lastOpen = stack.pop();

            // Проверяем соответствие пар
            if (
                (char === ')' && lastOpen !== '(') ||
                (char === '}' && lastOpen !== '{')
            ) {
                isCorrect = false;
                break;
            }
        }
    }

    // Финальная проверка: если в стеке что-то осталось, значит не все закрыто
    if (stack.length !== 0) {
        isCorrect = false;
    }

    console.log(`Последовательность ${j + 1}:`, isCorrect);
}

// через количество открытых и закрытых
const sequences = [
    [ '(', ')', '(', ')', ')'],
    ['(', ')', '(', ')', '{', '(', '}', ')', 2, 'a'],
    ['(', ')', '(', '(', '(', ')', '}', '(', ')', ')']
];

for (let i = 0; i < sequences.length; i++) {
    const arr = sequences[i];

    const openRound = arr.filter(el => el === '(').length;
    const closeRound = arr.filter(el => el === ')').length;

    const openCurly = arr.filter(el => el === '{').length;
    const closeCurly = arr.filter(el => el === '}').length;

    const isCorrect = (openRound === closeRound) && 
                      (openCurly === closeCurly);

    console.log(`Последовательность ${i + 1}:`, isCorrect);
}

// 5.
let arr = [4, 81, 3, -12, 99, 14];

const minVal = Math.min(...arr);
console.log("Самое маленькое число:", minVal);

// 2 способ
let minLoop = arr;
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minLoop) {
        minLoop = arr[i];
    }
}

console.log("Самое маленькое число:", minVal);

// 6.
let arr = [4, 81, 3, -12, 99, 14];

const maxVal = Math.max(...arr);
console.log("Самое большое число:", maxVal);

// 7.
let arr =  [[1, 2], [3, 4, 5], [6, 7, 8], 9, [10], [0, 11], "Hello"];
const sum = arr.flat() // убрали вложенность
               .filter(item => typeof item === 'number') // оставили только числа
               .reduce((acc, num) => acc + num, 0); // cуммируем

console.log("Сумма элементов:", sum); 

// 8.
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

// 9.
const wallHeight = 5;
const dayClimb = 3;
const nightSlide = 2;
let currentHeight = 0;

for (let days = 1; ; days++) {
    currentHeight += dayClimb;

    if (currentHeight >= wallHeight) {
        console.log(`Улитка доползет за ${days} дней.`);
        break;
    }

    currentHeight -= nightSlide;
}

// 10.
const size = 3; 
for (let i = 1; i <= size; i++) {
    let row = "";
    for (let j = 1; j <= size - i; j++) {
        row += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        row += "*";
    }
    console.log(row);
}

for (let i = size - 1; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= size - i; j++) {
        row += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        row += "*";
    }
    console.log(row);
}

// 11.
const lines = 5;

for (let i = 1; i <= lines; i++) {
    let row = "";

    const starCount = 2 * i - 1;

    for (let j = 0; j < starCount; j++) {
        row += "* ";
    }
    
    console.log(row);
}

// 12.
for (let count = 10; count >= 1; count--) {
    let row = "";
    
    for (let i = 0; i < count; i++) {
        row += i + " ";
    }
    
    console.log(row.trim());
}

// 13.
for (let count = 0; count < 10; count++) {
    let row = "";
    
    for (let i = 0; i < count; i++) {
        row += "  ";
    }

    for (let s = 0; s < 10 - count; s++) {
        row += s + " ";
    }
    
    console.log(row);
}

// 14.
const numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    if (i % 2 !== 0) {
        sum += numbers[i];
    }
}
console.log(sum);