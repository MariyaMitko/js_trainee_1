// 1.
let s = "Knowledge of built-in JavaScript methods speeds up a tester’s work.";

console.log(s.charAt()); // K
console.log(s.charAt(s.length -1)); // .
console.log(s.substring(1, 4)); // now
console.log(s.substr(1, 3)); // now
console.log(s.slice(-3)); // rk.
console.log(s.indexOf("l")); // 4
console.log(s.lastIndexOf("l")); // 16
console.log(s.split("of")); // ['Knowledge ',' built-in JavaScript methods speeds up a tester’s work.']
console.log(s.replace("l", "L")); // 'KnowLedge of built-in JavaScript methods speeds up a tester’s work.'
console.log(s.replaceAll("l", "L")); // 'KnowLedge of buiLt-in JavaScript methods speeds up a tester’s work.'
console.log(s.toUpperCase()); // 
console.log(s.toLowerCase()); // 
console.log(s)

// 2.
let str = "Hello, my name is John";

console.log(str.at(-3)) // "o"
console.log(str.charAt(2)) // "l"
console.log(str.charCodeAt(0)) // 72
console.log(str.concat("!")) // "Hello, my name is John!"
console.log(str.includes("John")) // true
console.log(str.indexOf("name")) // 10
console.log(str.lastIndexOf("my")) // 10
console.log(str.padEnd(30, ".")) // "Hello, my name is John........"
console.log(str.padStart(30, "*")) // "********Hello, my name is John"
console.log(str.repeat(2)) // "Hello, my name is JohnHello, my name is John"
console.log(str.replace("John", "Diana")) // "Hello, my name is Diana"
console.log(str.replaceAll("o", "0")) // "Hell0, my name is J0hn"
console.log(str.slice(7, 9)) // "my"
console.log(str.split(" ")) // [ 'Hello,', 'my', 'name', 'is', 'John' ]
console.log(str.endsWith("John")) // true
console.log(str.startsWith("Hello")) // true
console.log(str.substring(7, 9)) // "my"
console.log(str.substr(10, 4)) // "name"
console.log(str.toUpperCase()); // "HELLO, MY NAME IS JOHN"
console.log(str.toLowerCase()) // "hello, my name is john"
console.log(str.toString()) // "Hello, my name is John"
console.log(" hello ".trim()) // "hello"
console.log(" hello ".trimEnd()) // " hello"
console.log(" hello ".trimStart()) // "hello "

// 3.

const monthNumber = 1;
let result3 = "";

switch (monthNumber) {
     case 1:
          result3 = "January";
          break;
     case 2:
          result3 = "February";
          break;
     case 3:
          result3 = "March";
          break;
     case 4:
          result3 = "April";
          break;
     case 5:
          result3 = "May";
          break;
     case 6:
          result3 = "June";
          break;
}

console.log(result3);

// 4.

let day = "Monday";
let message;

if (day === "Monday") {
     message = "It's Monday!";
} 
else if (day === "Tuesday") {
     message = "It's Tuesday!";
} 
else if (day === "Wednesday") {
     message = "It's Wednesday!";
} 
else if (day === "Thursday") {
     message = "It's Thursday!";
} 
else if (day === "Friday") {
     message = "It's Friday!";
} 
else if (day === "Saturday") {
     message = "Its Saturday!";
} 
else if (day === "Sunday") {
     message = "It's Sunday!";
} 
else {
     message = "Invalid day!";
}

console.log(message);

// 5.

const dayNumber = 3;
let dayName = "";

switch (dayNumber) {
    case 1:
        dayName = "Понедельник";
        break;
    case 2:
        dayName = "Вторник";
        break;
    case 3:
        dayName = "Среда";
        break;
    case 4:
        dayName = "Четверг";
        break;
    case 5:
        dayName = "Пятница";
        break;
    case 6:
        dayName = "Суббота";
        break;
    case 7:
        dayName = "Воскресенье";
        break;
    default:
        dayName = "Некорректный номер дня";
}

console.log(dayName);

// 6.

const currentMonth = new Date().toLocaleString("en-US", { month: "long" });

if (currentMonth === "July" || currentMonth === "August") {
    console.log("approved");
} else {
    console.log("denied");
}

// 7.
let a = 7;
let b = 4;
let operator = "-";

switch (operator) {
    case "+":
        console.log(a+b);
        break;
    case "-":
        console.log(a-b);
        break;
    case "*":
        console.log(a*b);
        break;
    case "/":
        console.log(a/b);
        break;    
    default:
        console.log("error");
        break;   
}

// 8.
let year = 2026;

if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
    console.log(`${year} - високосный год`)
} else {
    console.log(`${year} - невисокосный год`)
}

// 9.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const ticketPrice = 100;

rl.question('Введите возраст: ', (ageInput) => {
  const age = Number(ageInput);

  rl.question('Вы студент? (да/нет): ', (studentInput) => {
    const isStudent = studentInput.toLowerCase() == 'да';

    let finalPrice = ticketPrice;

    if (age < 2) {
      finalPrice = 0;
    } else if (age < 10) {
      finalPrice = ticketPrice * 0.5;
    } else if (age > 65) {
      finalPrice = ticketPrice * 0.85;
    } else if (isStudent) {
      finalPrice = ticketPrice * 0.9;
    }

    console.log(`Цена билета: ${finalPrice} у.е.`);

    rl.close();
  });
});

// 10.
const wallHeight = 5;

const dayClimb = 3; // Сколько проползает днем
const nightSlide = 2; // Сколько сползает ночью

let currentHeight = 0; // Текущая высота
let days = 0; // Счетчик дней

// --- ДЕНЬ 1 ---
days++;
currentHeight += dayClimb;

if (currentHeight >= wallHeight) {
    console.log(`Улитка доползла за ${days} день.`);
} else {
    currentHeight -= nightSlide;
    console.log(`День ${days}: высота ${currentHeight} м.`);

    // --- ДЕНЬ 2 ---
    days++;
    currentHeight += dayClimb;

    if (currentHeight >= wallHeight) {
        console.log(`Улитка доползла за ${days} дня.`);
    } else {
        currentHeight -= nightSlide;
        console.log(`День ${days}: высота ${currentHeight} м.`);

        // --- ДЕНЬ 3 ---
        days++;
        currentHeight += dayClimb;

        if (currentHeight >= wallHeight) {
            console.log(`Улитка доползла за ${days} дня.`); // Здесь условие выполнится (2 - 2 + 3 = 5)
        } else {
            currentHeight -= nightSlide;
            console.log(`Улитка еще ползет...`);
        }
    }
}

// 11.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Выберите напиток: Американо, Латте, Капучино? ', (userChoiceInput) => {
  const userChoice = userChoiceInput.toLowerCase();

  rl.question('Выберите размер стаканчика: Small, Medium, Large? ', (cupSizeInput) => {
    const cupSize = cupSizeInput.toLowerCase();

    const ingredientBase = "Эспрессо";
    const ingredientWater = "Горячая вода";
    const ingredientMilk = "Молоко";
    const ingredientFoam = "Молочная пенка";

    let coffeeName = "";
    let recipe = "";
    let price = 0;
    let isValidOrder = true; // Флаг для проверки корректности заказа

    // --- Шаг 1: Определение названия и рецепта (зависит от типа кофе) ---
    if (userChoice == "американо") {
        coffeeName = "Американо";
        recipe = `${ingredientBase} + ${ingredientWater}`;
    } else if (userChoice == "латте") {
        coffeeName = "Латте";
        recipe = `${ingredientBase} + ${ingredientMilk} (много) + ${ingredientFoam}`;
    } else if (userChoice == "капучино") {
        coffeeName = "Капучино";
        recipe = `${ingredientBase} + ${ingredientMilk} + ${ingredientFoam} (густая)`;
    } else {
        console.log("Ошибка: Такого кофе нет в меню.");
        isValidOrder = false;
    }

    // --- Шаг 2: Установка цены ---
    // Цены: small = 100, medium = 150, large = 200
    if (cupSize == "small") {
        price = 100;
    } else if (cupSize == "medium") {
        price = 150;
    } else if (cupSize == "large") {
        price = 200;
    } else {
        console.log("Ошибка: Неверный размер стаканчика.");
        isValidOrder = false;
    }

    // --- Шаг 3: Вывод результата ---
    if (isValidOrder) {
        console.log("--- Ваш заказ ---");
        console.log(`Напиток: ${coffeeName}`);
        console.log(`Рецепт: ${recipe}`);
        console.log(`Размер: ${cupSize}`);
        console.log(`Стоимость: ${price} руб.`);
    }

    rl.close();
  });
});

// 12.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Запрашиваем возраст
rl.question('Введите ваш возраст: ', (userAgeInput) => {
  const userAge = Number(userAgeInput);

  // Отсеиваем, если меньше 18
  if (userAge < 18) {
    console.log("⛔ Доступ запрещен: Возрастное ограничение (18+).");
    rl.close(); // Завершаем программу
    return;
  }

  // Возраст подходит, спрашиваем про членство в клубе
  rl.question('Являетесь ли вы членом клуба? (да/нет) ', (clubMemberInput) => {
    const isClubMember = clubMemberInput.trim().toLowerCase() == "да";

    // Члены клуба проходят без условий посещений
    if (isClubMember) {
        console.log("✅ Доступ разрешен: Добро пожаловать, член клуба!");
        rl.close(); // Завершаем программу
    } else {
        rl.question('Сколько мероприятий вы посетили ранее? ', (eventVisitedInput) => {
            const eventVisited = Number(eventVisitedInput);

            if (eventVisited >= 5) {
                console.log("🌟 Доступ разрешен: Выдан специальный VIP-пропуск!");
            } else if (eventVisited >= 3) {
                console.log("✅ Доступ разрешен: Необходимый минимум посещений выполнен.");
            } else {
                console.log(`⛔ Доступ запрещен: Недостаточно посещений (${eventVisited} из 3 необходимых).`);
            }

            rl.close();
        })
    }

  });
});