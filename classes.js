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
        return this.age;
    }

    get position() {
        return this.position;
    }

    get salary() {
        return this.salary;
    }

    set age(number) {
        this.age = number;
    }

    set position(role) {
        this.position = role;
    }

    set salary(number) {
        this.salary = number;
    }    
}

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
class Library {
    static library = [
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

    static getAllTitles() {
        for (const el of this.library) {
            console.log(el.title);
        }
    }

    static getMostPopularBooks() {
        const popularBook = this.library.reduce((tempObj, currObj) => {
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
    }

    static sortLibrary() {
        console.log(this.library.sort((a,b) => a.year - b.year));
    }
}
Library.getAllTitles();
Library.getMostPopularBooks();
Library.sortLibrary();