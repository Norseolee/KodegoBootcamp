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
