// This is counter
//  This program does the following:
// 1. Asks for a number from 2 to 20
// 2. Asks for a number based on their first input
// 3. tell if the number is odd, even, positive, negative, decimal or integer.
// 4. Total all the odd, even, positive, negative, decimal or integer.
// Author is Norhajar Gabuya
function runActivity() {
  let num = Number(prompt("Give me a number from 2 to 20."));

  if (num < 2 || num > 20) {
    // This is error messege
    console.error("Invalid input. Please enter a number between 2 and 20.");
  } else {
    // List
    let count = 0;
    let evennum = 0;
    let oddnum = 0;
    let posnum = 0;
    let neganum = 0;
    let integernum = 0;
    let decimalnum = 0;

    for (i = 1; i <= num; i++) {
      let answer = Number(prompt("Give me # " + i + ":"));
      count++;
      if (answer === 0) {
        // console.log("Zero is neither even nor odd number");
      } else {
        // this is positive and negative
        if (answer >= 0) {
          //   console.log("This number is positive!");
          posnum++;
        } else {
          //   console.log("This number is negative!");
          neganum++;
        }
        // this is even and odd number
        if (answer % 2 == 0) {
          //   console.log("This number is even!");
          evennum++;
        } else (answer % 1 == 0 ){
          //   console.log("This number is odd!");
          oddnum++;
        }
      }

      // this is integer and decimal
      if (answer % 1 == 0.0) {
        // console.log("This number is integer");
        integernum++;
      } else {
        // console.log("This number is decimal");
        decimalnum++;
      }
    }
    // This is the outcome
    console.log("Number Count: " + count);
    console.log("Even numbers: " + evennum);
    console.log("Odd numbers: " + oddnum);
    console.log("Positive numbers: " + posnum);
    console.log("Negative numbers: " + neganum);
    console.log("Integers: " + integernum);
    console.log("Decimal numbers: " + decimalnum);
  }
}
