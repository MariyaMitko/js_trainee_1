let i = 9;

while (i >= 0) {
    let line = "";
    let space = 0;
    while (space < ((9 - i) * 2)) {
        line = line + " ";
        space++
    }
    let left = i;
    while (left >= 0) {
        line += left + " ";
        left--;
    }

    let right = 1;
    while (right <= i) {
        line += right + " ";
        right++;
    }

    console.log(line);
    i--;
}