class Car {
    constructor(model, color, year){
        this.model = model;
        this.color = color;
        this.year = year;
    }
    getInfo(){
        return `${this.model} ${this.color} ${this.year}`;
    }
}
class Zhiguli extends Car {
    constructor(model, color, year, place, maxSpeed){
        super(model, color, year);
        this.place = place;
        this.maxSpeed = maxSpeed;
    }
    getAllInfo(){
        return `${this.getInfo()}, Место выпуска: ${this.place}, Макс. скорость: ${this.maxSpeed} км/ч`;
    }
}

let zhiguli = new Zhiguli(
    "ВАЗ-2101",
    "белый",
    1980,
    "СССР",
    140
);

console.log(zhiguli.getAllInfo());
