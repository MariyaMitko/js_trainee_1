let text = "innowise";
let encrypted = "";

let i = 0;

while (i < text.length) {
    encrypted += text[i] + "br";
    i++;
}

console.log(encrypted);
