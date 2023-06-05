function run() {
  let animals = [
    { dog: "canis lupus familiarisis" },
    { cat: "felis catus" },
    { rat: "rattus norvegicus" },
  ];

  let choice = prompt("What animal?");
  for (let i = 0; i < animals.length; i++) {
    let animal = animals[i];

    if (choice === Object.keys(animal)[0]) {
      console.log(
        Object.keys(animal)[0] + ": " + animal[Object.keys(animal)[0]]
      );
      break;
    }
  }
}
