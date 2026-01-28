// 1
let str1 = "one two three";
let map1 = ["zero","one","two","three","four","five","six","seven","eight","nine"];
let arr1 = str1.split(" ");
let sum1 = 0;
let ok1 = true;

for (let i = 0; i < arr1.length; i++) {
    let idx = map1.indexOf(arr1[i]);
    if (idx === -1) {
        ok1 = false;
        break;
    }
    sum1 += idx;
}
console.log(ok1 ? map1[Math.floor(sum1 / arr1.length)] : "n/a");


// 2
let n2 = 4;
console.log(n2 * n2 * n2);


// 3
let n3 = 5;
let stairs = "";

for (let i = 0; i < n3; i++) {
    stairs += " ".repeat(i) + "I";
    if (i < n3 - 1) stairs += "\n";
}
console.log(stairs);


// 4
let classPoints4 = [2, 3, 4];
let yourPoints4 = 5;
let sum4 = 0;

for (let i = 0; i < classPoints4.length; i++) {
    sum4 += classPoints4[i];
}
console.log(yourPoints4 > sum4 / classPoints4.length);


// 5
let busStops5 = [[10,0],[3,5],[5,8]];
let people5 = 0;

for (let i = 0; i < busStops5.length; i++) {
    people5 += busStops5[i][0];
    people5 -= busStops5[i][1];
}
console.log(people5);


// 6
let n6 = 8;
let sum6 = 0;
let i6 = 1;

while (i6 <= n6) {
    sum6 += i6;
    i6++;
}
console.log(sum6);


// 7
let arr7 = [1, -2, 3, -4, 5];
let pos7 = 0;
let neg7 = 0;

for (let i = 0; i < arr7.length; i++) {
    if (arr7[i] > 0) pos7++;
    if (arr7[i] < 0) neg7 += arr7[i];
}
console.log([pos7, neg7]);


// 8
let n8 = 3;
let s8 = "Hi";
let res8 = "";

for (let i = 0; i < n8; i++) {
    res8 += s8;
}
console.log(res8);


// 9
let str9 = "123";
console.log(+str9);


// 10
let n10 = 5;
let res10 = "";

for (let i = 1; i <= n10; i++) {
    res10 += i;
}
console.log(res10);


// 11
let a11 = 12.345;
console.log(Math.round(a11));


// 12
let n12 = 3;
let res12 = "";

while (n12 > 0) {
    res12 += n12;
    n12--;
}
console.log(res12);


// 13
let str13 = "H e l l o";
let res13 = "";

for (let i = 0; i < str13.length; i++) {
    if (str13[i] !== " ") res13 += str13[i];
}
console.log(res13);


// 14
let str14 = "eloquent";
let res14 = "";

for (let i = 1; i < str14.length - 1; i++) {
    res14 += str14[i];
}
console.log(res14);


// 15
let arr15 = [1, 2, 2];
let sum15 = 0;

for (let i = 0; i < arr15.length; i++) {
    sum15 += arr15[i] * arr15[i];
}
console.log(sum15);


// 16
let bool16 = true;
console.log("" + bool16);


// 17
let arr17 = [6, 2, 1, 8, 10];
let min17 = arr17[0];
let max17 = arr17[0];
let sum17 = 0;

for (let i = 0; i < arr17.length; i++) {
    if (arr17[i] < min17) min17 = arr17[i];
    if (arr17[i] > max17) max17 = arr17[i];
    sum17 += arr17[i];
}
console.log(sum17 - min17 - max17);


// 18
let str18 = "hello world";
let parts18 = str18.split(" ");
let res18 = "";

for (let i = parts18.length - 1; i >= 0; i--) {
    res18 += parts18[i];
    if (i > 0) res18 += " ";
}
console.log(res18);


// 19
let arr19 = [1, 2, 3];
let res19 = [];

for (let i = 0; i < arr19.length; i++) {
    res19.push(arr19[i] * 2);
}
console.log(res19);


// 20
let a20 = 5;
let b20 = 3;
console.log(a20 > b20 ? a20 : b20);


// 21
let arr21a = [1, 2, 3];
let arr21b = [4, 5, 6];
let sum21 = 0;

for (let i = 0; i < arr21a.length; i++) {
    sum21 += arr21a[i];
}
for (let i = 0; i < arr21b.length; i++) {
    sum21 += arr21b[i];
}
console.log(sum21);
