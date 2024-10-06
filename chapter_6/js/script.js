// page 231
var access = document.getElementById("code9");
var code = access.innerHTML;

code = `${code} midnight`;
alert (code);

// page 239
var planet = document.getElementById("greenplanet");
planet.innerHTML = "Red Alert: hit by phaser fire!";
console.log(planet.innerHTML);

// var myBlog = document.getElementsByClassName("h2blog");
// myBlog.setAttribute("class", "blog");

let highNumArr = [2, 74, 90, 154, 88, 24];
let highNumHolder = 0;

function showhighNum () {

  for (i = 0; i < highNumArr.length; i++) {
    if (highNumArr[i] > highNumHolder) {
      highNumHolder = highNumArr[i];
    }
  }
  return highNumHolder;
}

let newHighNum = showhighNum ();
console.log(`The highest number in the array is ${newHighNum} at index ${highNumArr.indexOf(newHighNum)}`);
console.log(`The length of the array is ${highNumArr.length}`);
console.log(`The highest index is ${highNumArr.length - 1}`);

var scoop = document.getElementById("raspberry");
var altText = scoop.getAttribute("alt");

if (altText == null) {
  console.log("Oh, I guess there isn't an alt attribute");
} 
else {
  console.log("I can't see the image in the console,");
  console.log(" but I'm told it looks like " + altText);
}