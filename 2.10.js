let height = 5;
let day = 3;
let night = 2;

let days = Math.ceil((height - day) / (day - night)) + 1;
console.log(days);
