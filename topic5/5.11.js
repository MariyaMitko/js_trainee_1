function sumNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") sum += arr[i];
    }
    return sum;
}

console.log(sumNumbers([1, "a", 2, 3])); // 6
