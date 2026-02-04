let text = "innowise";
let encrypted = "";
let decrypted = "";

let i = 0;

while (i < text.length) {
    encrypted += text[i] + "br";
    i++;
}

console.log(encrypted);

let j = 0;

while (j < encrypted.length) {
    decrypted += encrypted[j];
    j += 3;
}

console.log(decrypted);
