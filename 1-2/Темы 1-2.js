const user1Name = "Алиса";
const user1CorrectAnswers = 17;

const user2Name = "Карл";
const user2CorrectAnswers = 22;

const maxCorrectAnswers = 25;

console.log("----- Отчет по результатам теста -----");

const user1Percentage = (user1CorrectAnswers / maxCorrectAnswers) * 100;
const user2Percentage = (user2CorrectAnswers / maxCorrectAnswers) * 100;

console.log(user1Name + ": " + user1Percentage + "%");
console.log(user2Name + ": " + user2Percentage + "%");

console.log(user1Name + " набрал больше 20 баллов:", user1CorrectAnswers > 20);
console.log(user2Name + " набрал больше 20 баллов:", user2CorrectAnswers > 20);