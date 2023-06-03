// This program does the follwing:
// 1. Ask the user to select a product.
// 2. Sell the user a product.
// author: Norhajar Gabuya

function runActivity() {
  let cash = 1000;
  let choice = Number(
    prompt("Would you like to buy an aqua flask for PHP600? 0: Yes, 1: No")
  );
  if (choice == 0 && cash >= 600) {
    console.log("Thank you for buying my Aquaflask!");
    cash -= 600;
  } else {
    console.log("Aww too bad.");
  }
}

choice = Number(
  Prompt(
    "Would you like to buy a chicken joy bucket meal for PHP500? 0: Yes, 1: No"
  )
);
if (choice == 0 && cash >= 500) {
  console.log("bida and saya!");
  cash -= 500;
} else {
  console.log(Salbahe);
}

console.log("You have " + cash + " left.");
