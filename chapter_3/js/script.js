function clunk (times) {
  var num = times;
  while (num > 0) {
    //this line calls for the function display
    display ("clunk");
    num = num - 1;
  }
}

function thingamajig (size) {
  var facky = 1;
  // this is a global variable because the word var/let is missing.(see page 114 bulletpoint 11)
  clunkCounter = 0;
  if (size == 0) {
    //this line calls for the function display
    display ("clunk");
  }
  else if (size == 1) {
    //this line calls for the function display
    display ("thunk");
  }
  else {
    while (size > 1) {
      // this line gives facky parameter a new value
      facky = facky * size;
      size = size - 1;
    }
    //this line calls for the function clunk with the parameter facky
    clunk(facky);
  }
}

function display (output) {
  console.log(output);
  clunkCounter = clunkCounter + 1;
}

var clunkCounter = 0;
thingamajig (5);
console.log(clunkCounter);