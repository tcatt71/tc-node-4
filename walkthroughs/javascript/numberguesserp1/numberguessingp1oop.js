console.log("Hello World!");

/*
Generate a Random Number at the beginning (start)
Prompt user for a guess
Make sure that the guess is a number between 1 and n
Evaluate Number
Give Feedback
*/

class Player {
  constructor(name) {
    this.name = name;
    this.wins = 0;
  }

  updateWins() {
    this.wins++;
  }
}

class NumberGuesser {
  constructor() {
    this.players = [];
    this.mode = null;
    this.limit = {
      easy: 10,
      medium: 100,
      hard: 1000,
    };
    this.modes = ["easy", "medium", "hard"];
    this.isPlaying = false;
    this.correctNumber = null;

    console.log(this);
  }

  startGame() {
    this.isPlaying = true;

    if (this.whosPlaying()) {
      return;
    }

    if (this.decideMode()) {
      return;
    }

    this.correctNumber = Math.floor(Math.random() * this.limit[this.mode]) + 1;
    this.playGame();
  }

  whosPlaying() {
    let username = prompt(
      "Welcome! Who might be playing today (Enter you name)?\nType quit to stop."
    );
    if (username) {
      if (username == "quit") {
        return this.hasQuit(username);
      } else this.createPlayer(username);
    } else {
      this.whosPlaying();
    }
  }

  createPlayer(name) {
    let foundPlayer = this.players.reduce(
      (found, player) => (name == player.name ? player : null),
      null
    );
    if (foundPlayer) {
      this.currentPlayer = foundPlayer;
    } else {
      let temp = new Player(name);
      this.players.push(temp);
      this.currentPlayer = temp;
    }
    this.displayPlayers();
  }

  displayPlayers() {
    console.log(this.players);
  }

  playGame() {
    let guess = prompt(
      `Guess a whole number between 1 and ${
        this.limit[this.mode]
      }:\nType quit to stop.`
    );
    if (!this.hasQuit(guess)) {
      this.evaluateGuess(parseInt(guess));
    }
    if (this.isPlaying) {
      this.playGame();
    }
  }

  evaluateGuess(guess) {
    if (isNaN(guess) || guess < 1 || guess > this.limit[this.mode]) {
      alert(
        `You didn't give me a whole number between 1 and ${
          this.limit[this.mode]
        } :(\nType quit to stop.`
      );
    } else {
      if (guess > this.correctNumber) {
        alert("Too high");
      } else if (guess < this.correctNumber) {
        alert("Too low");
      } else {
        this.isPlaying = false;
        alert("Congratulations!!!");
        this.updateScoreForWinner();
        this.displayPlayers();
        let replay = prompt("Would you like to play again (yes/no):");
        if (replay.toLowerCase().trim()[0] == "y") {
          this.startGame();
        }
      }
    }
  }

  updateScoreForWinner() {
    this.players.forEach((player) => {
      if (player.name == this.currentPlayer.name) {
        player.updateWins();
      }
    });
  }

  hasQuit(input) {
    if (input == "quit") {
      this.isPlaying = false;
      alert("See you later!");
      return true;
    } else return false;
  }

  decideMode() {
    this.mode = prompt(
      "Select difficulty (type easy, medium, or hard):\nType quit to stop."
    );

    if (this.hasQuit(this.mode)) {
      return true;
    }

    if (this.isPlaying && !this.modes.includes(this.mode)) {
      this.decideMode();
    }
  }
}

new NumberGuesser().startGame();
