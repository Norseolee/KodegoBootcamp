class Car1 {
  constructor(name, manufacturer, acceleration) {
    this.name = name;
    this.manufacturer = manufacturer;
    this.acceleration = acceleration;
    this.speed = 0;
  }

  function start() {
    if (this.speed == 0) {
      this.speed = 30;
      console.log(this.name + " has started! Current speed: " + this.speed);
    } else {
      console.error("The car has already started!");
    }
  }

  function accelerate() {
    if (this.speed > 0) {
      this.speed += this.acceleration;
      console.log("The car has accelerated! Current speed: " + this.speed);
    } else {
      console.error("The car needs to be started first!");
    }
  }

  function decelerate() {
    if (this.speed > 0) {
      this.speed /= 2;
      if (this.speed < 1) {
        this.speed = 1;
        console.log("The car can not go below 1! Current speed: " + this.speed);
      } else {
        console.log("The car has decelerated! Current speed: " + this.speed);
      }
    } else {
      console.error("The car needs to be started first!");
    }
  }

  function check_speed() {
    console.log("Current speed: " + this.speed);
  }

  function stop() {
    if (this.speed > 0) {
      this.speed = 0;
      console.log("The car has stopped. Current speed: " + this.speed);
    } else {
      console.error("The car needs to be started first!");
    }
  }
}

let name = prompt("Give me a car name.");
let manufacturer = prompt("Give me the car's manufacturer.");
let acceleration = Number(prompt("Give me the car's acceleration."));

let car1;
if(accelerate > 0){
  car1 = new Car1(name, manufacturer, acceleration);
} else {
  console.error("Error")
}