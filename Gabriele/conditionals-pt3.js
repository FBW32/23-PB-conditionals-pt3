// Aleeza and Lis both play basketball in different teams. In the latest 3 games, Aleeza's team scored 89, 120 and 103 points, while Lis's team scored 116, 94 and 123 points.

// 1a) Calculate the average score for each team.

console.log(avScoreAleeza = (89 + 120 + 103) / 3); // 104
console.log(avScoreLiz = (116 + 94 + 123) / 3); // 111

// 1b) Decide which teams wins in average (highest average score), and print the winner to the console, including their average score in the output.

if (avScoreAleeza > avScoreLiz) {
    console.log("Aleeza's team has an higher average score of 104");
} else {
    console.log("Liz's team team has an higher average score of 111");
};  // Liz's team team has an higher average score of 111

// 1c) Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score).

avScoreAleeza = 104 + 20;
avScoreLiz = 111 + 10; 

if (avScoreAleeza > avScoreLiz) {
    console.log("Now Aleeza's team has an higher average score")
} else if (avScoreAleeza = avScoreLiz) {
    console.log("It's a draw");
}
else
{
   console.log("Still Liz's team team has an higher average score of 111"); 
}; // Now Aleeza's team has an higher average score


// 1d) Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console.

console.log(avScoreMary = (97 + 134 + 105) / 3); // 112



if (avScoreAleeza > avScoreLiz && avScoreAleeza > avScoreMary) {
    console.log("Mary's team has the highest score")
} else if (avScoreLiz > avScoreAleeza && avScoreLiz > avScoreMary) {
    console.log("Liz's team has the highest score") 
} else if (avScoreMary > avScoreAleeza && avScoreMary > avScoreLiz) {
    console.log("Mary's team has the highest score") 
}
 else {
    console.log("It might be a draw");
}; //  Mary's team has the highest score

// 1e) Like before, change the scores to generate different winners, keeping in mind that there might be draws.

console.log(avScoreAleeza = (112 + 89 +103)); // 304
console.log(avScoreLiz = (98 + 102 + 113)); // 313
console.log(avScoreMary = (102 + 89 + 106)); // 297

if (avScoreAleeza > avScoreLiz && avScoreAleeza > avScoreMary) {
    console.log("Mary's team has now the highest score")
} else if (avScoreLiz > avScoreAleeza && avScoreLiz > avScoreMary) {
    console.log("Liz's team has now the highest score") 
} else if (avScoreMary > avScoreAleeza && avScoreMary > avScoreLiz) {
    console.log("Mary's team has now the highest score") 
}
 else {
    console.log("It might be a draw");
}; //  Liz's team has now the highest score