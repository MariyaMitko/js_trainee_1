// 1.
let max = 9;
let i = max;

while (i >= 0) {
    let str = "";
    let j = i;

    let space = 0;
    while (space < (max - i) * 2) {
        str += " ";
        space++;
    }

    while (j >= 0) {
        str += j + " ";
        j--;
    }

    j = 1;
    while (j <= i) {
        str += j + " ";
        j++;
    }

    console.log(str)
    i--;
}

// 2.
let max = 9; // максимальная цифра
let i = 1; // счетчик строк

// верхняя половина ромба
while (i <= max + 1) {
    let str = "";

    //отступы
    let space = 0;
    while (space < max + 1 - i) {
        str += " ";
        space++;
    }

    // возрастающая часть
    let j = 1;
    if (i == max + 1) {
        while (j <= max) {
            str += j;
            j++;
        }
    } else {
        while (j <= i) {
            str += j;
            j++;
        }
    }

    // убывающая часть
    j = i - 1;
    while (j > 0) {
        if (i == max + 1 && j == max) {
            str += "0";
        } else {
            str += j;
        }
        j--;
    }

    console.log(str);
    i++;
}

// нижняя половина ромба
i = max;
while (i > 0) {
    let str = "";

    //отступы
    let space = 0;
    while (space < max + 1 - i) {
        str += " ";
        space++;
    }

    // возрастающая часть
    let j = 1;
    while (j <= i) {
        str += j;
        j++;
    }

    // убывающая часть
    j = i - 1;
    while (j > 0) {
        str += j;
        j--;
    }

    console.log(str);
    i--;
}

// 3.
let n = 5; // количество строк
let num = 1; // начальная цифра
let i = 1; // счетчик строк

while (i <= n) {
    let str = "";
    let j = 1;
    while (j <= i) { // в i-й строке i цифр
        str += num + " ";
        num++;
        j++;
    }
    console.log(str.trim());
    i++;
}

// 4.
const height = 5; // кол-во строк
let i = 1; // номер строки

// создаем строки от 1 до 5
while (i <= height) {
    let rowStr = "";
    let currentNum = i; // число, которое будем печатать
    let step = height - 1; // шаг прибавления
    let count = 0; // счетчик цифр в строке

    while (count < i) {
        rowStr += currentNum + " ";
        
        currentNum += step;
        step--;
        count++;
    }

    console.log(rowStr);
    i++;
}

// 5.
let encryptedText = "Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr";
let decryptedText = encryptedText;

// удаляем комбинацию "br"
while (decryptedText.includes("br")) {
    // заменяем "br" на пустую строку
    decryptedText = decryptedText.replace("br", "");
}

console.log(decryptedText); 

// 6.
const originalText = "Secret Message";
const key = 5; // сдвиг

let encryptedText = "";
let i = 0;

while (i < originalText.length) {
    // код символа
    let charCode = originalText.charCodeAt(i);

    // сдвигаем код и превращаем в символ
    let newChar = String.fromCharCode(charCode + key);
    
    // добавляем новый символ в начало строки
    encryptedText = newChar + encryptedText;
    
    i++;
}

console.log(`Зашифровано: ${encryptedText}`); 

// дешифратор
let decryptedText = "";
let j = 0;

while (j < encryptedText.length) {
    let charCode = encryptedText.charCodeAt(j);
    
    let originalChar = String.fromCharCode(charCode - key);
    
    decryptedText = originalChar + decryptedText;
    
    j++;
}

console.log(`Расшифровано: ${decryptedText}`);