function longStrings(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 5) res.push(arr[i]);
    }
    return res;
}

console.log(longStrings(["apple","banana","kiwi","strawberry"])); // ["banana","strawberry"]
