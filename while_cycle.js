// 1
let i = 9;
let space = 0;
 while (i >= 0) {
    let str = "";
    let s = 0;
    
    while (s < space) {
        str += " ";
        s++;
    }

    let left = i;
    while (left > 0) {
    str += `${left} `;
    left--;
    }

    str += "0";

    let right = 1;
    while (right <= i) {
        str += ` ${right}`;
        right++;
    }

    console.log(str);

    i--;
    space += 2;
    
 }

// 2
let i = 1;
let space = 9;

while (i <= 10) {
    let str = "";
    let ls = 0;

    while (ls < space) {
        str += " ";
        ls++;
    }

    let left = 1;
    while (left <= i) {
        if (left === 10) break;
        str += left;
        left++
    }

    if (i === 10) str+= "0";

    if (i > 1) {
        let right = i - 1;
        while (right > 0) {
            str += right;
            right--;
        }
    }

    let rs = space;
    while (rs > 0) {
        str += " ";
        rs--;
    }
    console.log(str);
    
    space--;
    i++
}
i = 9;
space = 1;

while (i >= 1) {
    let str = "";
    let ls = 0;

    while (ls < space) {
        str += " ";
        ls++;
    }

    let left = 1;
    while (left <= i) {
        str += left;
        left++
    }

    if (i > 1) {
        let right = i - 1;
        while (right > 0) {
            str += right;
            right--;
        }
    }

    let rs = space;
    while (rs > 0) {
        str += " ";
        rs--;
    }
    console.log(str);
    
    space++;
    i--;
}

// 3
let i = 1;
let currNum = 1;
while (i <= 5) {
    let str = "";
    let numsInRow = 0;

    while (numsInRow < i) {
        str += `${currNum} `;
        numsInRow++;
        currNum++;
    }
    console.log(str);
    i++;
}

// 4
let i = 1; 
while (i <= 5) {
    let rowNum = i; 
    let str = '';
    let counter = 4;
    let numsInRow = 0;
    while (numsInRow < i) { 
        str += rowNum + " ";
        rowNum += counter;
        counter--;
        numsInRow++; 
        
    }
    console.log(str);
    i++;
}

// 5
let i = 0;
let str = "Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr";
let newStr = "";
while (i < str.length) {
    newStr += str[i];
    if (str[i+1] === "b" && str[i+2] === "r") {
        i += 3;
    }
    else {
        i++;
    }
}
console.log(newStr);

// 6
const encrypted = (str) => {
    let i = 0;
    let reversedStr = str.split("").reverse().join("");
    let newStr = ""
    while (i < str.length) {
        newStr += reversedStr[i]+str[i];
        i++
    }
    return newStr;
}
const decrypted = (encryptedStr) => {
    let str = "";
    let i = 1;
    while (i < encryptedStr.length) {
        str += encryptedStr[i];
        i += 2;
    }
    return str;
}
console.log(encrypted("You are the best QA ever"));
console.log(decrypted("rYeovue  aArQe  ttsheeb  beehstt  eQrAa  euvoeYr"));

    // CodeWars
// Number with 3 roots
const numWithRoots = (n) => Number.isInteger(Math.pow(n, 1/8)) ? true : false
console.log(numWithRoots(256));

// Coding 3min : Jumping Dutch act
const sc = (n) => {
    let i = 1;
    let str = "";
    while (i < n) {
        str += "Aa~ ";
        i++;
    }
    (n <= 6) ? str += "Pa! Aa!" : str += "Pa!";
    console.log(str);
}
sc(7)

// Draw stairs
const stairsDraw = (n) => {
    let numOfRow = 1;
    while (numOfRow <= n) {
        let str = "";
        let spaces = 1;
        while (spaces < numOfRow) {
            str += " ";
            spaces++;
        }
        str += "I";
        numOfRow++;
        console.log(str);
    }
} 
stairsDraw(7);

// How good are you really?
function betterThanAvg(arr, myScore) {
    let i = 0;
    let avg = 0;
    while (i < arr.length) {
        avg += arr[i];
        i++
    }
    avg += myScore;
    return (avg /= arr.length) < myScore ? true : false;
}
console.log(betterThanAvg([9, 8, 6, 4, 5, 7, 7], 8)); // avg = 6.75, true

// Number of People in the Bus
function passangers(arr) {
    let i = 0;
    arr = arr.flat();
    let passangerCounter = 0;
    while (i < arr.length) {
        let j = i + 1;
        passangerCounter += arr[i];
        passangerCounter -= arr[j];
        i += 2;
    }
    return passangerCounter;
}
console.log(passangers([[5, 0], [2, 1], [0, 2]]));

// Calculate average
const avg = (arr) => {
    let avg = 0;
    let i = 0;
    if (arr.length === 0) return 0;
    while (i < arr.length) {
        avg += arr[i];
        i++;
    }
    avg /= arr.length;
    return avg;
}
console.log(avg([9, 8, 6, 4, 5, 7, 7, 8])); // 6.75

// Simple Fun №152: Invite More Women?
const invite = (arr) => {
    let i = 0;
    let check = 0;
    do {
        check += arr[i];
        i++
    } while (i < arr.length)
    return check > 0 ? true : false;
}
console.log(invite([-1, 1, -1, 1, 1]));

// Convert a Number to a String!
function numToString(num) {
    let number = Math.abs(num);
    let str = "";
    do {
        let n = number % 10;
        str = n + str;
        number = Math.floor(number / 10);
    } while (number > 0)
    return (num > 0) ? str : "-" + str;
}
let result = numToString(-100);
console.log(typeof result);

// Convert a String to a Number!
function strToNum(str) {
    let isNegative = false;
    let num = 0;
    let i = 0;
    if (str[i] === "-") {
        isNegative = true;
        i++;
    }
    while (i < str.length) {
        num += +str[i];
        i++;
        num *= 10;
    }
    if (isNegative) num *= -1;
    num /= 10;
    console.log(num);
    console.log(typeof num);
}
strToNum("1234");

// Training JS #23: methods of arrayObject---push(), pop(), shift() and unshift()4
const infiniteLoop = (arr, d, n) => {
    let flat = arr.flat();
    let moves = n % len;
    let count = 0;

    while (count < moves) {
        if (d === "left") {
            flat.push(flat.shift());
        } else {
            flat.unshift(flat.pop());
        }
        count++;
    }

    let index = 0;
    let i = 0;
    while (i < arr.length) {
        let j = 0;
        while (j < arr[i].length) {
            arr[i][j] = flat[index];
            j++;
            index++
        }
        i++;
    }
    
    return arr;
}
console.log(infiniteLoop([[1,2,3],[4,5,6],[7,8,9]],"left",1));

// Training JS #24: methods of arrayObject---splice() and slice()
const threeInOne = (arr) => {
    let newArr = arr.slice();
    let result = [];
    while (newArr.length > 0) {
        let temp = newArr.splice(0, 3);
        let num = 0;
        let j = 0;
        while (j < temp.length) {
            num += temp[j];
            j++;
        }
        result.push(num);
    }
    return result;
}
console.log(threeInOne([1,2,3,4,5,6])); // [6, 15]

// Training JS #25: methods of arrayObject---reverse() and sort()
const sortIt = (arr) => {
    let i = 0;
    let count = {};
    while (i < arr.length) {
        count[arr[i]] = (count[arr[i]] || 0) + 1;
        i++
    }
    let result = arr.slice();
    result.sort((a, b) => {
        if (count[a] !== count[b]) return count[a] - count[b];
        return b - a;
    })
    return result;
}
console.log(sortIt([1,2,3,4,4,5,5,6,6])); // [3,2,1,6,6,5,5,4,4]


// I love you, a little , a lot, passionately ... not at all
const flowerAnswer = (n) => {
    let num = n % 6;
    switch (num) {
        case 1:
            console.log("I love you");
            break;
        case 2:
            console.log("a little");
            break;
        case 3:
            console.log("a lot");
            break;
        case 4:
            console.log("passionately");
            break;
        case 5:
            console.log("madly");
            break;
        case 6:
            console.log("not at all");
            break;
        default:
            break;
    }
}
flowerAnswer(14);

// Lario and Muigi Pipe Problem
const pipeFix = (...numbers) => {
    let min = numbers[0];
    let max = numbers[numbers.length - 1];
    let result = [];
    
    let current = min;
    while (current <= max) {
        result.push(current);
        current++;
    }
    
    return result.join(", ");
}
console.log(pipeFix(1,3,5,6,7,8));

// esreveR
const reverse = (...args) => {
    let list = (args.length === 1 && Array.isArray(args[0])) ? args[0] : args;
    let i = list.length - 1;
    let result = [];
    while (i >= 0) {
        result.push(list[i]);
        i--;
    }
    console.log(Array.isArray(args[0]) ? result : result.join(', '));
}
reverse([1,3,5,6,7,8])

// Square(n) Sum
const squareSum = (arr) => {
    let i = 0;
    let sum = 0;
    while (i < arr.length) {
        sum += Math.pow(arr[i], 2);
        i++
    }
    return sum;
}
console.log(squareSum([1, 2, 2])); // 9

// Sum of positive
const positiveSum = (arr) => {
    let i = 0;
    let sum = 0;
    while (i < arr.length) {
        if (arr[i] > 0) sum += arr[i];
        i++;
    }
    return sum;
}
console.log(positiveSum([1, -4, 7, 12])); // 20

// Sum even numbers
const evenOfSum = (arr) => {
    if (arr.length === 0) return 0;
    let i = 0;
    let sum = 0;
    while (i < arr.length) {
        if (arr[i] % 2 === 0) sum += arr[i];
        i++;
    }
    return sum;
}
console.log(evenOfSum([4, 3, 1, 2, 5, 10, 6, 7, 9, 8])); // 30

// Sum Arrays
const numbersSum = (arr) => {
    if (arr.length === 0) return 0;
    let i = 0;
    let sum = 0;
    while (i < arr.length) {
        sum += arr[i];
        i++;
    }
    return sum;
}
console.log(numbersSum([1, 5.2, 4, 0, -1])); // 9.2

// Count the Monkeys!
const countMonkeys = (n) => {
    let i = 0;
    let arr = [];
    while (i < n) {
        arr[i] = i + 1;
        i++
    }
    return arr;
}
console.log(countMonkeys(1)); 

// Filling an array (part 1) (retired)
const genArr = (n = 0) => {
    let i = 0;
    let arr = [];
    while (i < n) {
        arr[i] = i;
        i++
    }
    return arr;
}
console.log(genArr(25));
