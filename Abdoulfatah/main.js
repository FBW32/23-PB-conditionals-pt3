// 1a) Calculate the average score for each team.
let averageAleezaTeam = (89+120+103)/ 3;
let averageLisTeam = (116+ 94 + 123)/3;

console.log(`average score for Aleeza team = ${averageAleezaTeam}`);
console.log(`average score for Lis team = ${averageLisTeam}`);

// 1b) Decide which teams wins in average (highest average score), and print the winner to the console, including their average score in the output.
if (averageAleezaTeam > averageLisTeam) {
    console.log(`Aleeza Team is the winner with ${averageAleezaTeam} score in average`);
} else if (averageAleezaTeam < averageLisTeam) {
    console.log(`Lis Team is the winner with ${averageLisTeam} score in average`);
} else if (averageAleezaTeam = averageLisTeam) {
    console.log(`They are draw `);
}

// 1c) Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score).
let averageAleezaTeam1 = (90+130+110)/ 3;
let averageLisTeam1 = (91+ 90 + 102)/3;

if (averageAleezaTeam1 > averageLisTeam1) {
    console.log(`Aleeza Team is the winner with ${averageAleezaTeam1} score in average`);
} else if (averageAleezaTeam1 < averageLisTeam1) {
    console.log(`Lis Team is the winner with ${averageLisTeam1} score in average`);
} else if (averageAleezaTeam1 = averageLisTeam1) {
    console.log(`They are draw `);
}

// 1d) Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console.

let a = (90+121+105)/3; // A: average winning Aleeza team.
let l = (114+99+120)/3; // L: average winning Lis team.
let m = (120+130+140)/3; // M: average winning Mary team.

if (a > l) {
     score = a;
     result = 'Aleeza team is the winner';
} else if (l > a ) {
     score = l;
     result = 'Lis team is the winner ';
} else if (a = l) {
     score = a // it does not matter A or L.
     result = 'Aleeza and Lis team are draw';
}     
  if (score > m) {
      score = score;
      result = result;
      console.log(result + ' with ' + score + ' average win score');
      } else if (m > score) {
      score = m;
      result = 'Mary team is the winner '
      console.log(result + ' with ' + score + ' average win score');
      } else if (score = m) {
          score = m;
          result = 'Aleeza and Lis and Mary team are draw'
          console.log(result + ' with ' + score + ' average win score');
      }

// 1e) Like before, change the scores to generate different winners, keeping in mind that there might be draws.

let i = (90+121+105)/3; // A: average winning Aleeza team.
let j = (121+90+105)/3; // L: average winning Lis team.
let k = (105+121+90)/3; // M: average winning Mary team.


if (i > j) {
    score = i;
    result = 'Aleeza team is the winner';
} else if (j > i ) {
    score = j;
    result = 'Lis team is the winner ';
} else if (i = j) {
    score = i; // it does not matter A or L.
    result = 'Aleeza and Lis team are draw';
}     
 if (score > k) {
     score = score;
     result = result;
     console.log(result + ' with ' + score + '  average win score');
     } else if (k > score) {
     score = k;
     result = 'Mary team is the winner '
     console.log(result +  ' with ' + score + ' average win score');
     } else if (score = k) {
         score = k;
         result = 'Aleeza and Lis and Mary team are draw '
         console.log(result + ' with ' + score + ' average win score');
     }