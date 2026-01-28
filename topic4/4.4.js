let n = 5;
let i = 1;

while (i <= n) {
    let line = "";
    let value = i;
    let j = 0;

    while (j < i) {
        line += value + " ";
        value += (n - j);
        j++;
    }

    console.log(line);
    i++;
}
