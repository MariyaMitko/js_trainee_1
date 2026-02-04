let i = 1;

while (i <= 9) {
    let line = "";
    let space = 0;
    while (space < (9 - i)) {
        line += " ";
        space++;
    }

    let num = 1;
    while (num <= i) {
        line += num;
        num++;
    }

    let num2 = i - 1;
    while (num2 >= 1) {
        line += num2;
        num2--;
    }

    console.log(line);
    i++;
}

let centerLine = "";

let num = 1;
while (num <= 9) {
    centerLine += num;
    num++;
}

centerLine += "0";

let num2 = 9;
while (num2 >= 1) {
    centerLine += num2;
    num2--;
}

console.log(centerLine);

i = 9;

while (i >= 1) {
    let line = "";

    let space = 0;
    while (space < (9 - i)) {
        line += " ";
        space++;
    }

    let num = 1;
    while (num <= i) {
        line += num;
        num++;
    }

    let num2 = i - 1;
    while (num2 >= 1) {
        line += num2;
        num2--;
    }

    console.log(line);
    i--;
}
