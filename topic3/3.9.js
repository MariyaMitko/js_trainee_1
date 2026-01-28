let height = 5;
let position = 0;
let days = 0;

while (position < height) {
    days++;
    position += 3;
    if (position >= height) break;
    position -= 2;
}

console.log(days);