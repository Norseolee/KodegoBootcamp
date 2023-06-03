//swtich operators
// THis program does the following:
// 1. Asks the user for a gear setting.
// 2. Adjusts speed accordingly.

function runActivity() {
  let gear = Number(prompt("What gear level would you like?"));

  switch (gear) {
    case 1:
      console.log("Your car is going 20kph");
      alert("Your car is going very slow.");
      break; // break is youwant to pause for all if youwant only one atime/
    case 2:
      console.log("Your car is going 40kph");
      alert("Your car is going slow.");
      break;
    case 3:
      console.log("Your car is going 60kph.");
      alert("Your car is going average");
      break;
    case 4:
      console.log("Your car is going 80kph");
      alert("Your car is going fast.");
      break;
    case 5:
      console.log("Your car is going 100kph");
      alert("Your car is overheating.");
    default:
      console.error("Not an appropriate gear setting!");
  }
}
