function run() {
  const store_Name = "Gabuya's Fruit Store!";
  alert("Welcome to " + store_Name);
  const product_Stock = {};

  choice = 0;
  while (choice !== 5) {
    choice = Number(
      prompt(
        "Select desired action. \n 1. Add item \n 2. Restock \n 3. Check Price \n 4. Sell \n 5. Stop"
      )
    );
    if (choice === 1) {
      addItem();
    } else if (choice === 2) {
      restock();
    } else if (choice === 3) {
      checkPrice();
    } else if (choice === 4) {
      sell();
    } else if (choice === 5) {
      break;
    } else {
      console.error("Invalid choice. Please try again!");
    }
  }

  function addItem() {
    const item_Name = prompt("What Item you would like to sell?");
    const item_Price = Number(prompt("Set a price for " + item_Name));

    if (item_Price <= 0 || isNaN(item_Price)) {
      console.error("Error: Price should not be zero or negative!");
      return;
    }
    product_Stock[item_Name] = {
      price: item_Price,
      stock: 0,
    };
    console.log(
      item_Name +
        " has been added as item for sale. Each " +
        item_Name +
        "sells for PHP " +
        item_Price +
        ". Stock set to 0"
    );
  }

  function restock() {
    const item_Name = prompt("What product you would like to restock?");
    const restock_Item = Number(prompt("Enter the amount of stock to add: "));

    if (restock_Item <= 0 || isNaN(restock_Item)) {
      console.error("Error: Stock should not be negative!.");
      return;
    }
    if (!product_Stock[item_Name]) {
      console.error("Error: product name does not exist!");
      return;
    }
    product_Stock[item_Name].stock += restock_Item;

    console.log(
      restock_Item +
        "  stock has been added to  " +
        item_Name +
        ". New stock: " +
        product_Stock[item_Name].stock
    );
  }

  function checkPrice() {
    const item_Name = prompt(
      "Which product you would like to Check the price?"
    );
    const item_Amount = Number(prompt("Enter the amount of stock to add: "));

    if (!product_Stock[item_Name]) {
      console.error("Error: product name does not exist!");
      return;
    }
    const total_Price = product_Stock[item_Name].price * item_Amount;

    console.log(
      item_Amount + " of " + item_Name + " is worth PHP " + total_Price + "."
    );
  }

  function sell() {
    const item_Name = prompt("What product would you like to sell:");
    const item_Sell = Number(prompt("Enter the amount to buy:"));

    if (!product_Stock[item_Name]) {
      console.error("Error: product name does not exist!");
      return;
    }
    if (item_Sell <= 0 || isNaN(item_Sell)) {
      console.error("Error: Amount should not be negative!..");
      return 0;
    }
    const item = product_Stock[item_Name];

    if (item_Sell > item.stock) {
      console.error("Error: Not enought stock!");
      return;
    }
    item.stock -= item_Sell;
    const total_Price = item.price * item_Sell;
    console.log(
      "Sold " +
        item_Sell +
        " of " +
        item_Name +
        " for " +
        total_Price +
        ". New stock: " +
        item.stock
    );
  }
}

// OTHER EXAMPLE
// const fruit_name = [];
// const fruit_price = [];
// const fruit_stock = [];

// const fruit_suggestion = ["apple", "banana", "cherry", "durian", "eggplant"];
// const price_suggestion = ["10", "20", "30", "40", "50"];

// function addItem() {
//   let fruitchoice = prompt(
//     `Please enter a fruit \nTotal Fruits: ${fruit_name.length}`,
//     fruit_suggestion[fruit_name.length]
//   );
//   if (fruitchoice == "") {
//     alert("error name cannot blank\nreturningto menu");
//     return 0;
//   }
//   let pricetemp = 0;
//   pricetemp = Number(
//     prompt(
//       `price of ${fruitchoice} in PHP`,
//       price_suggestion[fruit_name.length]
//     )
//   );
//   if (pricetemp > 0) {
//     fruit_name.push(fruitchoice);
//     fruit_price.push(pricetemp);
//     fruit_stock.push(0);
//     console.log(
//       `${fruitchoice} added as item for sale. Each ${fruitchoice} sells for ${pricetemp}. Stock set to 0`
//     );
//   } else {
//     alert("error invalid price \nreturningto menu");
//     return 0;
//   }
// }
// function restock() {
//   let fruitchoice = prompt(`Please enter a fruit you would like to restock`);
//   if (fruit_name.includes(fruitchoice)) {
//     let index = fruit_name.indexOf(fruitchoice);
//     stocktemp = Number(
//       prompt(
//         `the current stock of ${fruitchoice} is ${fruit_stock[index]}\n How many would you like to add?}`
//       )
//     );
//     if (stocktemp > 0) {
//       fruit_stock[index] = fruit_stock[index] + stocktemp;
//       console.log(
//         `${stocktemp} stock has been added to ${fruitchoice}. New stock: ${fruit_stock[index]}`
//       );
//     } else {
//       alert("error invalid restock quantity\nreturning to menu");
//       return 0;
//     }
//   } else {
//     alert("error fruit not found or blank input\nreturning to menu");
//     return 0;
//   }
// }
// function checkPrice() {
//   let fruitchoice = prompt(`What item would you like to know the price of`);
//   if (fruit_name.includes(fruitchoice)) {
//     let index = fruit_name.indexOf(fruitchoice);
//     temp = Number(
//       prompt(`how many ${fruitchoice} would you like to know the price`)
//     );
//     if (temp > 0) {
//       let price = fruit_price[index] * temp;
//       console.log(` ${temp} of ${fruitchoice} is worth ${price}`);
//     } else {
//       alert("error quantity for price inquiry invalid\nreturning to menu");
//       return 0;
//     }
//   } else {
//     alert("error fruit not found or blank input\nreturning to menu");
//     return 0;
//   }
// }
// function sell() {
//   let fruitchoice = prompt(`Please enter a fruit you would like to sell`);
//   if (fruit_name.includes(fruitchoice)) {
//     let index = fruit_name.indexOf(fruitchoice);
//     stocktemp = Number(
//       prompt(
//         `the current stock of ${fruitchoice} is ${fruit_stock[index]}\n How many would you like to sell?}`
//       )
//     );
//     if (stocktemp > fruit_stock[index]) {
//       alert(
//         "invalid purchase quantity, stock is less than desired quantity\nreturning to menu"
//       );
//       return 0;
//     }
//     if (stocktemp > 0) {
//       fruit_stock[index] = fruit_stock[index] - stocktemp;
//       console.log(
//         `${stocktemp} quantity of ${fruitchoice} priced at ${
//           fruit_price[index]
//         } each has been purchased for a total of ${
//           fruit_price[index] * stocktemp
//         }. \n New stock: ${fruit_stock[index]}`
//       );
//     } else {
//       alert("error invalid sales quantity\nreturning to menu");
//       return 0;
//     }
//   } else {
//     alert("error fruit not found or blank input\nreturning to menu");
//     return 0;
//   }
// }

// function debug() {
//   console.log(`FRUITNAME | PRICE | STOCK`);
//   for (let i = 0; i < fruit_name.length; i++) {
//     console.log(
//       `${fruit_name[i]} | PHP ${fruit_price[i]} | ${fruit_stock[i]} pcs`
//     );
//   }
// }

// function runActivity() {
//   let i = 0;
//   while (i == 0) {
//     var choice = Number(
//       prompt("(1) Add new item (2) Restock (3) Check price (4) Sell (5) Stop")
//     );
//     //debug menu
//     // if (choice == 6) {
//     //   debug();
//     // }
//     if (choice == 1) {
//       addItem();
//     } else if (choice == 2) {
//       restock();
//     } else if (choice == 3) {
//       checkPrice();
//     } else if (choice == 4) {
//       sell();
//     } else if (choice == 5) {
//       i = 1;
//       location.reload(); // resets all variables.
//     } else {
//       alert("invalid menu input");
//     }
//   }
// }

// HERE OTHER MORE SAMPLE
// function runActivity() {
//   const storeName = "Frutasan ni KUA TENTEN";
//   alert(storeName);
//   const inventory = {};

//   function addItem() {
//     const itemName = prompt("Enter the name of the item you like to sell");
//     const itemPrice = Number(prompt("Enter the sell price of the item:"));

//     if (itemPrice <= 0 || isNaN(itemPrice)) {
//       console.log("Error: Invalid Price entered.");
//       alert("Error: Invalid Price entere.d");
//       return;
//     }
//     inventory[itemName] = {
//       price: itemPrice,
//       stock: 0,
//     };
//     console.log(
//       itemName +
//         " added as item for sale. Each " +
//         itemName +
//         " sells for " +
//         itemPrice +
//         "PHP. stock set to 0."
//     );
//   }

//   function reStock() {
//     const itemName = prompt("Enter the name of the item you like to restock");
//     const stockToAdd = Number(prompt("Enter the amount of stock to add:"));

//     if (stockToAdd <= 0 || isNaN(stockToAdd)) {
//       console.log("Error: Invalid amount entered.");
//       alert("Error: Invalid amount entered");
//       return;
//     }
//     if (!inventory[itemName]) {
//       console.log("Error: Invalid item name entered.");
//       alert("Error: Invalid item name entered");
//       return;
//     }
//     inventory[itemName].stock += stockToAdd;

//     console.log(
//       stockToAdd +
//         "  stock has been added to  " +
//         itemName +
//         ". New stock: " +
//         inventory[itemName].stock
//     );
//   }

//   function checkPrice() {
//     const itemName = prompt("Enter the name of the item to check the price");
//     const itemAmount = Number(
//       prompt("Enter the amount of the item or piece you want to check:")
//     );

//     if (!inventory[itemName]) {
//       console.log("Error: Invalid item name entered.");
//       alert("Error: Invalid item name entered.");
//       return;
//     }
//     const totalPrice = inventory[itemName].price * itemAmount;

//     console.log(
//       itemAmount + " of " + itemName + " is worth " + totalPrice + "PHP."
//     );
//   }

//   function sell() {
//     const itemName = prompt("Enter the name of the item to sell:");
//     const amountToBuy = Number(prompt("Enter the amount to buy:"));

//     if (!inventory[itemName]) {
//       console.log("Error: Invalid item name entered.");
//       alert("Error: Invalid item name entered.");
//       return;
//     }
//     if (amountToBuy <= 0 || isNaN(amountToBuy)) {
//       console.log("Error: Invalid Amount entered.");
//       alert("Error: Invalid Amount entered.");
//       return 0;
//     }
//     const item = inventory[itemName];

//     if (amountToBuy > item.stock) {
//       console.log("Error: Insufficient stock.");
//       alert("Error: Insufficient stock.");
//       return;
//     }
//     item.stock -= amountToBuy;
//     const totalPrice = item.price * amountToBuy;
//     console.log(
//       "Sold " +
//         amountToBuy +
//         " of " +
//         itemName +
//         " for " +
//         totalPrice +
//         ". New stock: " +
//         item.stock
//     );
//   }

//   let choice = 0;

//   while (choice !== 5) {
//     choice = Number(
//       prompt("1) Add new item (2) Restock (3) Check price (4) Sell (5) Stop")
//     );
//     switch (choice) {
//       case 1:
//         addItem();
//         break;
//       case 2:
//         reStock();
//         break;
//       case 3:
//         checkPrice();
//         break;
//       case 4:
//         sell();
//         break;
//       case 5:
//         break;
//       default:
//         console.log("Error: Invalid choice.");
//         break;
//     }
//   }
// }

// OTHER MORE SAMPLE
// function run() {
//   const store_Name = "Gabuya's Fruit Store!";
//   alert("Welcome to " + store_Name);
//   const product_Stock = {};

//   choice = 0;
//   while (choice !== 5) {
//     choice = Number(
//       prompt(
//         "Select desired action. \n 1. Add item \n 2. Restock \n 3. Check Price \n 4. Sell \n 5. Stop"
//       )
//     );
//     if (choice === 1) {
//       addItem();
//     } else if (choice === 2) {
//       restock();
//       console.log("Restock");
//     } else if (choice === 3) {
//       checkPrice();
//     } else if (choice === 4) {
//       sell();
//     } else if (choice === 5) {
//       break;
//     } else {
//       console.error("Invalid choice. Please try again!");
//     }
//   }
// }

// const item_Name = [];
// const price = [];
// const stock = [];

// function addItem() {
//   let add_product_Name = prompt("Name of Fruit");
//   let add_product_Price = Number(prompt("Price of the Fruit"));
//   let add_product_Stock = 0;

//   item_Name.push(add_product_Name);
//   price.push(add_product_Price);
//   stock.push(add_product_Stock);
//   console.log(
//     add_product_Name +
//       "added as item for sale." +
//       add_product_Name +
//       " sells for" +
//       add_product_Price +
//       ". Stock set to 0"
//   );
// }

// function restock() {
//   let add_product_Name = prompt("Name of Fruit");
//   let amount_stock = Number(prompt("Enter amount of stock: "));
//   if (item_Name.includes(add_product_Name)) {
//     let index = item_Name.indexOf(add_product_Name);
//     stock[index] = stock[index] + amount_stock;
//     console.log(
//       add_product_Name + "stock has been added. New stock" + stock[index]
//     );
//   } else {
//     console.error(add_product_Name + "is does not exist in system");
//   }
// }

// function checkPrice() {
//   let add_product_Name = prompt("Name of Fruit");
//   let amount_price = Number(prompt("Nimber of fruit you want to buy?"));
//   if (item_Name.includes(add_product_Name)) {
//     let index = item_Name.indexOf(add_product_Name);
//     let total = price[index] * amount_price;
//     console.log(
//       add_product_Name + " of " + add_product_Name + "is worth" + total
//     );
//   } else {
//     console.error(add_product_Name + "is does not exist in system");
//   }
// }

// function sell() {
//   let add_product_Name = prompt("Name of Fruit");
//   let amount_sell = Number(prompt("Number you want to sell"));
//   if (item_Name.includes(add_product_Name)) {
//     let index = item_Name.indexOf(add_product_Name);
//     let total_sell = price[index] * amount_sell;
//     stock[index] = stock[index] - amount_sell;

//     console.log(
//       "Item Sold: " +
//         add_product_Name +
//         "with the total amount of" +
//         amount_sell +
//         "stock :" +
//         total_sell
//     );
//   } else {
//     console.error(add_product_Name + "is does not exist in system");
//   }
// }
