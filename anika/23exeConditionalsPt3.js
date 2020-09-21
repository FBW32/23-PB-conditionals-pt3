// **************EXERCISE 23 CONDITIONALS*********************************

// # Programming Basics: Conditionals Part 3

// Attempt this exercise using only simple "if" conditionals (and only what you have learnt this far into the course, so no loops, functions or arrays just yet!)

// **Print your results to the console**

// 1. Aleeza and Lis both play basketball in different teams. In the latest 3 games, Aleeza's team scored 89, 120 and 103 points, while Lis's team scored 116, 94 and 123 points.

// - 1a) Calculate the average score for each team.

let lis = (89 + 120 + 103) / 3;
console.log(lis); // 104
let aleeza = (116 + 94 + 123) / 3;
console.log(aleeza); // 111

// - 1b) Decide which teams wins in average (highest average score), and print the winner to the console, including their average score in the output.

// if Lis's team's average score > Aleeza's team's average score, print
// team with higher average score + average score.

if (lis > aleeza) {
  console.log(`Lis's team has an average score of ${lis}`);
} else {
  console.log(`Aleeza's team has an average score of ${aleeza}`);
}
// Aleeza's team has an average score of 111

// - 1c) Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score).

let lisC = (55 + 169 + 100) / 3;
console.log(lisC); // 108
let aleezaC = (111 + 60 + 76) / 3;
console.log(aleezaC); // 82.33333333333333

if (lisC > aleezaC) {
  console.log(`Lis's team wins with an average score of ${lisC}`);
  if (lisC === aleezaC) {
    console.log(`With a score of ${lisC} both teams win!`);
  }
} else {
  console.log(`Aleeza's team wins with an average score of ${aleezaC}`);
}
//  Lis's team wins with an average score of 108

// - 1d) Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console.

let maryD = (97 + 134 + 105) / 3;
console.log(maryD); //112

if (lisC > aleezaC && lisC > maryD) {
  console.log(`Lis's team wins with an average score of ${lisC}`);
}
if (maryD > aleezaC && maryD > lisC) {
  console.log(`Mary's team wins with an average score of ${maryD}`);

  if (maryD === lisC && maryD === aleezaC && lisC === aleezaC) {
    console.log("All teams have the same average score");
  }
} else {
  console.log(`Aleeza's team wins with an average score of ${aleezaC}`);
}
// Mary's team wins with an average score of 112

// - 1e) Like before, change the scores to generate different winners, keeping in mind that there might be draws.

let lisE = (160 + 60 + 101) / 3;
console.log(lisE); // 106.66666666666667
let aleezaE = (160 + 60 + 101) / 3;
console.log(aleezaE); // 107
let maryE = (90 + 100 + 80) / 3;
console.log(maryE); //90

if (lisE > aleezaE && lisE > maryE) {
  console.log(`Lis's team wins with an average score of ${lisE}`);
} else if (maryE > aleezaE && maryE > lisE) {
  console.log(`Mary's team wins with an average score of ${maryE}`);
} else if (maryE === lisE && maryE === aleezaE && lisE === aleezaE) {
  console.log("All teams have the same average score");
} else if (maryE === lisE && maryE > aleezaE && lisE > aleezaE) {
  console.log(`Lis's and Mary's teams win.`);
} else if (lisE === aleezaE && lisE > maryE && aleezaE > maryE) {
  console.log(`Lis's and Aleeza's teams win.`);
} else if (aleezaE === maryE && maryE > lisE && aleezaE > lisE) {
  console.log(`Aleeza's and Mary's teams win.`);
} else {
  console.log(`Aleeza's team wins with an average score of ${aleezaE}`);
}

// Lis's and Aleeza's teams win.
