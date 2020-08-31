// 1. Aleeza and Lis both play basketball in different teams. In the latest 3 games, Aleeza's team scored 89, 120 and 103 points, while Lis's team scored 116, 94 and 123 points.
// - 1a) Calculate the average score for each team.

let alezaTeam = (89 + 120 + 103);
let lisaTeam = (116 + 94 + 123);

let alezAvScore = alezaTeam/ 3;
let lisAvScore = lisaTeam / 3;

score1 = console.log(`Aleeza avarage score ==>  ${alezAvScore}`);
// Aleeza avarage score ==>  104

score2 = console.log(`Lisa avarage score ==>  ${lisAvScore}`);
// Lisa avarage score ==>  111

//- 1b) Decide which teams wins in average (highest average score), and print the winner to the console, including their average score in the output.

if (score1 > score2){
    console.log(`Aleeza team wins with ${alezAvScore}points`);
} else {
    console.log(`Lisa  team wins with ${lisAvScore} points`);
}
// Lisa  team wins with 111 points

// - 1c) Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score).

 let lisAvScore2 = ((84 + 102 + 92)/3);
 let alezAvScore2 = ((92 + 124 + 96)/3);

if (alezAvScore2 > lisAvScore2){
    console.log(`Aleeza team wins with ${alezAvScore2}points`);
} else {
    console.log(`Lisa  team wins with ${lisAvScore2} points`);
}

//- 1d) Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console.

let maryAvScore = (97 + 134 + 105)/3;
console.log(maryAvScore);  // 112

if ((maryAvScore > alezAvScore2) || (maryAvScore > lisAvScore2) ){
    
    console.log(`Mary team wins with ${maryAvScore}points`);

} else if (alezAvScore2 > lisAvScore2){
    console.log(`Aleeza team wins with ${alezAvScore2}points`);

} else {
    console.log(`Lisa  team wins with ${lisAvScore2} points`);
}
// Mary team wins with 112points


// - 1e) Like before, change the scores to generate different winners, keeping in mind that there might be draws.

let maryAvScore2 = (93 + 86 + 106)/3;
let alezAvScore3 = (119 + 96 + 109)/3;
let lisAvScore3 = (103 + 83 + 96)/3;
console.log(maryAvScore2);  // 94
console.log(alezAvScore3); //115
console.log(lisAvScore3); // 94



if (maryAvScore2 > alezAvScore3){
    
    console.log(`Mary team wins with ${maryAvScore2}points`);

} else if (alezAvScore3 > lisAvScore3){

    console.log(`Aleeza team wins with ${alezAvScore3}points`);

} else if (lisAvScore3 > maryAvScore2) {

    console.log(`Lisa  team wins with ${lisAvScore3} points`);

}  else if ((maryAvScore2 === alezAvScore3) && (alezAvScore3 === lisAvScore3)){

    console.log(`all teams have equal points its a Draw`);
};
// Aleeza team wins with 108points

    

