function snailClimb(height, up, down) {
    let day = 0;
    let pos = 0;

    while (pos < height) {
        day++;
        pos += up;
        if (pos >= height) break;
        pos -= down;
    }
    return day;
}

console.log(snailClimb(5, 3, 2)); // 3
