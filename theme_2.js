// // 1
//  let s = "Knowledge of built-in JavaScript methods speeds up a tester`s work.";
// s.charAt(); //или s[0] возвращает символ по индексу
// s.charAt(s.length -1); // вернет последний символ строки - "."
// s.substring(1, 4); // возвращает подстроку начиная с индекса indexA(1) до, но не включая, индекс indexB(4)
// s.slice(-3); // извлекает часть строки и возвращает новую строку с тремя последними символами
// s.indexOf("l"); // возвращает индекс первого появления символа (4)
// s.lastIndexOf("l"); // возвращает индекс последнего появления символа (16)
// s.split("of"); // создаст массив где элементы будут строки до и после появления подстроки "of"
// s.replace("l", "L"); // заменит первый символ на второй, но только при первом появлении символа в строке
// s.replaceAll("l", "L"); // заменит все символы "l" на "L" в строке
// s.toUpperCase(); // переведет строку в верхиний регистр
// s.toLowerCase(); // переведет строку в нижний регистр

// // 2
// const str = " Hello, my name is John ";
// console.log(str.at(2)); // e, может принимать отрицательные значения
// console.log(str.charAt(2)); // e
// console.log(str.charCodeAt(4)); // 108
// console.log(str.concat("Adams")); // объединит две строки в одну
// console.log(str.includes("Hello")); // вернет true, если строка входит в данную
// console.log(str.indexOf("l")); // возвращает индекс первого появления символа (3)
// console.log(str.lastIndexOf("l")); // возвращает индекс последнего появления символа (4)
// console.log(str.padEnd(25, '*')); // дополнит строку в конце до заданной длины символами указанными во втором параметре 
// console.log(str.padStart(25, '*')); // дополнит строку в начале до заданной длины символами указанными во втором параметре
// console.log(str.repeat(2)); // повторит строку указанное кол-во раз
// console.log(str.replace("l", "L")); // заменит первый символ на второй, но только при первом появлении символа в строке
// console.log(str.replaceAll("l", "L")); // заменит все символы "l" на "L" в строке
// console.log(str.slice(1, 6)); // извлекает часть строки и возвращает новую строку
// console.log(str.split(" ")); // вернет массив из подстрок между появлением пробела
// console.log(str.endsWith("hn")); // вернет true, если строка заканчивается на подстроку как в аргументе 
// console.log(str.startsWith("he")); // вернет true, если строка начинается на подстроку как в аргументе 
// console.log(str.substring(1, 6)); // извлекает часть строки и возвращает новую строку, не работает с отриц. символами и при start > end меняет местами
// console.log(str.toUpperCase()); // переводит в верхний регистр
// console.log(str.toLowerCase()); // переводит в нижний регистр
// console.log(str.toString()); // возвращает примитивное значение строки
// console.log(str.trim()); // удаляет пробельные символы
// console.log(str.trimEnd()); // удаляет пробельные символы в конце строки
// console.log(str.trimStart());// удаляет пробельные символы в начале строки

// // 3
// {const monthNumber = 1;
// let result3 = ""; // должна быть обьявлена с использованием let

// switch (monthNumber) {
//      case 1: // тип данных должен быть number
//           result3 = "January";
//           break;
//      case 2: // тип данных должен быть number
//           result3 = "February";
//           break;
//      case 3: // тип данных должен быть number
//           result3 = "March";
//           break; // пропущен break
//      case 4: // тип данных должен быть number
//           result3 = "April";
//           break;
//      case 5:
//           result3 = "May"; // ошибка в названии
//           break;
//      case 6: // пропущено двоеточие
//           result3 = "June"; // должно быть присваивание, а не сравнение
//           break;
//     default: // нет "дэфолтного" значения
//         result3 = "Unknow month";
// }

// console.log(result3);}

// // 4
// {let day = "Monday"; // с маленькой буквы
// let message;

// if (day === "Monday") {
//      message = "It's Monday!";
// } 
// else if (day === "Tuesday") { // ошибка в названии
//      message = "It's Tuesday!";
// } 
// else if (day === "Wednesday") {
//      message = "It's Wednesday!";
// } 
// else if (day === "Thursday") { // с маленькой буквы
//      message = "It's Thursday!";
// } 
// else if (day === "Friday") {
//      message = "It's Friday!";
// } 
// else if (day === "Saturday") {
//      message = "Its Saturday!"; // ошибка в дне
// } 
// else if (day === "Sunday") {
//      message = "It's Sunday!";
// } 
// else {
//      message = "Invalid day!";
// }

// console.log(message);}

// // 5
// {const day = 2;
// let message;

// switch(day) {
//     case 1:
//         message = "Пон";
//         break;
//     case 2:
//         message = "Вт";
//         break;
//     case 3:
//         message = "Ср";
//         break;
//     case 4:
//         message = "Чт";
//         break;
//     case 5:
//         message = "Пт";
//         break;
//     case 6:
//         message = "Сб";
//         break;
//     case 7:
//         message = "Вос";
//         break;
//     default:
//         message = "Unknown day";
// }

// console.log(message);}

// // 6
// const vacationMonth = "June";
// (vacationMonth === "June" || vacationMonth === "August") ? console.log("approved") : console.log("denied");

// // 7
// {let firstNum = -1/5, secondNum = -1, operator = "-";

// switch (operator) {
//     case "*":
//         console.log(firstNum * secondNum);
//         break;
//     case "/":
//         console.log(firstNum / secondNum);
//         break;
//     case "+":
//         console.log(firstNum + secondNum);
//         break;
//     case "-":
//         console.log(firstNum - secondNum);
//         break;
//     default:
//         console.log("Something wrong");
//         break;
// }}

// // 8
// const year = 1456;

// ((year % 4 === 0 && year % 100 !== 0 ) || year % 400 === 0) ? console.log("Високосный") : console.log("Не високосный");

// // 9
// {const age = 20;
// let price = 1000;

// if (age < 2) {
//     price = 0;
// }
// else if (age < 10) {
//     price *= 0.5;
// } 
// else if (age > 65) {
//     price *= 0.85;
// }
// else if (age >= 18 && age <= 22) {
//     price *= 0.9;
// }

// console.log(price);}

// // 10
// let days = 0, position = 0;
// const wallHeight = 5, up = 3, down = 2;
// days++;
// position += up;
// if (position === wallHeight) {
//     console.log(`Добралась за ${days} дня`);
// }
// else {
//     position -= down;
//     days++;
//     position += up;
//     if (position === wallHeight) {
//     console.log(`Добралась за ${days} дня`);
//     }
//     else {
//         position -= down;
//         days++;
//         position += up;
//         if (position === wallHeight) {
//         console.log(`Добралась за ${days} дня`);
//         }
//     }   
// }

// // 11
// const coffe1 = "Cappuccino", coffe2 = "";
// let cupSize = "small", recipe = "";

// if (coffe1) {
//     recipe = "Espresso: 1 shot\nMilk: 100ml–120ml"
//     if (cupSize === "small") {
//         console.log(coffe1 + "," + ` рецепт:\n${recipe}` + "\nцена: 100р");
//     }
//     else if (cupSize === "medium") {
//         console.log(coffe1 + "," + ` рецепт:\n${recipe}` + "\nцена: 170р")
//     }
//     else if (cupSize === "large") {
//         console.log(coffe1 + "," + ` рецепт:\n${recipe}` + "\nцена: 220р")
//     }
// }
// else if (coffe2) {
//     recipe = "Espresso: 1 shot\nBoiled water: 120-180ml";
//     if (cupSize === "small") {
//         console.log(coffe2 + "," + ` рецепт:\n${recipe}` + "\nцена: 80р");
//     }
//     else if (cupSize === "medium") {
//         console.log(coffe2 + "," + ` рецепт:\n${recipe}` + "\nцена: 140р")
//     }
//     else if (cupSize === "large") {
//         console.log(coffe2 + "," + ` рецепт:\n${recipe}` + "\nцена: 170р")
//     }
// }

// // 12
// {let age = 21, memberStatus = "not member", eventsVisited = 10;

// if (age < 18) {
//     console.log("No access");
// }
// else {
//     if (memberStatus.toLowerCase() === "member" || eventsVisited >= 3) {
//         console.log("Welcome!");
//         if (eventsVisited >= 5) {
//             console.log("Get VIP-pass");
//         }
//     }
//     else {
//         console.log("No access");
//     }
// }}

//     // CodeWars
// //Returning Strings;
// const output = function(name){
//    console.log(`Hello, ${name} how are you doing today?`);
// }
// output("Alex");

// //Make a function that does arithmetic!
// function arithmetic(num1, num2, operator) {
//     switch (operator) {
//         case "add":
//             return num1 + num2;
//         case "subtract":
//             return num1 - num2;
//         case "multiply":
//             return num1 * num2;
//         case "divide":
//             return num1 / num2;
//     }
// }
// console.log(arithmetic(5, 2, "divide"));

// // Plural
// function isPlural(num) {
//     if (num > 1) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log(isPlural(3));

// // This is odd
// function isOdd(num) {
//     if (num % 2 !== 0 && (Math.floor(num) - num) === 0 ) return true;
//     else return false;
// }
// console.log(isOdd(-7.1));

// // Abbreviate a Two Word Name
// function abbreviate(str) {
//     let tempStr = str.split(" ");
//     return tempStr[0][0] + "." + tempStr[1][0];
// }
// console.log(abbreviate("Sam Harris"));

// // Exes and Ohs
// function XO(str) {
//     str = str.toLowerCase();
//     let check = 0;
//     for (let char of str) {
//         if (char === "x") 
//             check++;
//         else if (char === "o")
//             check--;
//     }
//     if (!check) return true;
//     else return false;
// }
// console.log(XO("ooxx"));
