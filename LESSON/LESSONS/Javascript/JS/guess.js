// do loops
function runActivity() {
  let answer = "chicken";
  let x = false;

  while (x == false) {
    let guess = prompt("Try to guess my animal!");
    if (guess == answer) {
      console.log("You got it! The answer is " + answer);
      x = true;
    } else console.log(guess + " is not my animal!");
  }
}
