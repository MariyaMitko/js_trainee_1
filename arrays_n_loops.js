// 1.
// const testerPositions = [
//     "Quality Assurance Engineer",
//     "Software Tester",
//     "Test Automation Engineer",
//     "Quality Analyst",
//     "QA Tester",
//     "Test Engineer",
//     "Quality Control Analyst",
// ];

// testerPositions.push("SDET", "Lead SDET");
// console.log(testerPositions);

// 4.
const arr = ['(', ')', '(', ')', '{', '(', '}', ')', 2, 'a'];

const stack = [];
let isCorrect = true; // Флаг результата

// Перебираем массив
for (let i = 0; i < arr.length; i++) {
    const symbol = arr[i];

    // Если это открывающая скобка — добавляем в stack
    if (symbol === '(' || symbol === '{' || symbol === '[') {
        stack.push(symbol);
    } 
    // Если это закрывающая скобка
    else if (symbol === ')' || symbol === '}' || symbol === ']') {
        
        // Если стек пуст, а мы встретили закрывающую — ошибка
        if (stack.length === 0) {
            isCorrect = false;
            break;
        }

        // Достаем последнюю открытую скобку
        const lastOpen = stack.pop();

        // Проверяем соответствие пар
        if (
            (symbol === ')' && lastOpen !== '(') ||
            (symbol === '}' && lastOpen !== '{') ||
            (symbol === ']' && lastOpen !== '[')
        ) {
            isCorrect = false;
            break;
        }
    }
    // Цифры и буквы просто игнорируем
}

// Финальная проверка: если стек не пуст, значит остались незакрытые скобки
if (stack.length !== 0) {
    isCorrect = false;
}

console.log(`Скобки расставлены верно: ${isCorrect}`);
