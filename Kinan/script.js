//Aleeza and Lis both play basketball in different teams. In the latest 3 games,
//Aleeza's team scored 89, 120 and 103 points,
// while Lis's team scored 116, 94 and 123 points.
var aleeza=[89,12,103];
var lisa=[116,94,123];
// 1a) Calculate the average score for each team.
var aleezaAvr=(aleeza[0]+aleeza[1]+aleeza[2])/3;
console.log("Aleeza's Team Average equal " + aleezaAvr); // expacted return [Aleeza Average equal 68]

var lisaAvr=(lisa[0]+lisa[1]+lisa[2])/3;
console.log("Lisa's Team Average equal " + lisaAvr);  //expacted return [Lisa Average equal 111]

/* Decide which teams wins in average (highest average score), and print the winner to the console,
including their average score in the output. */
/* console.log((aleezaAvr>lisaAvr)? "Aleeza's Team Average is heigher than lisa's Team and the Average is "+ aleezaAvr :
"Lisa's Team  Average is heigher than Aleeza's Team and the Average is "+ lisaAvr);
// expacted return [Lisa's Team  Average is heigher than Aleeza's Team and the Average is 111]
 */
let score;
let message;
let winner;
if (aleezaAvr>lisaAvr){

    message=("Aleeza's Team Average is heigher than lisa's Team and the Average is "+ aleezaAvr);
    console.log(message);
    score=aleezaAvr;
    winner="Aleeza's Team";

}else if ((aleezaAvr==lisaAvr)){
    message=("The Average for both team are the same");
    console.log(message)
    score=aleezaAvr;
    winner="Aleeza and Lisa Team";
}else{
    message=("Lisa's Team  Average is heigher than Aleeza's Team and the Average is "+ lisaAvr);
    console.log(message);
    score=lisaAvr;
    winner="Lisa's Team"
}

/* 1d) Mary also plays basketball, and her team scored 97, 134 and 105 points.
Like before, log the average winner to the console. */

var mary=[97,134,105];
var maryAvr=(mary[0]+mary[1]+mary[2])/3;

console.log("Mary Average equal " + maryAvr); 
// expeacted return [Mary Average equal 112]
if (maryAvr>score){
    message=(`Mary's Team Average is heigher than ${winner}  and the Average is `+ maryAvr);
    console.log(message);
       // Mary's Team Average is heigher than Lisa's Team  and the Average is 112
}else if( maryAvr == score){

    message=(`all Team have the same Score`);

}else{

    message=(`the winner is ${winner} and the Higher score is ${score}`);
}
//////////////////////////////////////////////////////////////////////////