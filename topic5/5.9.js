let coffee = "Latte";
let size = "medium";
let price;

function getCoffeePrice(size) {
    if (size === "small") return 3;
    else if (size === "medium") return 4;
    else if (size === "large") return 5;
    else return 0;
}

function printCoffee(coffee, size) {
    console.log("Вы выбрали: " + coffee);

    if (coffee === "Latte") console.log("Milk + Espresso");
    else if (coffee === "Espresso") console.log("Espresso only");
    else if (coffee === "Cappuccino") console.log("Milk + Espresso + Foam");
    else console.log("Unknown coffee");

    let price = getCoffeePrice(size);
    console.log("Цена: " + price + "$");
}

printCoffee(coffee, size);

printCoffee("Cappuccino", "large");
