//1
let Aleeza1 = 89;
let Aleeza2 = 120;
let Aleeza3 = 103;
let Liza1 = 116;
let Liza2 = 94;
let Liza3 = 123;
//1a)
let averageAleeza = (Aleeza1 + Aleeza2 + Aleeza3) / 3;
console.log(`Average of Aleeza's Team: ${averageAleeza}`);
let averageLis = (Liza1 + Liza2 + Liza3) / 3;
console.log(`Average of Lis's Team: ${averageLis}`);
//1b)
if (averageAleeza > averageLis) {
  console.log(`Winner is Aleeza's Team with ${averageAleeza} average score.`);
} else if (averageLis > averageAleeza) {
  console.log(`Winner is Lis's Team with ${averageLis} average score.`);
} else {
  console.log("There is a draw");
}
//1c)
Liza3 = 100;

averageLis = (Liza1 + Liza2 + Liza3) / 3;
if (averageAleeza > averageLis) {
  console.log(`Winner is Aleeza's Team with ${averageAleeza} average score.`);
} else if (averageLis > averageAleeza) {
  console.log(`Winner is Lis's Team with ${averageLis} average score.`);
} else {
  console.log("There is a draw");
}
//1d)
let Mary1 = 97;
let Mary2 = 134;
let Mary3 = 105;
averageMary = (Mary1 + Mary2 + Mary3) / 3;
console.log(`Average of Mary's Team: ${averageMary}`);

if (averageAleeza > averageLis && averageAleeza > averageMary) {
  console.log(`Winner is Aleeza's Team with ${averageAleeza} average score.`);
} else if (averageLis > averageAleeza && averageLis > averageMary) {
  console.log(`Winner is Lis's Team with ${averageLis} average score.`);
} else if (averageMary > averageAleeza && averageMary > averageLis) {
  console.log(`Winner is Mary's Team with ${averageMary} average score.`);
} else {
  console.log("There is a draw");
}
//1e)
Mary2 = 110;
averageMary = (Mary1 + Mary2 + Mary3) / 3;

if (averageAleeza > averageLis && averageAleeza > averageMary) {
  console.log(`Winner is Aleeza's Team with ${averageAleeza} average score.`);
} else if (averageLis > averageAleeza && averageLis > averageMary) {
  console.log(`Winner is Lis's Team with ${averageLis} average score.`);
} else if (averageMary > averageAleeza && averageMary > averageLis) {
  console.log(`Winner is Mary's Team with ${averageMary} average score.`);
} else {
  console.log("There is a draw");
}
