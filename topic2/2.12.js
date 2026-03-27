const age = 20;
const isMember = false;
const visits = 5;

let access;

if (isMember) {
    access = "Access granted";
} else if (age >= 18 && visits >= 5) {
    access = "VIP pass";
} else if (age >= 18 && visits >= 3) {
    access = "Access granted";
} else {
    access = "Access denied";
}

console.log(access);
