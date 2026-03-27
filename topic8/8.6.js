class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    getRole() {
        return "Person";
    }
}

class Student extends Person {
    constructor(name, age, gender, year, major, gpa) {
        super(name, age, gender);
        this.year = year;
        this.major = major;
        this.gpa = gpa; // от 1 до 4
    }

    getRole() {
        return "Student";
    }
}

class Teacher extends Person {
    constructor(name, age, gender, salary, workingHours) {
        super(name, age, gender);
        this.salary = salary;
        this.workingHours = workingHours;
    }

    getSalary() {
        return this.salary;
    }

    getRole() {
        return "Teacher";
    }
}

class Dean extends Teacher {
    constructor(name, age, gender, salary, workingHours) {
        super(name, age, gender, salary, workingHours);
    }

    getSalary() {
        return this.salary * 3; // 2x зарплата + 1 зарплата бонус
    }

    getRole() {
        return "Dean";
    }
}

class Director extends Dean {
    constructor(name, age, gender, salary, workingHours) {
        super(name, age, gender, salary, workingHours);
    }

    getSalary() {
        return this.salary * 7.5;
    }

    getRole() {
        return "Director";
    }
}

const people = [
    new Student("Anna", 20, "female", "2 year", "IT", 3.8),
    new Student("Max", 21, "male", "3 year", "Math", 3.4),
    new Student("Lena", 22, "female", "4 year", "Physics", 4.0),

    new Teacher("Ivan", 40, "male", 3000, 40),
    new Teacher("Olga", 35, "female", 3200, 38),

    new Dean("Sergey", 50, "male", 3500, 45),
    new Director("Elena", 55, "female", 3500, 50)
];

people.forEach(person => {
    console.log(person.name + " - " + person.getRole());
});

const director = people.find(person => person instanceof Director);
console.log("Зарплата директора школы:", director.getSalary());

const students = people.filter(person => person instanceof Student);

let bestStudent = students[0];
for (let i = 1; i < students.length; i++) {
    if (students[i].gpa > bestStudent.gpa) {
        bestStudent = students[i];
    }
}

console.log("Valedictorian:", bestStudent.name);
