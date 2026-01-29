// Темы 1-2 JS
const userName1 = "Алиса";
const userScore1 = 17;

const userName2 = "Карл";
const userScore2 = 22;

const maxScore = 25; 

console.log("Привет");
console.log("Отчет по результатам : " + `${userName1} и ${userName2}`);
console.log("Набрано : " +`${userName1} - `+ userScore1 / maxScore * 100 +"%" +` ${userName2} - `+ userScore2 / maxScore * 100 +"%");
console.log("Набрано больше 20 баллов?");
console.log("Карл  :" + (userScore2 > 20));
console.log("Алиса :" + (userScore1 > 20));


