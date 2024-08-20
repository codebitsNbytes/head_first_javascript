var chevy = {
  make: "Chevy",
  model: "Bel Air",
  year: 1957,
  color: "Red",
  passengers: 2,
  convertible: false,
  mileage: 1021,
  numberOfDoors: 2,
  topSpeed: 118,
  started: false,

  start: function () {
    this.started = true;
  },

  stop: function () {
    this.started = false;
  },

  drive: function () {
    if (this.started) {
      alert(`${this.make} ${this.model} goes zoom zoom!`);
    }
    else {
      alert(`You need to start the engine first.`);
    }
  }
};

var cadi = {
  make: "General Motors",
  model: "Cadillac",
  year: 1955,
  color: "Tan",
  passengers: 5,
  convertible: false,
  mileage: 12.892,
  numberOfDoors: 2,
  topSpeed: 122,
  bucketSeat: true,
  started: false,

  start: function () {
    this.started = true;
  },

  stop: function () {
    this.started = false;
  },

  drive: function () {
    if (this.started) {
      alert(`${this.make} ${this.model} goes zoom zoom!`);
    }
    else {
      alert(`You need to start the engine first.`);
    }
  }
};

var fiat = {
  make: "Fiat",
  model: "500",
  year: 1957,
  color: "Medium Blue",
  passengers: 2,
  convertible: false,
  mileage: 88000,
  started: false,
  fuel: 0,

  start: function () {
    this.started = true;
    if (this.fuel > 0) {
      alert (`${this.fuel} is on the tank`);
    }
    else if (this.fuel == 0) {
        alert (`The car is on empty, fill up before starting!`);
    }
  },
  stop: function () {
    this.started = false
  },
  drive: function () {
    if (this.started) {
      if (this.fuel > 0) {
        alert (`${this.make} ${this.model} goes zoom zoom!`);
        this.fuel = this.fuel - 1;
      }
      else {
        alert (`Uh oh, out of fuel.`);
        this.stop();
      }
    }
    else {
      alert("You need to start the engine first");
    }
  },
  addFuel: function (amount) {
    this.fuel = this.fuel + amount;
  }
};

fiat.drive ();
fiat.start ();
fiat.drive ();
fiat.addFuel (2);
fiat.start ();
fiat.drive ();
fiat.drive ();
fiat.drive ();
fiat.stop ();

/*
var dog = {
  name: "Fido",
  weight: 20.2,
  age: 4,
  breed: "mixed",
  activity: "fetch balls",
};

var bark;

if (dog.weight > 20) {
  bark = "WOOF WOOF";
} else {
  bark = "woof woof";
}

var speak = dog.name + " says " + bark + " when he wants to " + dog.activity;
console.log(speak);


var taxi = {
  make: "Webville Motors",
  model: "Taxi",
  year: 1955,
  color: "yellow",
  passengers: 4,
  convertible: false,
  mileage: 281341,
  started: false,

  start: function () {
    this.started = true;
  },

  stop: function () {
    this.started = false;
  },

  drive: function () {
    if (this.started) {
      alert(`${this.make} ${this.model} goes zoom zoom!`);
    }
    else {
      alert(`You need to start the engine first.`);
    }
  }
};

function prequal (car) {
  if (car.mileage > 10000) {
    return false;
  } 
  else if (car.year > 1960) {
    return false;
  }
  return true;
};

var worthALook = prequal (chevy);

if (worthALook) {
  console.log(`You gotta check out this ${chevy.make} ${chevy.model}`);
}
else {
  console.log(`You should really pass on the ${chevy.make} ${chevy.model}`);
}

/* page 197 */
/*
function makeCar() {
  var makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
  var models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
  var years = [1955, 1957, 1948, 1954, 1961];
  var colors = ["red", "blue", "tan", "yellow", "white"];
  var convertible = [true, false];
  var rand1 = Math.floor(Math.random() * makes.length);
  var rand2 = Math.floor(Math.random() * models.length);
  var rand3 = Math.floor(Math.random() * years.length);
  var rand4 = Math.floor(Math.random() * colors.length);
  var rand5 = Math.floor(Math.random() * 5) + 1;
  var rand6 = Math.floor(Math.random() * 2);
  var car = {
    make: makes[rand1],
    model: models[rand2],
    year: years[rand3],
    color: colors[rand4],
    passengers: rand5,
    convertible: convertible[rand6],
    mileage: 0
  };
return car;
}

function displayCar(car) {
  console.log("Your new car is a " + car.year + " " + car.make + " " + car.model);
}

var carToSell = makeCar();
displayCar(carToSell);

var eightBall = {
  index: 0,
  advice: ["yes", "no", "maybe", "not a chance"],
  shake: function () {
    this.index = this.index + 1;
    if (this.index >= this.advice.length) {
      this.index = 0;
    }
  },
  look: function () {
    return this.advice[this.index];
  }
};

eightBall.shake();
console.log(eightBall.look());
cadi.start();
cadi.drive();
cadi.stop();
chevy.start();
chevy.drive();
chevy.stop();
taxi.start();
taxi.drive();
taxi.stop();

console.log(`***** iterate throught an object's properties *****`);
for (var prop in chevy) {
  console.log(`${prop}: ${chevy[prop]}`);
}
console.log(`***** end of iteration *****`);

// create a function for this 
let arrCol = [2, 4, 7, 8, 21];
let bucket = 0;

function sumArr () {
  for (let i = 0; i < arrCol.length; i++) {
    bucket = bucket + arrCol[i];
    // console.log(bucket);
  }
  return bucket;
}

let sumOfArr = sumArr();
let avrSum = (sumOfArr / arrCol.length);
console.log(`the sum of the array is ${sumOfArr} and the average is ${avrSum}`);
*/