
var x;

if (x == undefined) {
  console.log(`No value has been assigned to x`);
}

var customer = {
  name: "Jenny"
};

if (customer.phoneNumber == undefined) {
  console.log(`Customer phonenumber is not in the database`);
}

var test1 = "abcdef";
var test2 = 123;
var test3 = true;
var test4 = {};
var test5 = [];
var test6;
var test7 = {"abcdef": 123};
var test8 = ["abcdef", 123];
function test9 () {return "abcdef"};
var test10 = null;

console.log(`Test 1 is ${typeof test1}`);
console.log(`Test 2 is ${typeof test2}`);
console.log(`Test 3 is ${typeof test3}`);
console.log(`Test 4 is ${typeof test4}`);
console.log(`Test 5 is ${typeof test5}`);
console.log(`Test 6 is ${typeof test6}`);
console.log(`Test 7 is ${typeof test7}`);
console.log(`Test 8 is ${typeof test8}`);
console.log(`Test 9 is ${typeof test9}`);
console.log(`Test 10 is ${typeof test10}`);

var header = document.getElementById("header");

if (header == null) {
  console.log(`No header to be find`);
}

if (99 == "99") {
  console.log("A number equals a string");
} else {
  console.log("No way a number equals a string");
}

// page 293
function lieDetectorTest () {
  var lies = 0;

  var stolenDiamond = {};
  if (stolenDiamond) {
    console.log("You stole the diamond");
    lies++;
    // truthy
  }
  var car = {
    keysInPocket: null
  };
  if (car.keysInPocket) {
    console.log("Uh oh, guess you stole the car!");
    lies++;
    // falsey
  }
  if (car.emptyGasTank) {
    console.log("You drove the car after you stole it!");
    lies++;
    // falsey
  }
  var foundYouAtTheCrimeScene = [];
  if (foundYouAtTheCrimeScene) {
    console.log("A sure sign of guilt");
    lies++;
    // truthy
  }
  if (foundYouAtTheCrimeScene[0]) {
    console.log("Caught with a stolen item!");
    lies++;
    // truthy ** so this one is falsey. Is it because of the 0 in the array?
    // foundYouAtTheCrimeScene[0] index 0 is undefined, that's why it's falsey
  }
        
  var yourName = " ";
  if (yourName) {
    console.log("Guess you lied about your name");
    lies++;
  }
  return lies;
}
var numberOfLies = lieDetectorTest ();
console.log("You told " + numberOfLies + " lies");
if (numberOfLies >= 3) {
  console.log("Guilty as charged");
}

// page 294
console.log("*****************************");
console.log("   ");

var text = "YOU SHOULD NEVER SHOUT WHEN TYPING";
var presentableText = text.toLowerCase();
if (presentableText.length > 0) {
  alert(presentableText);
}
console.log("   ");

console.log("*****************************");

console.log("   ");
// page 294
function showHugsAndKisses () {
  var emot = "XOxxOO";
  var hugs = 0;
  var kisses = 0;

  emot = emot.trim();
  emot = emot.toUpperCase();

  for (var i = 0; i < emot.length; i++) {
    if (emot.charAt(i) === "X") {
      hugs++;
    }
    else if (emot.charAt(i) === "O") {
      kisses++;
    }
  }
  return `You are getting ${kisses} kisses and ${hugs} hugs`;
}

var showLove = showHugsAndKisses();

console.log(showLove);

console.log("   ");

console.log("*****************************");

console.log("   ");

// page 298 indexOf method
var phrase = "the cat in the hat";
var index = phrase.indexOf("cat"); // the word cat starts at index 4

console.log(`there's a cat sitting at index ${index}`);

index = phrase.indexOf("the", 5);
console.log(`there's a "the" sitting at index ${index}`);

console.log("   ");

console.log("*****************************");

console.log("   ");

// page 299 substring method
var data = "name|phone|address";
var val = data.substring(5, 10); // start counting from string 5 to 10 (10 is not included so the last index will be 9)

console.log(`Substring is "${val}"`);

val = data.substring(5); // start counting from index 5 till the end of the string

console.log(`Substring is now "${val}"`);

console.log("   ");

console.log("*****************************");

console.log("   ");

// page 299 split method
console.log("page 299 split method");
var vals = data.split("|");

console.log("Split array is ", vals);

console.log("   ");

console.log("*****************************");

// page 300 some examples self created
var remove = " this is a test ";
var noEmptySpace = remove.trim();
var newString = remove.replace("test", "TEST");

console.log(`${remove}`);
console.log(`${noEmptySpace}`);
console.log(`${newString}`);

console.log("   ");

console.log("*****************************");

// page 301
function validate (phonenumber) {
  if (phonenumber.length !== 8) {
    return false;
  }
  for (var i = 0; i < phonenumber.length; i++) {
    if (i === 3) {
      if (phonenumber.charAt(i) !== "-") {
        return false;
      }
    }
    // NaN never equals any other value, including itself, so to test for NaN use the function isNaN
    else if (isNaN(phonenumber.charAt(i))) {
      return false;
    }
  }
  return true;
}

var validateNumber = validate ("123-4567");

console.log(validateNumber);

// page 305
console.log("*****************************");

console.log("   ");

function Duck (sound) {
  this.sound = sound;
  this.quack = function () {console.log(this.sound);}
}

var toy = new Duck ("quack quack");

toy.quack();

console.log(typeof toy);
console.log(toy instanceof Duck);