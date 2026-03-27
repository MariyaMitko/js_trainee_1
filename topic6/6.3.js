function describeAnimals(animal){
    return `This ${animal.color} ${animal.name} has ${animal.legs} legs.`
}
const dog = { name: "dog", legs: 4, color: "yellow" };
console.log(describeAnimals(dog));