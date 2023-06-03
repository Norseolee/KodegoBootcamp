function runActivity() {
  // always use const in array
  // const num = []  you can use blank square braket
  // for (let i = 0; i <= 5; i++){
  //     num[i] = Number([prompt("Give me a number")])
  // }

  /* const fishes = ["Bangus", "Tilapia", "Tuna", "Salmon", "Shark"];
  console.log(fishes);
  console.log(fishes.length);
  //   console.log(fishes.sort());
  //   console.log(fishes.reverse());
//   if i want to change the index
// fishes[0] = "milkfish";
  console.log(fishes[2]);
  console.log(fishes[0]);
  */

  /*
  //   sample with for statement
  const fishes = ["Bangus", "Tilapia", "Tuna", "Salmon", "Shark"];
  //   if you want to add more index unshift is to add in the start, middle and push is to add last
  fishes.push("yellowfin");
  for (let i = 0; i < fishes.length; i++) {
    console.log("fish #" + i + " : " + fishes[i]);
    if (fishes[i] == "Shark") {
      // if you looking for specific index
      console.log(i);
      alert("DANGER!! SHARK WARINING");
    }
  }
  */

  //   const names = [];

  //   for (let i = 0; i < 5; i++) {
  //     let name = prompt("Give me a name.");
  //     names.push(name);
  //   }

  //   console.log(names);

  //   infinite numbers until users wants to stop
  const numbers = [];
  let x = false;

  while (x == false) {
    let number = Number(prompt("Give me a number"));
    numbers.push(number);
    let choice = Number(
      prompt("Would you like to add another number? 0 = No, Any key = Yes")
    );
    if (choice == 0) {
      // break;
      x = true;
    }
  }
  console.log(numbers);
}
