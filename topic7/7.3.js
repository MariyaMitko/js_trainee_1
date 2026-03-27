class Employee {
    constructor(name,age,position,salary){
        this.name = name;
        this._age = age;
        this._position = position;
        this._salary = salary;
    }
    get age() {
        return this._age;
    }
    set age(age) {
        this._age = age;
    }

    get position() {
        return this._position;
    }
    set position(position) {
        this._position = position;
    }

    get salary() {
        return this._salary;
    }

    set salary(salary) {
        this._salary = salary;
    }
}

const emp = new Employee('Anton', 18, 'AQA', 3000);

console.log(emp.age);
emp.age = 19;
console.log(emp.age);

console.log(emp.position);
emp.position = 'Senior AQA';
console.log(emp.position);

console.log(emp.salary);
emp.salary = 4000;
console.log(emp.salary);
