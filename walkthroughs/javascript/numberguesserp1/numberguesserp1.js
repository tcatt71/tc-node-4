console.log("Hello World!");

/*
Generate a Random Number at the beginning (start)
Prompt user for a guess
Make sure that the guess is a number between 1 and n
Evaluate Number
Give Feedback
*/

let mode = null;
const limit = {
  easy: 10,
  medium: 100,
  hard: 1000,
};
const modes = ["easy", "medium", "hard"];

startGame();

/* =========== DEFINITIONS =========== */

function startGame() {
  let isPlaying = true;
  decideMode();
  let correctNumber = Math.floor(Math.random() * limit[mode]) + 1;
  playGame();

  function playGame() {
    let guess = prompt(
      `Guess a whole number between 1 and ${limit[mode]}:\nType quit to stop.`
    );
    if (!hasQuit(guess)) {
      evaluateGuess(parseInt(guess));
    }
    if (isPlaying) {
      playGame();
    }
  }

  function evaluateGuess(guess) {
    if (isNaN(guess) || guess < 1 || guess > limit[mode]) {
      alert(
        `You didn't give me a whole number between 1 and ${limit[mode]} :(\nType quit to stop.`
      );
    } else {
      if (guess > correctNumber) {
        alert("Too high");
      } else if (guess < correctNumber) {
        alert("Too low");
      } else {
        isPlaying = false;
        alert("Congratulations!!!");
        let replay = prompt("Would you like to play again (yes/no):");
        if (replay.toLowerCase().trim()[0] == "y") {
          startGame();
        }
      }
    }
  }

  function hasQuit(input) {
    if (input == "quit") {
      isPlaying = false;
      alert("See you later!");
      return true;
    } else return false;
  }

  function decideMode() {
    mode = prompt(
      "Select difficulty (type easy, medium, or hard):\nType quit to stop."
    );
    hasQuit(mode);

    if (isPlaying && !modes.includes(mode)) {
      decideMode();
    }
  }
}
