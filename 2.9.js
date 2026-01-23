const age = 20;
const isStudent = true;

if (age < 2) console.log("Free");
else if (age < 10) console.log("50% discount");
else if (age > 65) console.log("15% discount");
else if (isStudent) console.log("10% discount");
else console.log("Full price");
