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
      console.log("Restock");
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
}

const item_Name = [];
const price = [];
const stock = [];

function addItem() {
  let add_product_Name = prompt("Name of Fruit");
  let add_product_Price = Number(prompt("Price of the Fruit"));
  let add_product_Stock = 0;

  item_Name.push(add_product_Name);
  price.push(add_product_Price);
  stock.push(add_product_Stock);
  console.log(
    add_product_Name +
      "added as item for sale." +
      add_product_Name +
      " sells for" +
      add_product_Price +
      ". Stock set to 0"
  );
}

function restock() {
  let add_product_Name = prompt("Name of Fruit");
  let amount_stock = Number(prompt("Enter amount of stock: "));
  if (item_Name.includes(add_product_Name)) {
    let index = item_Name.indexOf(add_product_Name);
    stock[index] = stock[index] + amount_stock;
    console.log(
      add_product_Name + "stock has been added. New stock" + stock[index]
    );
  } else {
    console.error(add_product_Name + "is does not exist in system");
  }
}

function checkPrice() {
  let add_product_Name = prompt("Name of Fruit");
  let amount_price = Number(prompt("Nimber of fruit you want to buy?"));
  if (item_Name.includes(add_product_Name)) {
    let index = item_Name.indexOf(add_product_Name);
    let total = price[index] * amount_price;
    console.log(
      add_product_Name + " of " + add_product_Name + "is worth" + total
    );
  } else {
    console.error(add_product_Name + "is does not exist in system");
  }
}

function sell() {
  let add_product_Name = prompt("Name of Fruit");
  let amount_sell = Number(prompt("Number you want to sell"));
  if (item_Name.includes(add_product_Name)) {
    let index = item_Name.indexOf(add_product_Name);
    let total_sell = price[index] * amount_sell;
    stock[index] = stock[index] - amount_sell;

    console.log(
      "Item Sold: " +
        add_product_Name +
        "with the total amount of" +
        amount_sell +
        "stock :" +
        total_sell
    );
  } else {
    console.error(add_product_Name + "is does not exist in system");
  }
}
