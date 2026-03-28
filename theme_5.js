// 5.
function greet(name) {
  console.log("Привет, " + name + "!");
}

greet("Диана"); // Привет, Диана!

// 6.
function calculate(a, b, operator)
{
   switch (operator) {
    case "*":
      return a * b;

    case "/":
      if (b === 0) {
        return "Ошибка: деление на ноль";
      }
      return a / b;

    case "-":
      return a - b;

    case "+":
      return a + b;

    default:
      return "Неизвестная операция";
  }
}

console.log(calculate(5, 3, "+")); // 8

// 7.
// function declaration
function getGreetings() {
  return [
    "Hello world!",
    "!Hola mundo!",
    "Hallo wereld!",
    "Привет мир!"
  ];
}

console.log(getGreetings());

// function expression
const getGreetings = function() {
  return [
    "Hello world!",
    "!Hola mundo!",
    "Hallo wereld!",
    "Привет мир!"
  ];
};

console.log(getGreetings());

// arrow function
const getGreetingsArrow = () => [
  "Hello world!",
  "!Hola mundo!",
  "Hallo wereld!",
  "Привет мир!"
];

console.log(getGreetingsArrow());

// 9.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const ingredientBase = "Эспрессо";
const ingredientWater = "Горячая вода";
const ingredientMilk = "Молоко";
const ingredientFoam = "Молочная пенка";

// ф-я для получения рецепта кофе
function getRecipe(coffeeType) {
  if (coffeeType == "американо") {
    return `${ingredientBase} + ${ingredientWater}`;
  } else if (coffeeType == "латте") {
    return `${ingredientBase} + ${ingredientMilk} (много) + ${ingredientFoam}`;
  } else if (coffeeType == "капучино") {
    return `${ingredientBase} + ${ingredientMilk} + ${ingredientFoam} (густая)`;
  } else {
    return null; // не существует
  }
}

// ф-я для расчёта цены по размеру
function getPrice(cupSize) {
  if (cupSize == "small") return 100;
  if (cupSize == "medium") return 150;
  if (cupSize == "large") return 200;
  return null;
}

// основа
rl.question('Выберите напиток: Американо, Латте, Капучино? ', (userChoiceInput) => {
  const userChoice = userChoiceInput.toLowerCase();

  rl.question('Выберите размер стаканчика: Small, Medium, Large? ', (cupSizeInput) => {
    const cupSize = cupSizeInput.toLowerCase();

    const recipe = getRecipe(userChoice);
    const price = getPrice(cupSize);

    if (!recipe) {
      console.log("Ошибка: Такого кофе нет в меню.");
    } else if (!price) {
      console.log("Ошибка: Неверный размер стаканчика.");
    } else {
      console.log("\n--- Ваш заказ ---");
      console.log(`Напиток: ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)}`);
      console.log(`Рецепт: ${recipe}`);
      console.log(`Размер: ${cupSize.charAt(0).toUpperCase() + cupSize.slice(1)}`);
      console.log(`Стоимость: ${price} руб.`);
    }

    rl.close();
  });
});

// 10.
function snailClimb(totalHeight, dayClimb, nightSlide) {
  // ф-я для расчета прогресса
  function progress(currentHeight) {
    return currentHeight + dayClimb - nightSlide;
  }

  let currentHeight = 0;
  let days = 0;

  while (currentHeight < totalHeight) {
    days++;
    
    if (currentHeight + dayClimb >= totalHeight) {
      currentHeight = totalHeight;
      break;
    } else {
      currentHeight = progress(currentHeight);
    }
  }

  return days;
}

// параметры
const wallHeight = 5;
const climbPerDay = 3;
const slidePerNight = 2;

const daysNeeded = snailClimb(wallHeight, climbPerDay, slidePerNight);
console.log(`Улитка доползет до вершины за ${daysNeeded} дней.`);

// 11.
function sumNumbers(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") {
      sum += arr[i];
    }
  }

  return sum;
}

const array = [1, 2, "hello", 3, true, 4];
console.log(sumNumbers(array)); // 10

// 12.
function filterLongStrings(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "string" && arr[i].length > 5) {
      result.push(arr[i]);
    }
  }

  return result;
}

const words = ["apple", "banana", "kiwi", "strawberry", "pear"];
console.log(filterLongStrings(words)); // ["banana", "strawberry"]
