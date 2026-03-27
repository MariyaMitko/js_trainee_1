const coffee = "Cappuccino";
const size = "large";

let recipe = "";
let price = 0;

if (coffee === "Latte") {
    recipe = "Espresso + Milk + Milk Foam";
} else if (coffee === "Espresso") {
    recipe = "Espresso";
} else if (coffee === "Cappuccino") {
    recipe = "Espresso + Milk Foam";
} else {
    recipe = "Unknown coffee";
}

if (size === "small") {
    price = 3;
} else if (size === "medium") {
    price = 4;
} else if (size === "large") {
    price = 5;
} else {
    price = 0;
}

console.log("Кофе:", coffee);
console.log("Рецепт:", recipe);
console.log("Размер:", size);
console.log("Цена:", price + "$");
