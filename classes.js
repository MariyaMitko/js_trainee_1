// 1
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
console.log(new Song("Cruel Summer", "Taylor Swift").author);

// 2
class Shape {
    constructor (name, sides, sideLength) {
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }

    calcPerimeter() {
        console.log(this.sideLength*this.sides);
    }
}
const square = new Shape("square", 4, 5);
square.calcPerimeter();

const triangle = new Shape("triangle", 3, 3);
triangle.calcPerimeter();

// 3
class Employee {
    constructor(name, age, position, salary) {
        this.name = name;
        this.age = age;
        this.position = position;
        this.salary = salary;
    }

    get age() {
        return this._age;
    }

    get position() {
        return this._position;
    }

    get salary() {
        return this._salary;
    }

    set age(number) {
        this._age = number;
    }

    set position(role) {
        this._position = role;
    }

    set salary(number) {
        this._salary = number;
    }    
}

const emplyee = new Employee("Alex", 29, "AQA Engineer", 1000);
console.log(emplyee.age);
emplyee.age = 40;
console.log(emplyee.age);
console.log(emplyee.salary);
console.log(emplyee._salary);

// 4
class Person {
    constructor(firstName = "Jhon", lastName = "Doe", age = 0, gender = "Male") {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }

    sayFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    static greetExtraTerrestrials(raceName) {
        console.log(`Welcome to Planet Earth ${raceName}`);
        
    }
}
console.log(new Person().sayFullName());
Person.greetExtraTerrestrials("Martians");

// 5
class Book {
    constructor(isbn, title, author, year, genre, pages, rating, firstSentence) {
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.year = year;
        this.genre = genre;
        this.pages = pages;
        this.rating = rating;
        this.firstSentence = firstSentence;
    }
}

class Library {
    static books = [
        new Book(1, "Сияние", "Стивен Кинг", 1977, "Ужасы", 600, 4, "Джеку снился отель."),
        new Book(2, "Оно", "Стивен Кинг", 1986, "Ужасы", 1248, 5, "Кораблик плыл по канаве."),
        new Book(6, "Том Сойер", "Марк Твен", 1876, "Приключения", 320, 3, "— Том!"),
        new Book(8, "Принц и нищий", "Марк Твен", 1881, "Исторический роман", 256, 5, "Родился мальчик."),
        new Book(11, "Евгений Онегин", "Александр Пушкин", 1833, "Роман в стихах", 224, 5, "Мой дядя..."),
        new Book(12, "Капитанская дочка", "Александр Пушкин", 1836, "Исторический роман", 288, 3, "Отец мой...")
    ];

    static getAllTitles() {
        this.books.forEach(b => console.log(b.title));
    }

    static getMostPopularBooks() {
        const popular = this.books.reduce((acc, book) => {
            if (!acc[book.author] || book.rating > acc[book.author].rating) {
                acc[book.author] = { title: book.title, rating: book.rating };
            }
            return acc;
        }, {});

        for (const author in popular) {
            const info = popular[author];
            console.log(`${author}: лучшая — "${info.title}" (${info.rating})`);
        }
    }

    static sortLibrary() {
        console.log([...this.books].sort((a, b) => a.year - b.year));
    }
}

Library.getAllTitles();
Library.getMostPopularBooks();
Library.sortLibrary();
