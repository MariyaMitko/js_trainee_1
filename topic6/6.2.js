const room = {
    height: 3,
    tv: "samsung",
    big: true
};
console.log(room.height);
console.log(room.tv);
console.log(room.big);
console.log(typeof room.big);
console.log(room.tv.length);
console.log(room.tv.length - 1);
console.log(room.tv.toUpperCase());
room.tv = "LG";
console.log(room.tv);
room.furniture = ["table", "chair", "sofa"];
console.log(room.furniture);
console.log(room.furniture[1]);
delete room.big
console.log(room);