// Programming Basics: Conditionals Part 3
// Attempt this exercise using only simple "if" conditionals (and only what you have learnt this far into the course, so no loops, functions or arrays just yet!)

// Print your results to the console

// Aleeza and Lis both play basketball in different teams. In the latest 3 games, Aleeza's team scored 89, 120 and 103 points, while Lis's team scored 116, 94 and 123 points.

let gameA1 = 89;
let gameA2 = 120;
let gameA3 = 103;
let gameL1 = 116;
let gameL2 = 94;
let gameL3 = 123;

// 1a) Calculate the average score for each team.
let avgA = ((gameA1 + gameA2 + gameA3)/3);
let avgL = ((gameL1 + gameL2 + gameL3)/3);
console.log(avgA, avgL); // 104, 111

// 1b) Decide which teams wins in average (highest average score), and print the winner to the console, including their average score in the output.
if (avgA > avgL) {
    console.log(`Aleeza is the winner with average of ${avgA}`);
}
else{
    console.log(`Lis is the winner with average of ${avgL}`); //Lis is the winner with average of 111
}
// 1c) Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score).
 gameA1 = 109;
 gameA2 = 110;
 gameA3 = 103;
 gameL1 = 126;
 gameL2 = 74;
 gameL3 = 113;

  avgA = ((gameA1 + gameA2 + gameA3)/3);
  avgL = ((gameL1 + gameL2 + gameL3)/3);
console.log(avgA, avgL);

 if (avgA > avgL) {
     
    console.log(`Aleeza is the winner with average of ${avgA}`);
}
else{
    console.log(`Lis is the winner with average of ${avgL}`); //Lis is the winner with average of 111
}// Aleeza is the winner with average of 107.33333333333333

// 1d) Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console.
let gameM1 = 129;
let gameM2 = 103;
let gameM3 = 125;
let avgM = ((gameM1 + gameM2 + gameM3)/3);

if (avgA > avgM) {
     
    console.log(`Aleeza is the winner with average of ${avgA}`);
}
else{
    console.log(`Mary is the winner with average of ${avgM}`); //Mary is the winner with average of 119
}

//OR


if ((avgA >= avgL) && ( avgA > avgM))  {
    console.log(`Aleeza is the winner with average of ${avgA}`);
    (avgL >= avgA) && ( avgL > avgM) ? console.log(`Lis is the winner with average of ${avgL}`) : (`Mary is the winner with average of ${avgM}`);
} //Mary is the winner with average of 119


// 1e) Like before, change the scores to generate different winners, keeping in mind that there might be draws.
gameA1 = 129;
gameA2 = 120;
gameA3 = 153;
gameL1 = 126;
gameL2 = 124;
gameL3 = 123;
avgA = ((gameA1 + gameA2 + gameA3)/3);
avgL = ((gameL1 + gameL2 + gameL3)/3);
console.log(avgA, avgL); //134 124.33333333333333
if ((avgA >= avgL) && ( avgA > avgM))  {
    console.log(`Aleeza is the winner with average of ${avgA}`);
    gameM1 = 129;
    gameM2 = 183;
    gameM3 = 175;
    avgM = ((gameM1 + gameM2 + gameM3)/3);
    console.log(avgM);// 162.33333333333334
    (avgA > avgM)  ? console.log(`Aleeza is the winner with average of ${avgA}`) : console.log(`Mary is the winner with average of ${avgM}`);
} //Mary is the winner with average of 162.33333333333334