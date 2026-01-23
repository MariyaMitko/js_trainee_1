const nums = [4, 81, 3, -12, 99, 14];

let min = nums[0];
let max = nums[0];

for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) min = nums[i];
    if (nums[i] > max) max = nums[i];
}

console.log(min);
console.log(max);