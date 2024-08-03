/* 
setTimeout (wakeUpUser, 5000);
function wakeUpUser () {
  alert("Are you going to stare at this boring page forever?");
}
*/

// let location1 = 3;
// let location2 = 4;
// let location3 = 5;
// let guess;
// let hits = 0;
// let guesses = 0;
// let isSunk = false;

// while (isSunk == false) {
//   guess = prompt("Ready, aim, fire! (enter a number from 0-6:");
//   if (guess < 0 || guess > 6) {
//     alert("Please enter a valid number");
//   } else {
//     guesses = guesses + 1;
    
//     if (guess == location1 || guess == location2 || guess == location3) {
//       alert("HIT");
//       hits = hits + 1;
//       if (hits == 3) {
//         isSunk = true;
//         alert("You sank my battleship!");
//       } else {
//         alert("MISS");
//       }
//     }
//   }
// }
// alert(`${guess / hits}`);

let randomLoc = Math.floor(Math.random() * 5);
let location1 = randomLoc;
let location2 = location1 + 1;
let location3 = location2 + 1;
let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;

while (isSunk == false) {
  // ask user for input
  guess = prompt("Ready, aim, fire! (enter a number from 0-6:");
  // if input is less than 0 or greater than 6
  if (guess < 0 || guess > 6) {
    // input invalid
    alert("Please enter a valid number");
  } else {
    // if input is correct add 1 to guess
    guesses = guesses + 1;
    // if input is equal to location1 or location2 or location3
    if (guess == location1 || guess == location2 || guess == location3) {
      // show hit message
      alert("HIT");
      // add one to hit
      hits = hits + 1;
      //if hits is equal to 3
      if (hits == 3) {
        // ship is sunk
        isSunk = true;
        alert("You sank my battleship!");
      } 
    }
    else {
      alert("MISS");
    }
  }
}
console.log(`${location1} ${location2} ${location3}`);

alert(`You took ${guesses} guesses to sink the battleship, which means your shooting accuracy was ${hits / guesses}`);


function myDog (dogName, dogWeight) {
  if (dogWeight > 20) {
    console.log(`${dogName} says WOOF WOOF`);
  } else {
    console.log(`${dogName} says woof woof`);
  }
}
myDog ("lady", 22);
myDog ("rover", 12);

function whatShallIWear (temp) {
  if (temp < 60) {
    console.log(`Wear a jacket`);
  }
  else if (temp < 70) {
    console.log(`Wear a sweater`);
  }
  else {
    console.log(`Wear t-shirt`);
  }
}
whatShallIWear (50);
whatShallIWear (80);
whatShallIWear (60);
