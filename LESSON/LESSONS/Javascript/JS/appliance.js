// array

// This program does the following:
// 1. Allow users to check product price
function runActivity() {
  const product_name = [
    "refrigerator",
    "microwave",
    "washing machine",
    "television",
  ];
  const product_price = [15000, 5000, 7000, 35000];

  //   to add more items
  let choice_num = Number(prompt("How many items would you like to add?"));
  for (let i = 0; i < choice_num; i++) {
    let choice_name = prompt("Name of product");
    let choice_price = Number(prompt("Price of product"));
    product_name.push(choice_name);
    product_price.push(choice_price);
  }

  let choice = prompt("What would you like to buy?");

  for (let i = 0; i < product_name.length; i++) {
    if (product_name[i] == choice) {
      console.log(product_name[i] + " is worth " + product_price[i]);
      break;
    }
  }
}
