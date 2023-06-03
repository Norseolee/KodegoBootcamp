// loops
//  loops run repeatedly until it become false
// to make it unli comment out x+=;

// i want to output 1- 100 number
// function runActivity() {
//   let x = 0;

//   while (x <= 100) {
//     console.log(x);
//     x++;
//   }
// }

// keep on looping aslong as user wants (while loop)
// function runActivity() {
//   let x = false;
//   let num;
//   let choice;

//   while (x == false) {
//     num = Number(prompt("Give me a number."));
//     if (num == 0) {
//       console.log("Zero is neither even nor odd.");
//     } else if (num % 2 == 0) {
//       console.log("That number is even!");
//     } else {
//       console.log("That number is odd!");
//     }
//     // dito gagawa tayo if gusto nila ituloy or i end na program
//     choice = Number(
//       prompt("WOuld you like to enter another number? any key: Yes, 0 = No")
//     );
//     if (choice == 0) {
//       x = true;
//     }
//   }
// }

// if you want to run once or do loops
// function runActivity() {

//   let x = 0;
//   while (x <= 10) {
//     x++;
//   }
//   console.log(x);
//   let y = 0;
//   do {
//     y++;
//   } while (y <= 10);
//   console.log(y);
// }
// if nag false yung unang, yung do  loops will always run kahit one time kahit false din sila. then they will check if true. and will added from. ex. 20 20 if true, 20 21.

// for loops good for set like 10 times 2 times to loop and while loops is unli
// Loops are handy, if you want to run the same code over and over again, each time with a different value.
// Expression 1 sets a variable before the loop starts for statement
// function runActivity() {
//   for (let i = 0; i <= 10; i++) {
//     let draw = "$";
//     for (let j = 0; j < i; j++) {
//       draw += "$";
//     }
//     console.log(draw);
//   }
// }

//  other example. always remember that 0 is always counted
// function runActivity() {
//   let total = 0;
//   for (let i = 0; i < 3; i++) {
//     total += Number(prompt("Give me a number."));
//   }
//   console.log(total);
// }

function runActivity() {
  let n = Number(prompt("Give me a number."));

  for (let i = 0; i < n * 2; i++) {
    console.log("Bacon");
  }
}
