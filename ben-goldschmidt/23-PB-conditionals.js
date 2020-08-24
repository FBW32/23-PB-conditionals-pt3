// # Programming Basics: Conditionals Part 3
// Attempt this exercise using only simple "if" conditionals (and only what you have learnt this far into the course, so no loops, functions or arrays just yet!) 

// **Print your results to the console**


console.log("")
console.log("QUESTION 1")
// 1. Aleeza and Lis both play basketball in different teams. In the latest 3 games, Aleeza's team scored 89, 120 and 103 points, while Lis's team scored 116, 94 and 123 points.

let teamAleezaScores = [89, 120, 103];
let teamLisScores = [116, 94, 123];
console.log("teamAleezaScores = " + teamAleezaScores)
console.log("teamLisScores = " + teamLisScores)




console.log("")
console.log("QUESTION 1a")
// - 1a) Calculate the average score for each team.

let teamAleezaAverageScore = (teamAleezaScores[0] + teamAleezaScores[1] + teamAleezaScores[2]) / teamAleezaScores.length;
console.log("The average score for Team Aleeza is " + teamAleezaAverageScore);
// 104

let teamLisAverageScore = (teamLisScores[0] + teamLisScores[1] + teamLisScores[2]) / teamLisScores.length;
console.log("The average score for Team Lis is " + teamLisAverageScore);
// 111




console.log("")
console.log("QUESTION 1b")
// - 1b) Decide which teams wins in average (highest average score), and print the winner to the console, including their average score in the output.

if (teamAleezaAverageScore > teamLisAverageScore) {
    message1 = "Winner is Aleeza with " + teamAleezaAverageScore + "points!";
}
else {
    message1 = "Winner is Lis' Team with " + teamLisAverageScore + " points!";
}
console.log(message1)
// Winner is Lis' Team with 111 points!




console.log("")
console.log("QUESTION 1c")
// - 1c) Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score).

let teamAleezaScoresNEW = [101, 124, 108];
let teamLisScoresNEW = [116, 94, 123];

let teamAleezaAverageScoreNEW = (teamAleezaScoresNEW[0] + teamAleezaScoresNEW[1] + teamAleezaScoresNEW[2]) / teamAleezaScoresNEW.length;
console.log("The NEW average score for Team Aleeza is " + teamAleezaAverageScoreNEW);
// 111

let teamLisAverageScoreNEW = (teamLisScoresNEW[0] + teamLisScoresNEW[1] + teamLisScoresNEW[2]) / teamLisScoresNEW.length;
console.log("The NEW average score for Team Lis is " + teamLisAverageScoreNEW);
// 111


if (teamAleezaAverageScoreNEW > teamLisAverageScoreNEW) {
    message2 = "Winner is Aleeza with " + teamAleezaAverageScoreNEW + "points!";
}
else if (teamAleezaAverageScoreNEW < teamLisAverageScoreNEW) {
    message2 = "Winner is Lis' Team with " + teamLisAverageScoreNEW + " points!";
}
else {
    message2 = "Neither is the winner, it is a draw!";
}
console.log(message2)
// Neither is the winner, it is a draw!!




console.log("")
console.log("QUESTION 1d")
// - 1d) Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console.

let maryBasketballTeam = [97, 134, 105];
console.log("maryBasketballTeam = " + maryBasketballTeam)

let teamMaryAverageScore = (maryBasketballTeam[0] + maryBasketballTeam[1] + maryBasketballTeam[2]) / maryBasketballTeam.length;
console.log("The average score for Team Mary is " + teamMaryAverageScore);
// 112

if ((teamAleezaAverageScore > teamLisAverageScore) && (teamAleezaAverageScore > teamMaryAverageScore)) {
    message3 = "Team Aleeza is the winner with " + teamAleezaAverageScore + "points!";
}
else if ((teamLisAverageScore > teamAleezaAverageScore) && (teamLisAverageScore > teamMaryAverageScore)) {
    message3 = "Team Lis is the winner with " + teamLisAverageScore + "points!";
}
else {
    message3 = "Team Mary is the winner with " + teamMaryAverageScore + "points!";
}



console.log("")
console.log("QUESTION 1e")
// - 1e) Like before, change the scores to generate different winners, keeping in mind that there might be draws.

let maryBasketballTeamNEW = [100, 134, 105];

let teamMaryAverageScoreNEW = (maryBasketballTeamNEW[0] + maryBasketballTeamNEW[1] + maryBasketballTeamNEW[2]) / maryBasketballTeamNEW.length;
console.log("The NEW average score for Team Mary is " + teamMaryAverageScoreNEW + " points.");
// 106

if ((teamAleezaAverageScoreNEW > teamLisAverageScoreNEW) && ((teamAleezaAverageScoreNEW > teamMaryAverageScoreNEW))) {
    message4 = "The NEW winner is Aleeza with " + teamAleezaAverageScoreNEW + "points!";
}
else if ((teamLisAverageScoreNEW > teamAleezaAverageScoreNEW) && ((teamLisAverageScoreNEW > teamMaryAverageScoreNEW))) {
    message4 = "The NEW winner is Lis' Team with " + teamLisAverageScoreNEW + " points!";
}
else if ((teamMaryAverageScoreNEW > teamAleezaAverageScoreNEW) && ((teamMaryAverageScoreNEW > teamLisAverageScoreNEW))) {
    message4 = "The NEW winner is Mary's Team with " + teamMaryAverageScoreNEW + " points!";
}
else {
    message4 = "Neither of the teams are the winner, it is a draw!";
}
console.log(message4)
// Neither is the winner, it is a draw!!