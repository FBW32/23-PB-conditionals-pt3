// # Programming Basics: Conditionals Part 3 

// Attempt this exercise using only simple "if" conditionals (and only what you have learnt this far into the course, so no loops, functions or arrays just yet!) 

// **Print your results to the console**

// 1. Aleeza and Lis both play basketball in different teams. In the latest 3 games, Aleeza's team scored 89, 120 and 103 points, while Lis's team scored 116, 94 and 123 points.
let teamAlezza = [89, 120, 103];
let teamLis = [116, 94, 123];

// - 1a) Calculate the average score for each team.
let averageAlezza = (teamAlezza[0] + teamAlezza[1] + teamAlezza[2]) / 3;
let averageLis = (teamLis[0] + teamLis[1] + teamLis[2]) / 3;

console.log(`Team Alezza average score: `, averageAlezza); // Team Alezza average score:  104
console.log(`Team Lis average score: `,averageLis); // Team Lis average score:  111

// - 1b) Decide which teams wins in average (highest average score), and print the winner to the console, including their average score in the output.
if (averageAlezza > averageLis) {
    console.log("Team Aleeza is a winner with the average score of: " + averageAlezza);
  } else if (averageAlezza < averageLis) {
    console.log("Team Lis is winner with the average score of: " + averageLis);
  } else {
    console.log("It's a Draw!");
  }  // Team Lis is winner with the average score of: 111

// - 1c) Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score).
let fakeScoreA = 666;
let fakeScoreL = 666;

if (fakeScoreA > fakeScoreL) {
    console.log("Team Aleeza is a winner with the average score of: " + fakeScoreA);
  } else if (fakeScoreA == fakeScoreL) {
    console.log("It's a Draw!");
  } else {
    console.log("Team Lis is winner with the average score of: " + fakeScoreL);
  } // It's a Draw!

// - 1d) Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console.
let teamMary = [97, 134, 105];
let averageMary = (teamMary[0] + teamMary[1] + teamMary[2]) / 3;
console.log(`Team Mary average score: `, averageMary); // Team Mary average score:  112

if (averageAlezza > averageLis && averageAlezza > averageMary) {
    console.log("Team Aleeza is a winner with the average score of: " + averageAlezza);
    } else if (averageLis > averageAlezza && averageLis > averageMary) {
    console.log("Team Lis is winner with the average score of: " + averageLis);
    } else if (averageMary > averageAlezza && averageMary > averageLis){
    console.log("Team Mary is winner with the average score of: " + averageMary);
    } else if (averageAlezza === averageLis === averageMary){
      console.log("It's a draw!");
} // Team Mary is winner with the average score of: 112

// - 1e) Like before, change the scores to generate different winners, keeping in mind that there might be draws.

let fakeScoreM = 666;

if (fakeScoreA > fakeScoreL && fakeScoreA > fakeScoreM) {
    console.log("Team Aleeza is a winner with the average score of: " + fakeScoreA);
    } else if (fakeScoreL > fakeScoreA && fakeScoreL > fakeScoreM) {
    console.log("Team Lis is winner with the average score of: " + fakeScoreL);
    } else if (fakeScoreM > fakeScoreA && fakeScoreM > fakeScoreL){
    console.log("Team Mary is winner with the average score of: " + fakeScoreM);
    } else {
      console.log("It's a Draw!");
} // It's a Draw!
