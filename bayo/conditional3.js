// 25.08.2020

// EXERCISE 1
// Aleeza and Lis both play basketball in different teams. In the latest 3 games, Aleeza's team scored 89, 120 and 103 points, while Lis's team scored 116, 94 and 123 points.


// 1a
// Calculate the average score for each team.
let aScore1 = 89;
let aScore2 = 120;
let aScore3 = 103;
let aAverage = ((aScore1 + aScore2 + aScore3)/3);
console.log("Aleeza's team Average:", aAverage);  // 104

let lScore5 = 116;
let lScore6 = 94;
let lScore7 = 123;
let lAverage = ((lScore5 + lScore6 + lScore7)/3);
console.log("Liz's team Average:", lAverage);   // 111

// 1b
// Decide which teams wins in average (highest average score), and print the winner to the console, including their average score in the output.
 
if (aAverage > lAverage || lAverage < aAverage) {
    console.log(aAverage);
} else if (aAverage < lAverage || lAverage > aAverage) {
    console.log("Liz team is the highest average score of :", lAverage);
}

// 1c
// Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score).


let aScore8 = 21;
let aScore9 = 21;
let aScore10 = 123;
let newAverage = ((aScore8 + aScore9 + aScore10)/3);
console.log("Aleeza's team Average:", newAverage);

let lScore11 = 21;
let lScore12 = 21;
let lScore13 = 123;
let newLaverage = ((lScore11 + lScore12 + lScore13)/3);
console.log("Liz's team newAverage:", newLaverage);

if (newAverage === newLaverage){
    console.log("Average score is draw:", newAverage); // Average is draw: 55
}

// exercise 1d
// Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console.

let maryTeam1 = 97;
let maryTeam2 = 134;
let maryTeam3 = 105;
console.log((maryTeam1 + maryTeam2 + maryTeam3)/3); // 112

let maryTeam4 = 10;
let maryTeam5 = 40;
let maryTeam6 = 10;
console.log((maryTeam4 + maryTeam5 + maryTeam6)/3) // 20

// COMPLETE