// 1
let сars = {
    car1 : {
        name : "Mercedes-Benz",
        model : "AMG GT",
        year : 2018,
        color : "Grey"
    },
    car2 : {
        name : "BMW",
        model : "M5",
        year : 2019,
        color : "Black"
    },
    car3 : {
        name : "Audi",
        model : "E-tron",
        year : 2022,
        color : "Black"
    },
    car4 : {
        name : "Lamborghini",
        model : "Aventador",
        year : 2017,
        color : "Yellow"
    }
}

// 2
    // a
    let room = {
        height : 3,
        tv : "samsung",
        big : true,
    }

    // b
    for (const key in room) {
        console.log(key);
    }
    
    // c
    console.log(typeof room.big);

    // d
    console.log(room.tv.length);

    // e
    console.log(room.tv.length - 1);

    // f
    room.tv = room.tv.toUpperCase();
    console.log(room.tv);
    
    // g
    room.tv = "LG";
    console.log(room.tv); 

    // h
    room.furniture = ["table", "chair", "sofa"];
    
    // i
    console.log(room.furniture[1]);

    // j
    delete room.big;
    for (const key in room) {
        console.log(key);
    }
    
// 3
const strFromObj = (obj) => console.log(`This ${obj.color} ${obj.name} has ${obj.legs} legs`);
strFromObj({name: "dog", legs: 4, color: "yellow"});

// 4    
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

for (let key in person) {
    console.log(key);
}
// 2. Будут выведены все ключи свойств объекта “person”. For проходит по ключам свойств объекта

// 5
const person = {
name: "John",
age: 30,
occupation: "Engineer",
sayHello: function() {
  		console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}
};

person.sayHello();
// 1. Hello, my name is John and I am 30 years old. Ключевое слово this ссылается на объект и функция получает его свойства

// 6
var developers = [
     { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', age: 29, language: 'Ruby' },
     { firstName: 'Peter', lastName: 'B.', country: 'Poland', age: 48, language: 'Javascript' },
     { firstName: 'Natasha', lastName: 'P.', country: 'Mexico', age: 25, language: 'C#' },
     { firstName: 'Josh', lastName: 'A.', country: 'USA', age: 26, language: 'C#' },
     { firstName: 'Augusto', lastName: 'C.', country: 'Spain', age: 32, language: 'Java' },
     { firstName: 'Lei Mi', lastName: 'S.', country: 'China', age: 52, language: 'Fortran' },
     { firstName: 'Mikey', lastName: 'L.', country: 'New Zealand', age: 30, language: 'Node' }
 ];
let check = false;
for (const elem of developers) {
    for (const key in elem) {
        if (key === "language" && elem[key].toLowerCase() === "javascript") check = true;
    }
}
console.log(check);

// 7
const desserts = [
    { name: "Пирожное", price: 65 },
    { name: "Мороженое", price: 35 },
    { name: "Торт Наполеон", price: 250 },
    { name: "Песочное Печенье", price: 50 },
    { name: "Пудинг", price: 80 },
    { name: "Фруктовый Тарт", price: 40 },
    { name: "Желе Земляничное", price: 40 },
    { name: "Вафли Шоколадные", price: 36 },
    { name: "Булочка с Изюмом", price: 28 }
];
const maxPrice = (desserts) => desserts.reduce((maxObj, currObj) => (currObj.price > maxObj.price) ? currObj : maxObj);
const minPrice = (desserts) => desserts.reduce((minObj, currObj) => (currObj.price < minObj.price) ? currObj : minObj);
console.log(maxPrice(desserts));
console.log(minPrice(desserts));

// 8
const library = [
    // Кинг
    { isbn: 1, title: "Сияние", author: "Стивен Кинг", year: 1977, genre: "Ужасы", pages: 600, rating: 4, firstSentence: "Джек Торранс думал: «Мелкий, заносчивый ублюдок»." },
    { isbn: 2, title: "Оно", author: "Стивен Кинг", year: 1986, genre: "Ужасы", pages: 1248, rating: 5, firstSentence: "Ужас, который не кончался еще добрых двадцать восемь лет, начался с кораблика из газетного листа." },
    { isbn: 3, title: "Мизери", author: "Стивен Кинг", year: 1987, genre: "Психологический триллер", pages: 384, rating: 2, firstSentence: "Сначала были звуки боли." },
    { isbn: 4, title: "Зеленая миля", author: "Стивен Кинг", year: 1996, genre: "Драма", pages: 480, rating: 5, firstSentence: "Это случилось в 1932 году, когда тюрьма штата еще находилась в Колдуин-Маунтин." },
    { isbn: 5, title: "Кэрри", author: "Стивен Кинг", year: 1974, genre: "Мистика", pages: 320, rating: 1, firstSentence: "Никто не видел, как в Кэрри швырнули первый камень." },

    // Твен
    { isbn: 6, title: "Приключения Тома Сойера", author: "Марк Твен", year: 1876, genre: "Приключения", pages: 320, rating: 3, firstSentence: "— Том! Нет ответа." },
    { isbn: 7, title: "Приключения Гекльберри Финна", author: "Марк Твен", year: 1884, genre: "Приключения", pages: 448, rating: 4, firstSentence: "Вы про меня ничего не знаете, если не читали книжки под названием «Приключения Тома Сойера»." },
    { isbn: 8, title: "Принц и нищий", author: "Марк Твен", year: 1881, genre: "Исторический роман", pages: 256, rating: 5, firstSentence: "В старом городе Лондоне в один осенний день родился мальчик в бедной семье Кенти." },
    { isbn: 9, title: "Янки из Коннектикута при дворе короля Артура", author: "Марк Твен", year: 1889, genre: "Сатира", pages: 416, rating: 2, firstSentence: "Я американец, родился и вырос в Хартфорде." },
    { isbn: 10, title: "Таинственный незнакомец", author: "Марк Твен", year: 1916, genre: "Философская сказка", pages: 192, rating: 1, firstSentence: "Это было в 1590 году, зимой." },

    // Пушкин
    { isbn: 11, title: "Евгений Онегин", author: "Александр Пушкин", year: 1833, genre: "Роман в стихах", pages: 224, rating: 5, firstSentence: "Мой дядя самых честных правил, когда не в шутку занемог..." },
    { isbn: 12, title: "Капитанская дочка", author: "Александр Пушкин", year: 1836, genre: "Исторический роман", pages: 288, rating: 3, firstSentence: "Отец мой Андрей Петрович Гринев в молодости своей служил при графе Минихе." },
    { isbn: 13, title: "Пиковая дама", author: "Александр Пушкин", year: 1834, genre: "Повесть", pages: 96, rating: 2, firstSentence: "Однажды играли в карты у конногвардейца Нарумова." },
    { isbn: 14, title: "Руслан и Людмила", author: "Александр Пушкин", year: 1820, genre: "Поэма", pages: 160, rating: 5, firstSentence: "У лукоморья дуб зеленый; златая цепь на дубе том..." },
    { isbn: 15, title: "Дубровский", author: "Александр Пушкин", year: 1841, genre: "Роман", pages: 192, rating: 4, firstSentence: "Несколько лет тому назад в одном из своих поместий жил старинный русский барин Кирила Петрович Троекуров." }
];
    // a
    for (const el of library) {
        console.log(el.title);
    }

    // b
    const popularBook = library.reduce((tempObj, currObj) => {
        let author = currObj.author;
        if (!tempObj[author] || currObj.rating > tempObj[author].rating) {
            tempObj[author] = { 
                title: currObj.title, 
                rating: currObj.rating 
            }
        }
        return tempObj;
    }, {})
    for (const key in popularBook) {
        console.log(`${key}: самая популярная книга — "${popularBook[key].title}" (Рейтинг: ${popularBook[key].rating})`);
        
    }

    // c 
    console.log(library.sort((a,b) => a.year - b.year));
    
    