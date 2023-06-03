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
