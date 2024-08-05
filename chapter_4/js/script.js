var score = [60, 50, 60, 58, 54, 58, 50, 52, 54];

var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69,
              34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61,
              46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];

              /*
var output;
var highScore = 0;

for (var i = 0; i < scores.length; i++) {
  output = `Bubble solution #${i} score: ${scores[i]}`;
  console.log(output);
  if (scores[i] > highScore) {
    highScore = scores[i];
  }
}

console.log(`Bubble tests: ${scores.length}`);
console.log(`Highest bubble score: ${highScore}`);

var bestSolutions = [];

for (var i = 0; i < scores.length; i++) {
  if (scores[i] == highScore) {
    bestSolutions.push(i);
  }
}
*/



function printAndGetHighScore (scores) {
  var highScore = 0;
  var output;
  for (var i = 0; i < scores.length; i++) {
    output = `Bubble solution #${i} score: ${scores[i]}`;
    console.log(output);
    if (scores[i] > highScore) {
      highScore = scores[i];
    }
  }
  return highScore;
}

var highScore = printAndGetHighScore(scores);
console.log(`Bubble tests: ${scores.length}`);
console.log(`Highest bubble score: ${highScore}`);

var bestSolutions = [];

for (var i = 0; i < scores.length; i++) {
  if (scores[i] == highScore) {
    bestSolutions.push(i);
  }
}



/*
while (i < scores.length) {
  output = `Bubble solution #${i} score ${scores[i]}`;
  console.log(output);
  i = i + 1;
}

var hasBubbleGum = [false, false, false, true];
var products = ["Choo Choo Chocolate", 
                "Icy ChooMint",  
                "Cake Batter", 
                "Bubblegum"];
var i = 0;

while (i < hasBubbleGum.length) {
  if (hasBubbleGum[i]) {
    console.log(products[i] + " contains bubble gum");
  }
  i = i + 1;
}

for (var i = 0; i < hasBubbleGum.length; i++) {
  if (hasBubbleGum[i]) {
    console.log(products[i] + " contains bubble gum");
  }
}
*/


/*
for (var i = 0; i < scores.length; i++) {
  if (scores[i] > highScore) {
    for (var k = 0; k < scores.length; k++) {
      bestSolutions[k] = scores(i);
    }
  }
  console.log(bestSolutions);
}
*/

var costs = [.25, .27, .25, .25, .25, .25, .33, .31, .25, .29, .27, .22, 
             .31, .25, .25, .33, .21, .25, .25, .25, .28, .25, .24, .22, 
             .20, .25, .30, .25, .24, .25, .25, .25, .27, .25, .26, .29];

function getMostCostEffectiveSolution (score, costs, highscore) {
  var cost = 100;
  var index;

  for (var i = 0; i < scores.length; i++) {
    if (score[i] == highscore) {
      if (cost > costs[i]) {
        index = i;
        cost = costs[i];
      }
    }
  }
  return index;
}

var mostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore);
console.log("Bubble Solution #" + mostCostEffective + " is the most cost effective");