for (let i = 10; i >= 1; i--) {
    let spaces = "  ".repeat(10 - i);
    let numsLine = "";
    for (let j = 0; j < i; j++) {
        numsLine += j + " ";
    }
    console.log(spaces + numsLine);
}