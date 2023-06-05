//addition
function runActivity() {
  let your_fav = Number(
    prompt(
      "let me guess your fav number? give me a number that is less from your favorite number?"
    )
  );
  let me_guess = Number(
    prompt("give me a number that needed to add to your favorite number")
  );
  myfav = your_fav + me_guess;
  alert("Your favorite number is " + myfav);
  console.log("Your favorite number is " + myfav);
}
