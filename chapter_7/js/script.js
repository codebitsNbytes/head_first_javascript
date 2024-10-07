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