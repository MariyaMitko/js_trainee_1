// 1
let firstName = "Jhon", lastName = "Adams";
console.log(firstName, lastName); // John Adams
firstName = "Brandon", lastName = "Smith";
console.log(firstName, lastName); // Brandon Smith

// 2
{let a; // undefined
let c = 9; // number
let str = "Hi 5!"; // string
let b = true; // boolean
let y = 9 + "1"; // string
let x = "a" / 6; // number
console.log(`${typeof a}
    ${typeof c}
    ${typeof str}
    ${typeof b}
    ${typeof y}
    ${typeof x}`);}
    
// 3
const PI = 3.1428;
const userPassword = "qwerty1234";
console.log(PI, userPassword);

// 4
console.log(( 5 > 10 && 5 < 20 ));
console.log((13 > 10 && 13 < 20));
console.log((10 > 10 && 10 < 20));

// 5
    // a
    {const number = 15;
    const result = number + 5;
    console.log(result);} // выведет 20, т.к. сложение 15+5=20

    // b
    {const number2 = "28";
    const result = number2 + 2;
    console.log(result);} // выведет "282" т.к. оператор '+' преобразовует второй аргумент в строку

    //c
    console.log( null || 2 || undefined ); // выведет 2 т.к. оператор '||' возвращает первое true (null, undefined = false)

    //d
    {const x = 5;
    const y = 10;

    console.log(x > 0 && y < 20); // true, возвращает последний операнд если оба выражения true
    console.log(x < 0 && y > 0); // false, т.к. певрое выражение ложное
    console.log(x < 0 && y < 0); // false --//--
    console.log(x > 0 && "Hello");} // 'Hello', т.к. возвращает последний операнд, если все условия истнны

    // e
    const a = 0;
    const b = "World";

    console.log(a > 0 || b.length > 0); // оператор '||' возврашает первое истинное значение
    console.log(a > 0 || b.length === 0); // false т.к. если все выражения ложные возвращает последний операнд
    console.log(a > 0 || ""); // вернул пустую строку, т.к. все ложные и это последний операнд
    console.log(a < 0 || "Hello"); // вернул "Hello", т.к. непустая строка = true

    // f
    let x = 5;
    let y = 10;
    let z = 15;
    let result = (x > y || y < z) && !(z === x); /* вернет true, т.к. в первой скобке вернет последний операнд, потомучто он true, 
                                                    во второй false и оператор '!' изменит на true */
         
// 6
let age = 18;
let isAdult = age >= 18; // true
let typeOfIsAdult = typeof isAdult; // boolean
console.log(typeOfIsAdult); // выведет boolean

    // CodeWars
// Find variable which breaks strict comparison!
let x = NaN;
console.log(x === x); // выведет false
