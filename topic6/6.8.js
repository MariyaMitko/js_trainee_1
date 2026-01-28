const library = [
    // Стивен Кинг
    {
        isbn: "978-0-385-12167-5",
        title: "Сияние",
        author: "Стивен Кинг",
        year: 1977,
        genre: "Ужасы",
        pages: 447,
        rating: 5,
        firstLine: "Джек Торранс думал: Officious little prick."
    },
    {
        isbn: "978-0-670-81302-8",
        title: "Оно",
        author: "Стивен Кинг",
        year: 1986,
        genre: "Ужасы",
        pages: 1138,
        rating: 5,
        firstLine: "Ужас, который жил в Дерри, не был уникальным."
    },
    {
        isbn: "978-0-670-81341-7",
        title: "Мизери",
        author: "Стивен Кинг",
        year: 1987,
        genre: "Триллер",
        pages: 320,
        rating: 4,
        firstLine: "Он проснулся, и первое, что почувствовал — боль."
    },
    {
        isbn: "978-0-670-85803-7",
        title: "Зелёная миля",
        author: "Стивен Кинг",
        year: 1996,
        genre: "Драма",
        pages: 536,
        rating: 5,
        firstLine: "Это случилось в 1932 году, когда тюрьма в Холодной Горе ещё работала."
    },
    {
        isbn: "978-0-385-19148-9",
        title: "Кладбище домашних животных",
        author: "Стивен Кинг",
        year: 1983,
        genre: "Ужасы",
        pages: 374,
        rating: 4,
        firstLine: "Луис Крид впервые увидел кладбище домашних животных в мае."
    },

    // Марк Твен
    {
        isbn: "978-0-486-28061-5",
        title: "Приключения Тома Сойера",
        author: "Марк Твен",
        year: 1876,
        genre: "Приключения",
        pages: 274,
        rating: 5,
        firstLine: "— Том! Нет ответа."
    },
    {
        isbn: "978-0-486-40077-6",
        title: "Приключения Гекльберри Финна",
        author: "Марк Твен",
        year: 1884,
        genre: "Приключения",
        pages: 366,
        rating: 5,
        firstLine: "Вы, наверное, не знаете, кто я такой, если не читали книгу под названием 'Приключения Тома Сойера'."
    },
    {
        isbn: "978-0-553-21158-6",
        title: "Принц и нищий",
        author: "Марк Твен",
        year: 1881,
        genre: "Исторический роман",
        pages: 240,
        rating: 4,
        firstLine: "В древнем городе Лондоне, в некий осенний день второй четверти шестнадцатого столетия, родился мальчик."
    },
    {
        isbn: "978-0-486-41591-6",
        title: "Янки при дворе короля Артура",
        author: "Марк Твен",
        year: 1889,
        genre: "Фантастика",
        pages: 432,
        rating: 3,
        firstLine: "Слово от автора: Необъяснимые законы, которые управляют обстоятельствами..."
    },
    {
        isbn: "978-0-486-26737-1",
        title: "Жизнь на Миссисипи",
        author: "Марк Твен",
        year: 1883,
        genre: "Мемуары",
        pages: 528,
        rating: 3,
        firstLine: "Миссисипи — самая длинная река в мире."
    },

    // Александр Пушкин
    {
        isbn: "978-5-17-098765-4",
        title: "Евгений Онегин",
        author: "Александр Пушкин",
        year: 1833,
        genre: "Роман в стихах",
        pages: 224,
        rating: 5,
        firstLine: "Мой дядя самых честных правил, Когда не в шутку занемог..."
    },
    {
        isbn: "978-5-17-098766-1",
        title: "Капитанская дочка",
        author: "Александр Пушкин",
        year: 1836,
        genre: "Исторический роман",
        pages: 160,
        rating: 5,
        firstLine: "Береги честь смолоду."
    },
    {
        isbn: "978-5-17-098767-8",
        title: "Дубровский",
        author: "Александр Пушкин",
        year: 1833,
        genre: "Роман",
        pages: 128,
        rating: 4,
        firstLine: "Несколько лет тому назад в одном из своих поместий жил старинный русский барин, Кирила Петрович Троекуров."
    },
    {
        isbn: "978-5-17-098768-5",
        title: "Пиковая дама",
        author: "Александр Пушкин",
        year: 1834,
        genre: "Повесть",
        pages: 64,
        rating: 4,
        firstLine: "Однажды играли в карты у конногвардейца Нарумова."
    },
    {
        isbn: "978-5-17-098769-2",
        title: "Борис Годунов",
        author: "Александр Пушкин",
        year: 1831,
        genre: "Драма",
        pages: 144,
        rating: 3,
        firstLine: "Кремлевские палаты (1598 года, 20 февраля)."
    }
];

console.log("=== Все книги в библиотеке ===");
let i = 0;
while (i < library.length) {
    console.log(library[i].title);
    i++;
}

console.log("\n=== Самые популярные книги авторов ===");

let kingBest = library[0];
let j = 0;
while (j < library.length) {
    if (library[j].author === "Стивен Кинг" && library[j].rating > kingBest.rating) {
        kingBest = library[j];
    }
    j++;
}
console.log(`Самая популярная книга Стивена Кинга: "${kingBest.title}" (рейтинг ${kingBest.rating}/5)`);

let twainBest = null;
let k = 0;
while (k < library.length) {
    if (library[k].author === "Марк Твен") {
        if (twainBest === null || library[k].rating > twainBest.rating) {
            twainBest = library[k];
        }
    }
    k++;
}
console.log(`Самая популярная книга Марка Твена: "${twainBest.title}" (рейтинг ${twainBest.rating}/5)`);

let pushkinBest = null;
let m = 0;
while (m < library.length) {
    if (library[m].author === "Александр Пушкин") {
        if (pushkinBest === null || library[m].rating > pushkinBest.rating) {
            pushkinBest = library[m];
        }
    }
    m++;
}
console.log(`Самая популярная книга Александра Пушкина: "${pushkinBest.title}" (рейтинг ${pushkinBest.rating}/5)`);

library.sort(function(a, b) {
    return a.year - b.year;
});

console.log("\n=== Библиотека отсортирована по году выпуска ===");
let n = 0;
while (n < library.length) {
    console.log(`${library[n].year}: "${library[n].title}" - ${library[n].author}`);
    n++;
}