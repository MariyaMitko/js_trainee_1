// 1.
const cars = {
  car1: {
    name: "Hyundai",
    model: "Santa Fe",
    year: 2023,
    color: "silver"
  },
  car2: {
    name: "Audi",
    model: "Q7",
    year: 2023,
    color: "black"
  },
  car3: {
    name: "BMW",
    model: "X7",
    year: 2023,
    color: "white"
  },
  car4: {
    name: "Mercedes",
    model: "GLE",
    year: 2023,
    color: "blue"
  }
};

console.log(cars);

// 2.
// a
let room = {
    height: 3,
    tv: "samsung",
    big: true
}
// b
console.log(room.height);
console.log(room.tv);
console.log(room.big);

// c
console.log(typeof room.big);

// d
console.log(room.tv.length);

// e
console.log(room.tv.length - 1);

// f
console.log(room.tv.toLocaleUpperCase());

// g
room.tv = "LG";

// h
room.furniture = ["table", "chair", "sofa"];

// i
console.log(room.furniture[1]);

// j
delete room.big;

console.log(room);

// 3.
function describeAnimal(animal){
    return `This ${animal.color} ${animal.name} has ${animal.legs} legs.`
}

console.log(describeAnimal({name: "dog", legs: 4, color: "yellow"}))

// 6.
var developers = [
     { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', age: 29, language: 'Ruby' },
     { firstName: 'Peter', lastName: 'B.', country: 'Poland', age: 48, language: 'Javascript' },
     { firstName: 'Natasha', lastName: 'P.', country: 'Mexico', age: 25, language: 'C#' },
     { firstName: 'Josh', lastName: 'A.', country: 'USA', age: 26, language: 'C#' },
     { firstName: 'Augusto', lastName: 'C.', country: 'Spain', age: 32, language: 'Java' },
     { firstName: 'Lei Mi', lastName: 'S.', country: 'China', age: 52, language: 'Fortran' },
     { firstName: 'Mikey', lastName: 'L.', country: 'New Zealand', age: 30, language: 'Node' }
 ];

for (let key in developers) {
    if (developers[key].language == "Javascript") {
        console.log(true);
        break; // если хотя бы один нашли, цикл остановили
    }
}

// 7.
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

let cheapest = desserts[0];
let mostExpensive = desserts[0];

for (let key in desserts) {
    if (desserts[key].price > cheapest.price) {
        cheapest = desserts[key];
    }
    if (desserts[key].price < mostExpensive.price) {
        mostExpensive = desserts[key];
    }
}

console.log("Самый дешёвый десерт:", cheapest.name, "-", cheapest.price, "руб.");
console.log("Самый дорогой десерт:", mostExpensive.name, "-", mostExpensive.price, "руб.");

// 8.
const library = [
    // Стивен Кинг
    { isbn: "SK001", title: "Сияние", author: "Стивен Кинг", year: 1977, genre: "Horror", pages: 447, popularity: 5, firstLine: "Джек Торренс собирался ехать в отель." },
    { isbn: "SK002", title: "Оно", author: "Стивен Кинг", year: 1986, genre: "Horror", pages: 1138, popularity: 5, firstLine: "Оно вернулось в Дерри через 27 лет." },
    { isbn: "SK003", title: "Кэрри", author: "Стивен Кинг", year: 1974, genre: "Horror", pages: 199, popularity: 4, firstLine: "Кэрри Уайт была девушкой необычной." },
    { isbn: "SK004", title: "Мизери", author: "Стивен Кинг", year: 1987, genre: "Thriller", pages: 320, popularity: 4, firstLine: "Пол Шелдон был известным писателем." },
    { isbn: "SK005", title: "Темная Башня: Стрелок", author: "Стивен Кинг", year: 1982, genre: "Fantasy", pages: 224, popularity: 5, firstLine: "Стрелок шёл по пустынной земле." },

    // Марк Твен
    { isbn: "MT001", title: "Приключения Тома Сойера", author: "Марк Твен", year: 1876, genre: "Adventure", pages: 274, popularity: 5, firstLine: "Том Сойер жил на берегу реки Миссисипи." },
    { isbn: "MT002", title: "Приключения Гекльберри Финна", author: "Марк Твен", year: 1884, genre: "Adventure", pages: 366, popularity: 5, firstLine: "Гек Финн сбежал от своей тиранической семьи." },
    { isbn: "MT003", title: "Принц и нищий", author: "Марк Твен", year: 1881, genre: "Historical", pages: 192, popularity: 4, firstLine: "В Лондоне родились два мальчика одинакового возраста." },
    { isbn: "MT004", title: "Янки из Коннектикута при дворе короля Артура", author: "Марк Твен", year: 1889, genre: "Satire", pages: 350, popularity: 3, firstLine: "Янки из Коннектикута оказался в средневековой Англии." },
    { isbn: "MT005", title: "Жизнь на Миссисипи", author: "Марк Твен", year: 1883, genre: "Memoir", pages: 624, popularity: 4, firstLine: "Река Миссисипи всегда манила меня." },

    // Александр Сергеевич Пушкин
    { isbn: "AP001", title: "Евгений Онегин", author: "Александр Сергеевич Пушкин", year: 1833, genre: "Novel in verse", pages: 224, popularity: 5, firstLine: "Мой дядя самых честных правил..." },
    { isbn: "AP002", title: "Капитанская дочка", author: "Александр Сергеевич Пушкин", year: 1836, genre: "Historical", pages: 200, popularity: 5, firstLine: "В то время как в деревне шла буря..." },
    { isbn: "AP003", title: "Борис Годунов", author: "Александр Сергеевич Пушкин", year: 1825, genre: "Drama", pages: 120, popularity: 4, firstLine: "Как страшно жить во времена смуты!" },
    { isbn: "AP004", title: "Руслан и Людмила", author: "Александр Сергеевич Пушкин", year: 1820, genre: "Poem", pages: 150, popularity: 4, firstLine: "У Лукоморья дуб зелёный..." },
    { isbn: "AP005", title: "Повести покойного Ивана Петровича Белкина", author: "Александр Сергеевич Пушкин", year: 1831, genre: "Short stories", pages: 180, popularity: 3, firstLine: "В деревне однажды случилась история..." }
];

// a. Выводим названия всех книг
console.log("Все книги в библиотеке:");
for (let book of library) {
    console.log(book.title);
}

// b. Самая популярная книга каждого автора
const authors = ["Стивен Кинг", "Марк Твен", "Александр Сергеевич Пушкин"];
console.log("\nСамая популярная книга каждого автора:");
for (let author of authors) {
    let booksByAuthor = library.filter(book => book.author === author);

    let maxPopularity = Math.max(...booksByAuthor.map(book => book.popularity));

    let popularBook = booksByAuthor.find(book => book.popularity === maxPopularity);
    console.log(`${author}: "${popularBook.title}" (популярность: ${popularBook.popularity})`);
}

// c. Сортируем библиотеку по году выпуска
library.sort((a, b) => a.year - b.year);
console.log("\nБиблиотека, отсортированная по году выпуска:");
for (let book of library) {
    console.log(`${book.year} - ${book.title} (${book.author})`);
}