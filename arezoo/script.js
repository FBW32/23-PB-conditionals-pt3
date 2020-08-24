let aleezScore = [89, 120, 103]; //200
let lisaScore = [116, 94, 123];
let avgAleeza = (aleezScore[0] + aleezScore[1] + aleezScore[2]) / 3;
let avgLisa = (lisaScore[0] + lisaScore[1] + lisaScore[2]) / 3;
console.log("lisa average score is: " + avgLisa);
console.log("Aleeza average score is: " + avgAleeza);

if (avgAleeza > avgLisa) {
  console.log("Aleeza team 's is winner with the average score: " + avgAleeza);
} else if (avgAleeza == avgLisa) {
  console.log(" both team is winner");
} else {
  console.log("Lisa 's team is winner with the average score: " + avgLisa);
}
// lisa 's team is winner but with the change of aleeza score 200 instead of 103, aleeza became a winner.

let maryScore = [97, 134, 105];
let avgMary = (maryScore[0] + maryScore[1] + maryScore[2]) / 3;
console.log("mary average score is: " + avgMary);
if (avgMary > avgAleeza && avgMary > avgLisa) {
  console.log("mary 's team is winner with the average score: " + avgMary);
} else if (avgAleeza > avgMary && avgAleeza > avgLisa) {
  console.log("Aleeza team 's is winner with the average score: " + avgAleeza);
} else if (avgLisa > avgMary && avgLisa > avgAleeza) {
  console.log("Lisa 's team is winner with the average score: " + avgLisa);
} else if (avgAleeza == avgLisa && avgAleeza == avgMary) {
  console.log(
    "all the teams has a equal score: " + `${avgAleeza},${avgMary},${avgLisa}`
  );
} else if (avgAleeza == avgLisa && avgAleeza > avgMary) {
  console.log("lisa and Aleeza team is winner with the score:" + avgAleeza);
} else if (avgMary == avgLisa && avgMary > avgAleeza) {
  console.log("Mary and lisa team 's is winner with the score:" + avgMary);
} else if (avgMary == avgAleeza && avgMary > avgLisa) {
  console.log("Mary and Aleeza team 's is winner with the score:" + avgMary);
}
