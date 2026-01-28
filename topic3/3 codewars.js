//1
function highAndLow(numbers){
    const arr = numbers.split(" ").map(Number);
    return Math.max(...arr) + " " + Math.min(...arr);
}

//2
function repeatStr(n, s) {
    return s.repeat(n);
}

//3
function findSmallestInt(arr) {
    return Math.min(...arr);
}

// 4
function countSheep(num){
    let res = "";
    for (let i = 1; i <= num; i++) {
        res += i + " sheep...";
    }
    return res;
}
