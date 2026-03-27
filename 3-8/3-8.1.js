const testScore1 = 85;
const testScore2 = 92;
const isActive = true;
const difficultyFactor = 0.95;

const averageScore = (testScore1 + testScore2) / 2;
const finalScore = averageScore * difficultyFactor;

const isSuccessful = finalScore >= 90 && isActive;

let grade;

if (finalScore >= 95) {
    grade = "A";
} else if (finalScore >= 85) {
    grade = "B";
} else if (finalScore >= 75) {
    grade = "C";
} else {
    grade = "D";
}

console.log("ОСБ:", finalScore);
console.log("Статус успешности:", isSuccessful);
console.log("Финальная оценка:", grade);
