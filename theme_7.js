// 1. 
class Song {
    constructor(name, author) {
        this._name = name;
        this._author = author;
    }

    get author() {
        return this._author;
    }

    set author(writer) {
        this._author = writer;
    }
}

const mySong = new Song("Yesterday", "The Beatles");
console.log(mySong.author); // The Beatles

// 2.
class Shape {
    constructor(name, sides, sideLength) {
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }

    calcPerimeter() {
        const perimeter = this.sides * this.sideLength;
        console.log(`Perimeter of ${this.name} is ${perimeter}`);
    }
}

const square = new Shape("square", 4, 5);
square.calcPerimeter(); // =20

const triangle = new Shape("triangle", 3, 3);
triangle.calcPerimeter(); // =9

// 3.
class Employee {
    constructor(name, age, position, salary) {
        this.name = name;
        this._age = age;
        this._position = position;
        this._salary = salary;
    }

    // Геттеры
    get age() { return this._age; }
    get position() { return this._position; }
    get salary() { return this._salary; }

    // Сеттеры
    set age(value) { this._age = value; }
    set position(value) { this._position = value; }
    set salary(value) { this._salary = value; }
}

const worker = new Employee("Diana", 26, "QA", 1500);
console.log(worker.position);
worker.position = "AQA";
console.log(worker.position);

// 4.
class Person {
    constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male") {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }

    sayFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    static greetExtraTerrestrials(raceName) {
        return `Welcome to Planet Earth ${raceName}`;
    }
}

const person1 = new Person();
console.log(person1.sayFullName()); // John Doe

const person2 = new Person("Diana", "Prokhorova", 26, "Female");
console.log(person2.sayFullName()); // Diana Prokhorova

console.log(Person.greetExtraTerrestrials("Martians"));

// 5.
class Book {
    constructor(isbn, title, author, year, genre, pages, popularity) {
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.year = year;
        this.genre = genre;
        this.pages = pages;
        this.popularity = popularity;
    }
}

const library = [
    new Book("SK001", "Сияние", "Стивен Кинг", 1977, "Horror", 447, 5),
    new Book("SK002", "Оно", "Стивен Кинг", 1986, "Horror", 1138, 5),
    new Book("MT001", "Приключения Тома Сойера", "Марк Твен", 1876, "Adventure", 274, 5),
    new Book("MT002", "Принц и нищий", "Марк Твен", 1881, "Historical", 192, 4),
    new Book("AP001", "Евгений Онегин", "Александр Пушкин", 1833, "Novel", 224, 5),
    new Book("AP002", "Капитанская дочка", "Александр Пушкин", 1836, "Historical", 200, 5)
];

// a.
library.forEach(book => console.log(book.title));

// b.
const authors = ["Стивен Кинг", "Марк Твен", "Александр Пушкин"];

authors.forEach(author => {
    const authorBooks = library.filter(book => book.author == author);
    if (authorBooks.length > 0) {
        const sortedBooks = authorBooks.sort((a, b) => b.popularity - a.popularity);
        const bestBook = sortedBooks[0];
        console.log(`${author}: "${bestBook.title}" (Рейтинг: ${bestBook.popularity})`);
    }
});

// c.
const sortedByYear = library.slice().sort((a,b) => b.year - a.year);
sortedByYear.forEach(book => console.log(`${book.year}: ${book.title}`));