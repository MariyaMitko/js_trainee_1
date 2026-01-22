// 1
// const testerPositions = [
//     "Quality Assurance Engineer",
//     "Software Tester",
//     "Test Automation Engineer",
//     "Quality Analyst",
//     "QA Tester",
//     "Test Engineer",
//     "Quality Control Analyst",
// ];
// testerPositions.push("SDET", "Lead SDET")
// console.log(testerPositions);

// 2
// {const arr = [1, 2, 3, "a", "b", "c"];
// arr.at(); // выводит элемент по номеру индекса
// arr.push(); // добавляет элемент в конец массива
// arr.unshift(); // добавляет в начало массива
// arr.pop(); // удаляет элемент из конца массива
// arr.shift(); // удаляет элемент из начала массива
// arr.join(); // создает строку из элементов массива с указанным раздилителем
// arr.indexOf(); // возвращает индекс элемента
// arr.lastIndexOf(); // возвращает индекс последнего вхождения элемента в массив
// arr.includes(); // проверяет входит ли в массив аргумент
// arr.flat(); // создает новый массив с "разглаженными" элементами из массивов внутри текущего
// arr.concat(); // исп-ся для добавления новых значений и объединения массивов
// arr.reverse(); // разворачивает масиив в обратном порядке
// arr.slice(); // возвращает новый массив из части старого
// arr.splice(); //  удаляет, заменяет или добавляет элементы в любом месте массива
// arr.copyWithin();} // копирует часть массива в другое место того же массива

// 3
// {arr.toString(); // возвращает строковое представление массива
// arr.at() // вернет элемент по индексу, отрицательный индекс ведет отсчет с конца
// arr.push() // добавляет элемент в конец массива
// arr.unshift() // добавляет элемент в начало массива
// arr.pop() // удаляет элемент из конца массива
// arr.shift(); // удаляет элемент из начала массива
// arr.join(); // создает строку из элементов массива с указанным раздилителем
// arr.indexOf(); // возвращает индекс элемента
// arr.lastIndexOf(); // возвращает индекс последнего вхождения элемента в массив
// arr.includes(); // проверяет входит ли в массив аргумент
// arr.flat(); // создает новый массив с "разглаженными" элементами из массивов внутри текущего
// arr.concat(); // исп-ся для добавления новых значений и объединения массивов
// arr.reverse(); // разворачивает масиив в обратном порядке
// arr.slice(); // возвращает новый массив из части старого
// arr.splice(); //  удаляет, заменяет или добавляет элементы в любом месте массива
// arr.copyWithin(); // копирует часть массива в другое место того же массива
// arr.find(); // используется для поиска первого элемента в массиве, который удовлетворяет заданному условию
// arr.findIndex(); // возвращает индекс элемента в массиве
// arr.forEach(); // применяет callback к каждому элементу массива
// arr.map(); // создает новый массив, наполняя его результатами вызова функции для каждого элемента исходного массива
// arr.reduce(); // собирает все значения в одно
// arr.filter(); }// создает новый массив, в который попадают только те элементы, которые удовлетворяют условию

// 4
// {let arr =  ['(', ')', '(', ')', '{', '(', '}', ')', 2, 'a'];
// function havePair(arr) {
//     let controlSum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         switch (arr[i]) {
//             case "(":
//                 controlSum++;
//                 break;
//             case ")":
//                 controlSum--;    
//                 break;
//             case "{":
//                 controlSum += 2;
//                 break;
//             case "}":
//                 controlSum -= 2;
//                 break;
//             default:
//                 break;
//         }
//     }
//     if (controlSum === 0) console.log(true);
//     else console.log(false);
// }
// havePair(arr);}

//5
// {let arr = [4, 81, 3, -12, 99, 14];
// let min = arr[0];
// for (let elem of arr) {
//     if (elem < min)
//         min = elem;
// }
// console.log(min);
// }

//6
// {let arr = [4, 81, 3, -12, 99, 14];
// let max = arr[0];
// for (let elem of arr) {
//     if (elem > max)
//         max = elem;
// }
// console.log(max);}

// 7
// {let arr = [[1, 2], [3, 4, 5], [6, 7, 8], 9, [10], [0, 11], "Hello"];
// arr = arr.flat();
// let sum = 0;
// for (let elem of arr) {
//     if (typeof elem === "number") {
//         sum += elem;
//     }
// }
// console.log(sum);}

// 8
// {for (let i = 2; i <= 10; i++ ) {
//     if (i % 2 == 0) console.log(i);
// }}

// 9
// {
//     let days = 1, position = 0;
//     const wallHeight = 5, up = 3, down = 2;
//     for (days; ;days++) {
//         position += up;
//         if (position >= wallHeight) {
//             console.log(days); 
//             break;
//         }
//         position -=down;
//     }
// }

// 10
// {
//     for (let i = 1; i <= 3; i++) {
//         let str = "";
//         for (let j = 1; j <= 3 - i; j++) {
//             str += " ";
//         }
//         for (let k = 1; k <= 2 * i - 1; k++) {
//             str += "*";
//         }
//         console.log(str);
//     }
//     for (let i = 2; i >= 1; i--) {
//         let str = "";
//         for (j = 1; j <= 3 - i; j++) {
//             str += " ";
//         }
//         for (let k = 1; k <= 2 * i - 1; k++) {
//             str += "*";
//         }
//         console.log(str);
//     }
// }

// 11
// {
//     for (let i = 1; i <= 5; i++) {
//         let str = "";
//         for (let j = 1; j <= 2 * i - 1; j++) {
//             str += "*";
//         }
//         console.log(str);
//     }
// }

//12
// {
//     for (let i = 10; i >= 1; i--) {
//         let str = "0";
//         for (let j = 1; j < i; j++) {
//             str += ` ${j}`;
//         }
//         console.log(str);
//     }
// }

// 13
// {
//     for (let i = 10; i >= 1; i--) {
//         let str = "";
//         for (let j = 0; j < 2 * (10 - i); j++) {
//             str += " ";
//         }
//         str += 0;
//         for (let k = 1; k < i; k++) {
            
//             str += ` ${k}`;
//         }
//         console.log(str);
        
//     }
// }

// 14
// {
//     const numbers = [1, 2, 3, 4, 5];
//     let sum = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         if (i % 2 !== 0) {
//             sum += numbers[i];
//         }
//     }
//     console.log(sum);

// }

    //CodeWars
// Highest and Lowest
// function highAndLow(str) {
//     str = str.split(" ").map(Number);
//     let max = str[0], min = str[0];
//     for (let elem of str) {
//         if (elem < min) min = elem;
//         if (elem > max) max = elem;
//     }
//     return `${max} ${min}`;
// }
// console.log(highAndLow("1 2 -3 4 5"));

// String repeat
// function repeatStr(n, s) {
//   return s.repeat(n);
// }

// Find the smallest integer in the array
// function minNum(arr) {
//     return arr.reduce((min, currVal) => currVal < min ? currVal : min);
// }
// console.log(minNum([34, -345, -1, 100]));

// If you can't sleep, just count sheep!!
// function countSheep(num) {
//     let str = "";
//     for (let i = 1; i <= num; i++) {
//         str += `${i} sheeep...`;
//     }
//     return str;
// }
// console.log(countSheep(3));
