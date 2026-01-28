const desserts = [
    { name: "Пирожное", price: 65 },
    { name: "Мороженое", price: 35 },
    { name: "Торт Наполеон", price: 250 },
    { name: "Песочное Печенье", price: 50 },
    { name: "Пудинг", price: 80 },
    { name: "Фруктовый Тарт", price: 40 },
    { name: "Желе Земляничное", price: 40 },
    { name: "Вафли Шоколадные", price: 36 },
    { name: "Булочка с Изюмом", price: 28 }
];
let cheapest = desserts[0];
let i = 1;

while(i < desserts.length) {
    if(desserts[i].price < cheapest.price) {
        cheapest = desserts[i];
    }
    i++;
}
console.log(cheapest);

let expensive = desserts[0];
let j = 1;
while(j < desserts.length){
    if(desserts[j].price > expensive.price){
        expensive = desserts[j];
    }
    j++;
}
console.log(expensive);