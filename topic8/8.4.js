function getFood(dogBreed, dogName, foodType, quantity, brand) {

    if (arguments.length === 0) {
        console.log("All dogs love to eat!");
        return;
    }

    if (arguments.length === 3) {
        console.log(`${dogBreed} ${dogName} eats ${foodType} food.`);
        return;
    }

    if (arguments.length === 4) {
        console.log(`${dogBreed} ${dogName} eats ${quantity} bowls a day of ${foodType} food.`);
        return;
    }

    if (arguments.length === 5) {
        console.log(`${dogBreed} ${dogName} eats ${quantity} bowls a day of ${foodType} food by ${brand}.`);
    }
}

getFood();

getFood("Shepherd", "Masha", "dry");

getFood("Poodle", "Demi", "wet", 2);

getFood("Corgi", "Henry", "dry", 3, "Royal Canin");
