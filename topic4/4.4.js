let n = 5;
let i = 1;

while (i <= n) {
    let line = "";
    let j = 0;
    let value = i;

    while (j < i) {
        line += value + " ";
        value += (n - j - 1);
        j++;
    }

    console.log(line.trim());
    i++;
}
