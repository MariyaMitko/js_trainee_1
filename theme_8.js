// 1.
class Car {
    constructor(model, color, year) {
        this.model = model;
        this.color = color;
        this.year = year;
    }
}

class Zhiguli extends Car {
    constructor(model, color, year, manufacturePlace, maxSpeed) {
        super(model, color, year);
        this.manufacturePlace = manufacturePlace;
        this.maxSpeed = maxSpeed;
    }

    printInfo() {
        console.log(`Модель: ${this.model}`);
        console.log(`Цвет: ${this.color}`);
        console.log(`Год: ${this.year}`);
        console.log(`Производство: ${this.manufacturePlace}`);
        console.log(`Макс. скорость: ${this.maxSpeed} км/ч`);
    }
}

const myCar = new Zhiguli("ВАЗ-2101", "Красный", 1975, "Тольятти", 140);
myCar.printInfo();

// 2.
class Shape {
    constructor(name, sides, sideLength) {
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }

    calcPerimeter() {
        const perimeter = this.sides * this.sideLength;
        console.log(`Периметр фигуры: ${perimeter}`);
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super("square", 4, sideLength); 
    }

    calcArea() {
        const area = this.sideLength * this.sideLength; 
        console.log(`Площадь квадрата: ${area}`);
    }
}

const mySquare = new Square(10);
mySquare.calcPerimeter(); // =40
mySquare.calcArea(); // =100

// 3.
class Human {
    constructor(name, age, interest) {
        this.name = name;
        this.age = age;
        this.interest = interest;
    }

    info() {
        return `${this.name}, возраст: ${this.age}, увлекается: ${this.interest}.`;
    }
}

const katya = new Human("Катя", 25, "рисованием");
const yura = new Human("Юра", 30, "футболом");

console.log(katya.info()); 
console.log(yura.info());

// 4.
class Dog {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }

    getFood(foodType, amount, brand) {
        if (foodType && amount && brand) {
            console.log(`${this.breed} ${this.name} eats ${amount} bowls a day of ${foodType} food by ${brand}.`);
        }
        else if (foodType && amount) {
            console.log(`${this.breed} ${this.name} eats ${amount} bowls a day of ${foodType} food.`);
        }
        else if (foodType) {
            console.log(`${this.breed} ${this.name} eats ${foodType} food.`);
        }
        else {
            console.log("All dogs love to eat!");
        }
    }
}

// метод без аргументов
const genericDog = new Dog("Dog", "Some");
genericDog.getFood(); // "All dogs love to eat!"

// метод с foodType
const masha = new Dog("Masha", "Shepherd");
masha.getFood("dry"); // "Shepherd Masha eats dry food."

// метод с foodType и количеством
const demi = new Dog("Demi", "Poodle");
demi.getFood("wet", 2); // "Poodle Demi eats 2 bowls a day of wet food."

// метод с foodType, количеством и брендом
const henry = new Dog("Henry", "Corgi");
henry.getFood("dry", 3, "Royal Canin"); // "Corgi Henry eats 3 bowls a day of dry food by Royаl Canin."

// 5.
class User {
    #password; 

    constructor(username, password) {
        this.username = username;
        this.#password = password;
    }

    #updatePassword(newPassword) {
        this.#password = newPassword;
    }

    resetPassword(newPassword) {
        this.#updatePassword(newPassword);
    }
}

class Admin extends User {
    constructor(username, password) {
        super(username, password);
        this.isAdmin = true;
    }

    deleteUser(userToDelete) {
        return `Пользователь ${userToDelete} был удален.`;
    }
}

const testUser = new User("guest123", "pass1");
const testAdmin = new Admin("adminRoot", "adminPass");

testUser.resetPassword("newPass2025");
console.log(testAdmin.deleteUser("guest123"));

const result = [testUser, testAdmin];
console.log(result);

// 6.
class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    getInfo() {
        return `${this.name} (${this.age} лет, ${this.gender})`;
    }
}

class Student extends Person {
    constructor(name, age, gender, course, major, gpa) {
        super(name, age, gender);
        this.course = course;
        this.major = major;
        this.gpa = gpa;
    }

    getInfo() {
        return `Студент: ${super.getInfo()}, Курс: ${this.course}, Балл: ${this.gpa}`; 
    }
}

// класс для всех, кто получает ЗП
class Employee extends Person {
    constructor(name, age, gender, baseSalary, hours) {
        super(name, age, gender);
        this.baseSalary = baseSalary;
        this.hours = hours;
    }
    
    calculateTotalPay() {
        return this.baseSalary;
    }
}

class Teacher extends Employee {
    constructor(name, age, gender, salary, hours) {
        super(name, age, gender, salary, hours);
        this.position = "Учитель";
    }
    
    getInfo() {
        return `${this.position}: ${super.getInfo()}, Зарплата: ${this.baseSalary}`;
    }
}

class Decan extends Teacher {
    constructor(name, age, gender, teacherBaseSalary, hours) {
        const decanSalary = teacherBaseSalary * 2; 
        super(name, age, gender, decanSalary, hours);
        this.position = "Декан";
        this.bonus = decanSalary;
    }

    calculateTotalPay() {
        return this.baseSalary + this.bonus;
    }
}

class Director extends Employee {
    constructor(name, age, gender, decanSalary, hours) {
        const directorSalary = decanSalary * 1.5;
        super(name, age, gender, directorSalary, hours);
        this.position = "Директор";
        this.bonus = directorSalary * 2;
    }

    calculateTotalPay() {
        return this.baseSalary + this.bonus;
    }

    getInfo() {
        return `${this.position}: ${super.getInfo()}, Итоговая выплата: ${this.calculateTotalPay()}`;
    }
}

// === СОЗДАНИЕ ДАННЫХ ===

// Базовая ставка учителя
const teacherRate = 2500;

// Создаем учителей
const teacher1 = new Teacher("Мария Ивановна", 45, "Ж", teacherRate, 40);
const teacher2 = new Teacher("Олег Петрович", 38, "М", teacherRate, 35);

// Создаем декана
const decan = new Decan("Виктор Сергеевич", 55, "М", teacherRate, 40);

// Создаем директора
const director = new Director("Елена Николаевна", 60, "Ж", decan.baseSalary, 20);

// Создаем студентов
const students = [
    new Student("Алекс", 20, "М", 2, "CS", 3.5),
    new Student("Белла", 19, "Ж", 1, "Art", 3.8),
    new Student("Чарли", 21, "М", 3, "Physics", 4.0),
    new Student("Диана", 22, "Ж", 4, "Math", 3.9)
];

// === ВЫВОД РЕЗУЛЬТАТОВ ===

console.log("--- Персонал школы ---");

const staff = [teacher1, teacher2, decan, director];

staff.forEach(person => {
    console.log(`${person.position}: ${person.name}`);
});

console.log("\n--- Финансы Директора ---");

console.log(`Директор ${director.name} получает всего: ${director.calculateTotalPay()} (ЗП: ${director.baseSalary} + Бонус: ${director.bonus})`);

console.log("\n--- Valedictorian (Лучший студент) ---");

let [bestStudent] = students;

for (let i = 1; i < students.length; i++) {
    if (students[i].gpa > bestStudent.gpa) {
        bestStudent = students[i];
    }
}

console.log(`Valedictorian: ${bestStudent.name} (GPA: ${bestStudent.gpa})`);