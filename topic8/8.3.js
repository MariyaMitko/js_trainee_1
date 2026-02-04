class Human {
    constructor(name, age, interest){
        if (new.target === Human) {
            throw new Error("Нельзя создавать экземпляр абстрактного класса Human");
        }
        this.name = name;
        this.age = age;
        this.interest = interest;
    }
    info(){
        return `${this.name} ${this.age} лет, интересуется ${this.interest}`
    }
}
    
class Person extends Human {
    constructor(name, age, interest){
        super(name, age, interest);
    }
}

const katya = new Person("Катя", 25, "рисованием");
const yura = new Person("Юра", 28, "чтением");

console.log(katya.info());
console.log(yura.info());
