console.log("Script attached");

let num = 16;

let guess = parseInt(prompt("Guess a number between 1 and 100."));

if (isNaN(guess)) {
  alert("You didn't give me a valid number >:(");
} else {
  if (guess <= 0 || guess > 100) {
    alert("You didn't give me a number between 1 and 100 >:(");
  } else if (num > guess) {
    alert("You guessed too low.");
  } else if (num < guess) {
    alert("You guessed too high.");
  } else {
    alert("You guessed correctly.");
  }
}

let favColor = prompt("What's your favorite color?");

switch (favColor.toLowerCase()) {
  case "red":
    alert("Awwwwwesome!");
    break;
  case "blue":
    alert("Okay");
    break;
  //...
  default:
    alert("Boring..");
}
