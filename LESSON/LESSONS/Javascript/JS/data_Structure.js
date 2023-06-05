// Map
// if exist it would replace the key/ smae value
// if not exist it would add the key/value
// Maps
function run() {
  const fruit_prices = new Map([
    ["apple", 10],
    ["banana", 20],
    ["orange", 30],
  ]);
  console.log(fruit_prices.size);
  console.log(fruit_prices.has("banana"));
  console.log(fruit_prices.values());
  fruit_prices.forEach(function (value, key) {
    console.log(key + " " + value);
  });
  let choice = Number(prompt("Add a fruit? 0: Yes, ANY KEY: No"));
  if (choice == 0) {
    let name = prompt("What fruit would you like to add?");
    let price = prompt("What is the price of " + name);
    fruit_prices.set(name, price);
    console.log("Added " + name);
  }
  choice = Number(prompt("Add another fruit? 0: Yes, ANY KEY: No"));
  if (choice == 0) {
    let name = prompt("What fruit would you like to add?");
    let price = prompt("What is the price of " + name);
    fruit_prices.set(name, price);
    console.log("Added " + name);
  }
  choice = prompt("What would you like to buy?");
  console.log("The price of " + choice + " is " + fruit_prices.get(choice));
  let del = prompt("What fruit would you like to delete?");
  fruit_prices.delete(del);
  choice = prompt("What would you like to buy?");
  console.log("The price of " + choice + " is " + fruit_prices.get(choice));

  const enemies = [];
  enemies[0] = new Map([
    ["name", x],
    ["hp", 300],
    ["stat_defense", 100],
  ]);

  console.log(enemies[0].get("name"));
}
//
//
// ===============================================
// JSON
let employees = [
  {
    first_name: "Daiben",
    last_name: "Sanchez",
    position: "Sanitary Engineer",
    department: "Utilities",
  },
  {
    first_name: "Manny",
    last_name: "Pacquiao",
    position: ["Legal Officer 2", "Consultant", "Case Manager"],
    department: "Public Relations",
    cases_won: 4,
  },
  {
    first_name: "Jinky",
    last_name: "Pacquiao",
    position: "Human Resources Lead",
    department: "Human Resources",
  },
];
console.log(typeof employees);
function runActivity() {
  for (let i = 0; i < employees[1].position.length; i++) {
    console.log(employees[1].position[i]);
  }
  //   console.log(employees[1].position[1]);

  //   console.log(employees[2].department);
  //   let first_name = prompt("FIRST NAME?");
  //   let last_name = prompt("LAST NAME?");
  //   let position = prompt("POSITION?");
  //   let department = prompt("DEPARTMENT");
  //   employees.push({
  //     first_name: first_name,
  //     last_name: last_name,
  //     position: position,
  //     department: department,
  //   });
  //   employees[3].position = "Trash Manager";
  for (let i = 0; i < employees.length; i++) {
    console.log(
      employees[i].first_name +
        " " +
        employees[i].last_name +
        " | " +
        employees[i].position +
        " | " +
        employees[i].department
    );
  }
}

//
//
// ==============================================================
// Sets
function runActivity() {
  let x = ["carrot", "lettuce", "eggplant"];
  const vegetables = new Set(x);
  vegetables.add("pumpkin");
  console.log(vegetables);
  vegetables.add("carrot");
  console.log(vegetables);
  vegetables.forEach(function (vegetable) {
    if (vegetable == "eggplant") {
      console.log("This is an eggplant!");
    }
    console.log(vegetable);
  });
  //   console.log(vegetables.clear());
  console.log(vegetables.delete("eggplant"));
  console.log(vegetables.has("lettuce"));
  //   console.log(vegetables.values());
}
