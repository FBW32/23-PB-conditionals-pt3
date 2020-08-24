// Programming Basics: Conditionals Part 3

/* 1. Aleeza and Lis both play basketball in different teams. In the latest 3 games, Aleeza's team scored 89, 120 and 103 points, while Lis's team scored 116, 94 and 123 points. */

// 1a) Calculate the average score for each team. 
let aS1 = 89;
let aS2 = 120;
let aS3 = 103;
let aSaverage = ((aS1 + aS2 + aS3)/3);
console.log("Aleeza's team Average: ", aSaverage); // Aleeza's team Average:  104

let lis1 = 116;
let lis2 = 94;
let lis3 = 123;
let lisAverage = ((lis1 + lis2 + lis3)/3);
console.log("Lis's team Average: ", lisAverage); // Lis's team Average:  111

// 1b) Decide which teams wins in average (highest average score), and print the winner to the console, including their average score in the output.
(aSaverage > lisAverage) ? console.log(`Aleeza's team is the winner with average of ${aSaverage}`) : console.log(`Lis's team is the winner with average of ${lisAverage}`);
// Lis's team is the winner with average of 111

// 1c) Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score).
let alS1 = 60;
let alS2 = 142;
let alS3 = 131;
let alSaverage = ((alS1 + alS2 + alS3)/3);

let liS1 = 95;
let liS2 = 116;
let liS3 = 122;
let liSaverage = ((liS1 + liS2 + liS3)/3);
if (alSaverage > liSaverage) {
    console.log(`Aleeza's team is the winner with average of ${alSaverage}.`);
} else if (alSaverage < liSaverage) {
    console.log(`Lis's team is the winner with average of ${liSaverage}.`);
} else if (alSaverage === liSaverage) {
    console.log(`There is a draw with equal average of ${alSaverage}.`);
}
// There is a draw with equal average of 111.

/* 1d) Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. */
let m1 = 97;
let m2 = 134;
let m3 = 105;
let maryAverage = ((m1 + m2 + m3)/3);
console.log("Mary's team Average: ", maryAverage); // Mary's team Average:  112
if ((aSaverage > lisAverage) && (aSaverage > maryAverage)) {
    console.log(`Aleeza's team is the winner with average of ${aSaverage}`);
} else if ((lisAverage > aSaverage) && (lisAverage > maryAverage)) {
    console.log(`Lis's team is the winner with average of ${lisAverage}`);
} else if ((maryAverage > aSaverage) && (maryAverage > lisAverage)) {
    console.log(`Mary's team is the winner with average of ${maryAverage}`);
} else {
    console.log(`There is a Draw!`);
}
// Mary's team is the winner with average of 112

/* 1e) Like before, change the scores to generate different winners, keeping in mind that there might be draws. */

let ma1 = 92;
let ma2 = 86;
let ma3 = 101;
let mAryAverage = ((ma1 + ma2 + ma3)/3);
if ((aSaverage > lisAverage) && (aSaverage > mAryAverage)) {
    console.log(`Aleeza's team is the winner with average of ${aSaverage}`);
} else if ((lisAverage > aSaverage) && (lisAverage > mAryAverage)) {
    console.log(`Lis's team is the winner with average of ${lisAverage}`);
} else if ((mAryAverage > aSaverage) && (mAryAverage > lisAverage)) {
    console.log(`Mary's team is the winner with average of ${mAryAverage}`);
} else {
    console.log(`There is a Draw!`);
}
// Lis's team is the winner with average of 111
