// Aleeza and Lis both play basketball in different teams. In the latest 3 games, Aleeza's team scored 89, 120 and 103 points, while Lis's team scored 116, 94 and 123 points.
// 1a) Calculate the average score for each team.

let team1Res1 = 89;
let team1Res2 = 120;
let team1Res3 = 103;

let team2Res1 = 116;
let team2Res2 = 94;
let team2Res3 = 123;

let aleezaAvarage = (team1Res1 + team1Res2 + team1Res3) / 3
console.log(aleezaAvarage);

let lisAvarage = (team2Res1 + team2Res2 + team2Res3) / 3
console.log(lisAvarage);

// 1b) Decide which teams wins in average (highest average score), and print the winner to the console, including their average score in the output.

if (aleezaAvarage > lisAvarage) { console.log(`Àleeza Team wins with highest avarage of ${aleezaAvarage}`)
    
} 
 else { console.log(`Lis's Team wins with highest avarage of ${lisAvarage}`)
} 




// 1c) Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score).
//OK

// 1d) Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console.

//OK

// 1e) Like before, change the scores to generate different winners, keeping in mind that there might be draws.

//OK


