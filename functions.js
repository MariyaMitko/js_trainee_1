// 1
// ФУНКЦИЯ checkAnswer() {
//       console.log(“Hello World”)
// };
// Ответ c: function checkAnswer() {}

// 2
function greet(name) {
    if (name === undefined) {
        return "Hello, stranger!";
    }
    else {
        return "Hello, " + name + "!";
    }
}
console.log(greet());
// Ответ a: "Hello, stranger!", т.к. в аргументе не определена переменная name

// 3
function FindLongestString(arr) {
	let longest = "";

	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			const nestedLongest = FindLongestString(arr[i]);

			if (nestedLongest.length > longest.length) {
				longest = nestedLongest;
			}
		} else if (typeof arr[i] === "string") {
			if (arr[i].length > longest.length) {
				longest = arr[i];
			}
		}
	}

	return longest;
}

console.log(FindLongestString(['apple', 'strawberry', ['banana', 'mandarin'], 'grape', ['orange', 'pear']]));}
// Вариант ответа 4:
// Результатом будет 'strawberry', так как это самая длинная строка в массиве.

// 4
// b. Стрелочная функция - это способ определения функции в JavaScript с использованием стрелочного синтаксиса `=>`.

// 5
const nameToConsole = (name) => console.log(`Hello, ${name}!`);
nameToConsole('Alex');

// 6
function calculate(a, b, operator) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
    }
}
console.log(calculate(5, 2, '-'));

// 7
function getGreetings() {
    return ["Hello world!", "!Hola mundo!", "Hallo wereld!", "Пpивeт мир!"];
}
const getGreetings = function() {
    return ["Hello world!", "!Hola mundo!", "Hallo wereld!", "Пpивeт мир!"];
}
const getGreetings = () => ["Hello world!", "!Hola mundo!", "Hallo wereld!", "Пpивeт мир!"];

// 8
const distanceInMeters = [2, 5, 13, 44, 100];

const distanceInFeet = distanceInMeters.map(function(i) {
     return Math.round(i * 3.28084);
});

console.log(distanceInFeet);}    // Вывод: [ 7, 16, 43, 144, 328 ]

// 9
function getRecipe(coffee) {
    if (coffee === "Cappuccino") {
        recipe = "Espresso: 1 shot\nMilk: 100ml–120ml";
    }
    if (coffee === "Americano") {
        recipe = "Espresso: 1 shot\nBoiled water: 120-180ml";
    }
    return recipe;
}

function getPrice(coffee ,sizeOfCup) {
    let price = 0;
    if (coffee === "Cappuccino") {
        if (sizeOfCup === "small") price = 100;
        else if (sizeOfCup === "medium") price = 170;
        else if (sizeOfCup === "large") price = 220;
    }
    if (coffee === "Americano") {
        if (sizeOfCup === "small") price = 80;
        else if (sizeOfCup === "medium") price = 140;
        else if (sizeOfCup === "large") price = 170;
    }
    let coffeeName = coffee
    console.log(`${coffeeName}` + "," + ` recipe:\n${getRecipe(coffee)}` + `\nprice: ${price} cents`);
}

getPrice("Americano", "medium");

// 10
function snailUp(wallHeight, up, down) {
    let currPos = 0;
    let days = 0;
    function upStep(up) {
        currPos += up;
        days++;
    }
    function downStep(down) {
        currPos -= down;
    }
    while (true) {
        upStep(up);
        if (currPos >= wallHeight) return days;
        else downStep(down);
    }
}
console.log(snailUp(5, 3, 2));

// 11
function sum(args) {
    let sum = 0;
    for (const elem of args) {
        if (Number.isFinite(elem)) {
            sum += elem;
        }
    }
    return sum;
}
console.log(sum([1, 2, 3, "4", 100]));

// 12
const longStrings = (arrOfStrings) => arrOfStrings.flat().filter((elem) => elem.length > 5);
console.log(longStrings(['apple', 'strawberry', ['banana', 'mandarin'], 'grape', ['orange', 'pear']]));

