let encrypted = "Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr";
let decrypted = "";

let i = 0;

while (i < encrypted.length) {
    if (encrypted[i] === "b" && encrypted[i + 1] === "r") {
        i += 2; 
    } else {
        decrypted += encrypted[i];
        i++;
    }
}

console.log(decrypted);
