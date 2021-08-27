// for (let i = 0; i < 100; i++) {
//   console.log("My name is Ben", i + 1);
// }

let num = 16;
let guess = parseInt(prompt("Guess a number"));

while (num != guess) {
  guess = parseInt(prompt("Guess a number"));
}

alert("Correct");
