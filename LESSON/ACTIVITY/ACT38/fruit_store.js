function runActivity() {
  const fruit_name = [];
  const fruit_price = [];
  let x = false;
  let fruit_avail = false;
  let buy_again = false;

  while (x == false) {
    let add_name = prompt("Give a fruit a name");
    let add_price = Number(prompt("Give fruit a price"));

    // ERROR MESSEGE FOR NEGATIVE PRICE
    if (add_price < 0) {
      console.error("Invalid price. Price cannot be negative.");
      break;
    }

    fruit_name.push(add_name);
    fruit_price.push(add_price);

    //LET USER DECIDE IF THEY WANT TO ADD MORE FRUITS
    let choice = Number(
      prompt("Would you like to add another fruit? 0 = No, Any key = Yes")
    );
    // IF NO
    if (choice === 0) {
      x = true;
      //   AFTER ADDING ALL FRUITS. PRINT THE ADDED FRUITS AND THEIR PRICES
      for (let i = 0; i < fruit_name.length; i++) {
        console.log(fruit_name[i] + " | " + fruit_price[i]);
      }

      while (buy_again == false) {
        // LET THEM CHOOSE WANT THEY WANTED TO BUY
        let buy_choice = prompt("What fruit do you want to buy?");
        for (let i = 0; i < fruit_name.length; i++) {
          if (buy_choice === fruit_name[i]) {
            fruit_avail = true;
          }
        }
        //  ERROR MESSEGE FOR FRUIT
        if (!fruit_avail) {
          console.error("Fruit not found.");
          break;
        }

        //   LET THEM CHOOSE HOW MANY THEY WANT
        let many_choice = Number(
          prompt("How many " + buy_choice + " do you want to buy?")
        );
        //  ERROR MESSEGES FOR QUANTITY
        if (many_choice < 0) {
          console.error("Invalid quantity. Quantity cannot be negative.");
          break;
        }

        //   CALCULATE AND PRINT THE TOTAL PRICE FOR THE SELECTED FRUITS
        for (let i = 0; i < fruit_name.length; i++) {
          let total = many_choice * fruit_price[i];

          if (fruit_name[i] == buy_choice) {
            console.log(fruit_name[i] + " PHP" + total);
          }
        }
        let ask_buy_again = Number(
          prompt("Would you like to buy more? 0 = No, Any key = Yes")
        );
        if (ask_buy_again == 0) {
          buy_again = true;
          break;
        }
      }
    }
  }
}

// HERE OTHER SMAPLE
// This program does the following.
// 1. Ask the user for  a fruit and ask the user for the fruit price.
// 2. Shows the user the fruits and it's inputted price
// 3. Prompts the user for a fruit they want to buy and how many fruit they want to purchase
// 4. Displays the total price for the purchase of the fruit.

// function runActivity() {
//   const fruit_name = [];
//   const fruit_price = [];
//   // const fruit_basket = [];
//   // const fruit_quantity = [];
//   let x = false;
//   let y = false;

//   while (x == false) {
//     let choice_fruit = prompt("What fruit would you like to add?");
//     let choice_price = Number(prompt("How much is the fruit?"));
//     if (choice_price >= 0) {
//       fruit_name.push(choice_fruit);
//       fruit_price.push(choice_price);

//       let choice_repeat = prompt(
//         "Would you like to add another fruit?\n0: No\nANY KEY: Yes"
//       );
//       if (choice_repeat === "0") {
//         x = true;
//       }
//     } else {
//       console.error("ERROR: Negative price!");
//     }
//   }

//   for (let i = 0; i < fruit_name.length; i++) {
//     console.log(fruit_name[i] + " | PHP " + fruit_price[i]);
//   }

//   while (y == false) {
//     let choice_basket = prompt("What fruit would you like to buy?");
//     let choice_quantity = Number(prompt("How many?"));
//     if (choice_quantity >= 0) {
//       // fruit_basket.push(choice_basket);
//       // fruit_quantity.push(choice_quantity);
//       let fruit_found = false;
//       for (let i = 0; i < fruit_name.length; i++) {
//         if (choice_basket == fruit_name[i]) {
//           fruit_found = true;
//           console.log(
//             "Total price for " +
//               choice_quantity +
//               " " +
//               fruit_name[i] +
//               ": PHP " +
//               choice_quantity * fruit_price[i]
//           );
//         }
//       }
//       if (fruit_found == false) {
//         console.error("ERROR: Fruit not found!");
//       }
//       let order = prompt(
//         "Would you like to buy another fruit?\n0: No\nANY KEY: Yes"
//       );
//       if (order === "0") {
//         y = true;
//       }
//     } else {
//       console.error("ERROR: Negative quantity!");
//     }
//   }
// }

// HERE OTHER MORE CODE
// function runActivity() {
//   const fruit = [];
//   const price = [];

//   let x = true;
//   while (x) {
//     let fruit_name = prompt("What type of fruit do you want?");
//     let fruit_price = Number(prompt("Price of fruits?"));
//     if (fruit_price >= 0) {
//       fruit.push(fruit_name);
//       price.push(fruit_price);
//       let choice = prompt(
//         "Would you like to add another fruit? 0: No, Any key: Yes"
//       );
//       if (choice == "0") {
//         break;
//       }
//     } else {
//       console.error("ERROR: Negative price!");
//     }
//   }

//   for (let i = 0; i < fruit.length; i++) {
//     console.log(fruit[i] + " is worth " + "PHP" + price[i] + "!\n");
//   }

//   while (x) {
//     let choice = prompt(
//       "What kind of fruit would you like to buy? Type: no to exit."
//     );
//     if (choice != "no") {
//       let quantity_item = Number(
//         prompt("How many " + choice + " would you like?")
//       );
//       if (quantity_item >= 0) {
//         let fruit_found = false;
//         for (let i = 0; i < fruit.length; i++) {
//           if (fruit[i] == choice) {
//             fruit_found = true;
//             console.log(
//               "You have successfully purchased a " +
//                 fruit[i] +
//                 " worth " +
//                 "PHP" +
//                 price[i] * quantity_item +
//                 "!"
//             );
//           }
//         }
//         if (fruit_found == false) {
//           console.error("ERROR: Fruit not found");
//         }
//       } else {
//         console.error("ERROR: Negative quantity!");
//       }
//     } else {
//       x = false;
//     }
//   }
// }
