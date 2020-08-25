/* 1. Aleeza and Lis both play basketball in different teams. In the latest 3 games, Aleeza's team scored 89, 120 and 103 points, while Lis's team scored 116, 94 and 123 points. */

/* 1a) Calculate the average score for each team. */

let AleezaTeam = (89 + 120 + 103) / 3;
console.log(AleezaTeam); // 104
let LisTeam = (116 + 94 + 123) / 3;
console.log(LisTeam); // 111

/* 1b) Decide which teams wins in average (highest average score), and print the winner to the console, including their average score in the output. */

let win = Math.max(AleezaTeam, LisTeam);
console.log(`The highest average score has Lis's Team with + ${win} points`); // The highest average score has Lis's Team with + 111 points

if (LisTeam > AleezaTeam) {
  console.log(`The highest average score has Lis's Team with + ${win} points`);
} else {
  console.log(
    `The highest average score has Aleeza's Team with + ${AleezaTeam} points`
  );
}

/* 1c) Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score). */

let AleezaTeam2 = (19 + 170 + 13) / 3;
console.log(Math.floor(AleezaTeam2)); // 67
let LisTeam2 = (11 + 194 + 173) / 3;
console.log(LisTeam2); // 126
if (LisTeam2 > AleezaTeam2) {
  console.log(
    `The highest average score has Lis's Team with + ${LisTeam2} points`
  );
} else {
  console.log(
    `The highest average score has Aleeza's Team with + ${AleezaTeam2} points`
  );
} // The highest average score has Lis's Team with + 126 points

/* 1d) Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. */

let MaryTeam2 = (97 + 134 + 105) / 3;
console.log(MaryTeam2); // 112

if (LisTeam2 > MaryTeam2) {
  console.log(
    `The highest average score has Lis's Team with + ${LisTeam2} points`
  );
} else {
  console.log(
    `The highest average score has Mary's Team with + ${MaryTeam2} points`
  );
} // The highest average score has Lis's Team with + 126 points

// 1e) Like before, change the scores to generate different winners, keeping in mind that there might be draws.

let AleezaTeam3 = (199 + 10 + 3) / 3;
console.log(Math.floor(AleezaTeam3)); // 70
let MaryTeam3 = (979 + 14 + 15) / 3;
console.log(MaryTeam3); //   336

if (AleezaTeam3 > MaryTeam3) {
  console.log(
    `The highest average score has Aleeza's Team with + ${AleezaTeam3} points`
  );
} else {
  console.log(
    `The highest average score has Mary's Team with + ${MaryTeam3} points`
  );
} // The highest average score has Mary's Team with + 336 points
