console.log("Hello World!");
let submitBtn = document.querySelector("#submitBtn");
let easyBtn = document.querySelector("#easyBtn");
let mediumBtn = document.querySelector("#mediumBtn");
let hardBtn = document.querySelector("#hardBtn");
let guessInput = document.querySelector("#guessInput");
let modeSelect = document.querySelector("#modeSelect");
let guessForm = document.querySelector("#guessForm");
let prompt = document.querySelector("#prompt");
let feedback = document.querySelector("#feedback");
let guesses = document.querySelector("#guesses");
let scoreContainer = document.querySelector("#scoreContainer");

/*
Generate a Random Number at the beginning (start)
Prompt user for a guess
Make sure that the guess is a number between 1 and n
Evaluate Number
Give Feedback
*/

class Player {
  constructor(name, mode) {
    this.name = name;
    this.highscore = null;
    this.mode = mode;
  }
}

class NumberGuesser {
  constructor() {
    this.players = localStorage.getItem("players")
      ? JSON.parse(localStorage.getItem("players"))
      : [];
    this.mode = null;
    this.attempts = 0;
    this.guesses = [];
    this.time = 0;
    this.interval = null;
    this.limit = {
      easy: 10,
      medium: 100,
      hard: 1000,
    };
    this.isPlaying = false;
    this.correctNumber = null;
  }

  updateHighscore(score) {
    if (!this.highscore || this.highscore > score)
      this.highscore = score.toFixed(2);
  }

  readyGame() {
    if (this.players.length > 0) {
      this.displayPlayers("easy");
    }

    if (!document.querySelector("#resetBtn").onclick) {
      document.querySelector("#resetBtn").onclick = () => {
        this.resetGame();
      };

      easyBtn.onclick = () => {
        this.displayPlayers("easy");
      };
      mediumBtn.onclick = () => {
        this.displayPlayers("medium");
      };
      hardBtn.onclick = () => {
        this.displayPlayers("hard");
      };
    }

    guessInput.readOnly = false;

    guessForm.onsubmit = (e) => {
      e.preventDefault();
      this.startGame();
    };
  }

  resetGame() {
    if (this.isPlaying) {
      this.isPlaying = false;
    }

    this.guesses = [];
    this.correctNumber = null;
    this.attempts = 0;
    feedback.textContent = "";
    guesses.textContent = "";
    prompt.textContent =
      "Welcome! To start, enter your name and select the difficulty:";
    guessInput.type = "text";
    guessInput.placeholder = "Jane";
    guessInput.value = "";
    modeSelect.style.display = "inline";
    submitBtn.disabled = false;
    submitBtn.textContent = "Start";

    this.readyGame();
  }

  startGame() {
    submitBtn.disabled = true;
    this.isPlaying = true;

    let username = guessInput.value;
    this.mode = modeSelect.value;

    this.createPlayer(username);

    this.correctNumber = Math.floor(Math.random() * this.limit[this.mode]) + 1;

    // Update dom
    prompt.textContent =
      "Guess a number between 1 and " + this.limit[this.mode];
    guessInput.type = "number";
    guessInput.placeholder = "1...";
    modeSelect.style.display = "none";

    submitBtn.disabled = false;
    submitBtn.textContent = "Guess";
    guessInput.focus();
    guessForm.onsubmit = (e) => {
      e.preventDefault();
      this.playGame();
    };
    this.interval = setInterval(() => {
      this.time++;
    }, 100);
  }

  createPlayer(name) {
    console.log("createPlayer");

    let foundPlayer = this.players.reduce((found, player) => {
      return name == player.name && this.mode == player.mode && !found
        ? player
        : found
        ? found
        : null;
    }, null);

    console.log(foundPlayer);

    if (foundPlayer) {
      this.currentPlayer = foundPlayer;
    } else {
      let temp = new Player(name, this.mode);
      this.players.push(temp);
      this.currentPlayer = temp;
    }
  }

  rankPlayers() {
    this.players.sort((a, b) => {
      return a.highscore - b.highscore;
    });
  }

  displayPlayers(mode) {
    this.rankPlayers();

    scoreContainer.innerHTML = "";
    let table = document.createElement("table");
    table.style.width = "100%";
    for (let player of this.players) {
      if (player.mode == this.mode || player.mode == mode) {
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${player.name}</td><td>${player.highscore}</td>`;
        table.appendChild(tr);
      }
    }
    let h3 = document.createElement("h3");
    h3.textContent =
      (mode
        ? mode[0].toUpperCase() + mode.slice(1)
        : this.mode[0].toUpperCase() + this.mode.slice(1)) + " Difficulty";
    scoreContainer.append(h3, table);
  }

  playGame() {
    let guess = guessInput.value;
    this.evaluateGuess(guess);
  }

  evaluateGuess(guess) {
    this.attempts++;

    if (guess < 1 || guess > this.limit[this.mode]) {
      feedback.textContent = `You didn't give me a whole number between 1 and ${
        this.limit[this.mode]
      } :(`;
    } else {
      this.guesses.push(guess);

      if (guess > this.correctNumber) {
        feedback.textContent = guess + " is too high";
        guessInput.value = "";
      } else if (guess < this.correctNumber) {
        feedback.textContent = guess + " is too low";
        guessInput.value = "";
      } else {
        clearInterval(this.interval);
        this.isPlaying = false;
        submitBtn.disabled = true;
        guessInput.readOnly = true;
        feedback.textContent =
          "Congratulations!!! " + guess + " is the correct number.";
        this.updateScoreForWinner();
        this.displayPlayers();
        this.mode = null;
      }

      guesses.textContent = this.guesses.join(", ");
      guessInput.focus();
    }
  }

  updateScoreForWinner() {
    this.players.forEach((player) => {
      if (player.name == this.currentPlayer.name && this.mode == player.mode) {
        player.updateHighscore = this.updateHighscore;
        player.updateHighscore(this.attempts + this.time / 100);
      }
    });

    // Use local storage to 'save' game data even after refresh (per browser)
    localStorage.setItem("players", JSON.stringify(this.players));
  }
}

new NumberGuesser().readyGame();
