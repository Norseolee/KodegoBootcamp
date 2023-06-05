function run() {
  const vegetable = new Set(["carrot", "lettuce", "eggplant"]);
  vegetable.add("pumpkin");
  console.log(vegetable);
  vegetable.add("carrot");
  console.log(vegetable);
}
