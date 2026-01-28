let day = "monday".toLowerCase();
let message;

if (day === "monday") {
    message = "It's Monday!";
} else if (day === "tuesday") {
    message = "It's Tuesday!";
} else if (day === "wednesday") {
    message = "It's Wednesday!";
} else if (day === "thursday") {
    message = "It's Thursday!";
} else if (day === "friday") {
    message = "It's Friday!";
} else if (day === "saturday") {
    message = "It's Saturday!";
} else if (day === "sunday") {
    message = "It's Sunday!";
} else {
    message = "Invalid day!";
}

console.log(message);
