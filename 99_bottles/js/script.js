
//
let age = 15;
let userName = "Owen";

if (age > 14) {
  alert ("Sorry this page is for kids only!");
} else {
  alert ("Welcome " + userName + "!");
}

let scoops = 5;
while (scoops > 0) {
  console.log("Another scoop!<br>" + scoops);
  scoops = scoops - 1;
}

console.log("Life without ice cream isn't the same");

//
console.log(`**********************************`);

let birthdayPerson = "Joe";
let i = 0;

while (i < 2) {
  console.log("Happy Birthday to you." + i);
  i = i + 1;
}

console.log("Happy Birthday dear " + birthdayPerson + ",");
console.log("Happy Birthday to you.");

console.log(`**********************************`);
//

let word = "bottles";
let singleWord = "bottle";
let count = 99;
let chorus = "Take one down pass it around";

// if count is greater than 0 the final line will never run
while (count >= 0) {
  if (count > 1) {
    console.log(`${count} ${word} of beer on the wall`);
    console.log(`${count} ${word} of beer`);
    console.log(`${chorus}`);
  }
  else if (count === 1) {
    console.log(`${count} ${singleWord} of beer on the wall`);
    console.log(`${count} ${singleWord} of beer`);
    console.log(`${chorus}`);
  }
  else {
    console.log(`No more ${word} of beer on the wall`);
  }
  count = count - 1;
}
