// Activity #34 Shape Solver
// This program does the following:
// 1. ask the user for shape.
// 2. ask user the measurement.
// 3. answer the required measurement
// Author by Norhajar Gabuya

function runActivity() {
  let shape_choice = Number(
    prompt(
      "What share are you want to solve? 0: Triangle 1: Circle 2: Rectangle"
    )
  );
  //   for Triangle
  if (shape_choice == 0) {
    const base = Number(prompt("Enter the base length of the triangle:"));
    const height = Number(prompt("Enter the height of the triangle:"));
    let area_triangle = (1 / 2) * (base * height);
    console.log("The area of the triangle is " + area_triangle + "!");
  }
  //   for circle
  if (shape_choice == 1) {
    const radius = Number(prompt("Enter the radius of the circle:"));
    let area_circle = 3.1416 * radius;
    console.log("The area of the circle is " + area_circle + "!");
  }
  //   for rectangle
  if (shape_choice == 2) {
    const length = Number(prompt("Enter the length of the rectangle:"));
    const width = Number(prompt("Enter the width of the rectangle:"));
    let area_rectangle = length * width;
    console.log("The area of the rectangle is " + area_rectangle + "!");
  }
  // for error
  if (shape_choice > 2) {
    console.error(
      "Invalid Input. the choices are only 0, 1 and 2. please try again!"
    );
  }
}
