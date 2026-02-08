// 1
class Car {
    constructor(model, color, year) {
        this.model = model;
        this.color = color;
        this.year = year;
    }
}

class Zhiguli extends Car{
    placeOfProduction = "Тольятти";
    maxSpeed = 120;
    constructor(model, color, year) {
        super(model, color, year);
    }
}

const zhiguli = new Zhiguli("ВАЗ 2106", "White", 1989);

for (const key in zhiguli) {
    console.log(zhiguli[key]);
}

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

class Square extends Shape{
    constructor(sideLength) {
        super("square", 4, sideLength);
    }

    calcArea() {
        console.log(this.sideLength*this.sideLength);
    }
}
const square = new Square(5);
square.calcPerimeter();
square.calcArea();

// 3
class Human {
    constructor(name, age, interest) {
        this.name = name;
        this.age = age;
        this.interest = interest;
    }

    info() {
        console.log(`Меня зовут ${this.name}, мне ${this.age}. ${this.interest}`);
    }
}
const kate = new Human("Катя", 21, "Люблю кататься на лижах");
kate.info(); // "Меня зовут Катя, мне 21. Люблю кататься на лижах"

const yura = new Human("Юра", 24, "Разбираюсь в машинах");
yura.info(); // "Меня зовут Юра, мне 24. Разбираюсь в машинах"

// 4
class Food {
    static getFood(...args) {
        let [foodType, amount, brand] = args;
        switch(args.length) {
            case 1:
                console.log(`Shepherd Masha eats ${foodType} food.`);
                break;
            case 2:
                console.log(`Poodle Demi eats ${amount} bowls a day of ${foodType} food.`);
                break;
            case 3:
                console.log(`Corgi Henry eats ${amount} bowls a day of ${foodType} food by ${brand}.`);
                break;
            default:
                console.log("All dogs love to eat!");
                break;
        }
    }
}
Food.getFood(); // "All dogs love to eat!"
Food.getFood("dry"); // "Shepherd Masha eats dry food."
Food.getFood("wet", 4); // "Poodle Demi eats 4 bowls a day of wet food."
Food.getFood("wet", 2, "Royal Chanin"); // "Corgi Henry eats 2 bowls a day of wet food by Royal Chanin."

// 5
class User {
    #password;

    constructor(name, password) {
        this.name = name;
        this.#password = password;
    }

    #updatePassword(newPassword) {
        this.#password = newPassword;
    }

    resetPassword(newPassword) {
        this.#updatePassword(newPassword);
    }

    get password() {
        return this.#password;
    }
}

class Admin extends User{
    isAdmin = true;

    constructor(name, password) {
        super(name, password);
    }

    deleteUser(userToDelete) {
        console.log(`Пользователь ${userToDelete} был удален.`);
    }
}
let arr = [new User("Jhon", 12345), new Admin("Alex", "qwerty")];

// 6
class Person {
    role = "unknown";

    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    getRole() {
        console.log(`${this.name}, Роль: ${this.role}`);
        
    }
}

class Student extends Person{
    role = "student";

    constructor(name, age, gender, course, major, gpa) {
        super(name, age, gender);
        this.course = course;
        this.major = major;
        this.gpa = gpa;
    }
}

class Teacher extends Person{
    role = "teacher";
    hours = 44;
    _salary = 800;

    constructor(name, age, gender) {
        super(name, age, gender);
    }

    get salary() {
        return this._salary;
    }
}

class Dean extends Teacher{
    role = "dean";

    constructor(name, age, gender) {
        super(name, age, gender);
    }

    get salary() {
        return super.salary * 2;
    }

    yearBonus() {
        return this.salary;
    }
}

class Principal extends Dean{
    role = "principal";
    hours = 42;

    constructor(name, age, gender) {
        super(name, age, gender);
    }

    get salary() {
        return super.salary * 1.5;
    }

    yearBonus() {
        return this.salary * 2;
    }
}

const biologyTeacher = new Teacher("Светлана Павловна", 38, "Ж");

const scienceDean = new Dean("Николай Борисович", 45, "М");

const schoolPrincipal = new Principal("Виктор Михайлович", 58, "М");

 const school = [
    new Student("Алексей", 19, "М", 1, "Информатика", 3.8),
    new Student("Мария", 20, "Ж", 2, "Экономика", 4.0),
    new Student("Игорь", 22, "М", 4, "Лингвистика", 2.5),
    new Student("Елена", 18, "Ж", 1, "Дизайн", 3.2),
    biologyTeacher,
    scienceDean,
    schoolPrincipal
];

let valedictorian = school.filter(person => person.role === "student").reduce((best, curr) => (curr.gpa > best.gpa ? curr : best));

console.log("Лучший студент школы: " + valedictorian.name);

for (const person of school) {
    person.getRole();
    if (person.role === "principal") {
        console.log(`ЗП: ${person.salary}`);
    }
}

console.log(schoolPrincipal.yearBonus());
