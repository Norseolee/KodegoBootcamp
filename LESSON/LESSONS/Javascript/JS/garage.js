function run() {
  class Car {
    constructor(name, manufacturer, acceleration, speed) {
      this.name = name;
      this.manufacturer = manufacturer;
      this.acceleration = acceleration;
      this.speed = 0;
    }

    Start() {
      if (this.speed === 0) {
        this.speed = 30;
        console.log("car has been started. car speed is set to :" + this.speed);
      } else {
        this.start = true;
        console.error("car has already been started.");
      }
    }

    accelerate() {
      if (this.speed > 0) {
        this.speed += this.acceleration;
        console.log("car has been started. speed set to: " + this.speed);
      } else {
        console.log("car has not been started. start the car first!");
      }
    }

    decelerate() {
      if (this.speed > 0) {
        this.speed = this.speed / 2;
        console.log("car has been started. speed set to" + this.speed);
      } else {
        console.log("Car has not been started. start the car first!");
      }
    }

    checkSpeed() {
      console.log("current speed is" + this.speed);
    }

    stop() {
      if (this.speed > 0) {
        this.speed = 0;
        console.log("Car has been stop. speed set to 0");
      } else {
        console.log("car has not been started yet. start the car first!");
      }
    }
  }

  const name = prompt("Enter the name of the car:");
  const manufacturer = prompt("Enter the manufacturer of the car:");
  let acceleration = Number(
    prompt("Enter the acceleration of the car (in mph):")
  );

  if (name === "" && manufacturer === "") {
    console.error("Error: Please input name/manufacturer!");
  }

  if (acceleration <= 0 || isNaN(acceleration)) {
    console.error("Error: acceleration not should be Negative/alphabet!.");
    return 0;
  }

  let car = new Car(name, manufacturer, acceleration);
  choice = 0;

  while (choice !== 6) {
    //

    choice = Number(
      prompt(
        "What action you want to use? \n (1) Start \n (2) Accelerate \n (3)decelerate \n (4) Check speed \n (5) Stop \n (6) End program"
      )
    );

    //
    if (choice === 1) {
      car.Start();
    } else if (choice === 2) {
      car.accelerate();
    } else if (choice === 3) {
      car.decelerate();
    } else if (choice === 4) {
      car.checkSpeed();
    } else if (choice === 5) {
      car.stop();
    } else if (choice === 6) {
      console.log("Car program end here");
      break;
    } else {
      console.error("Error: Not part of the setting!");
    }
  }
}
