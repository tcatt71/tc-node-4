console.log("Hello World!");

let correctNumber = Math.floor(Math.random() * 1000) + 1;
let isPlaying = true;

while (isPlaying) {
    let guess = parseInt(prompt("Guess a whole number between 1 and 100:"));
    if (isNaN(guess) || guess < 1 || guess > 1000) {
        alert("You didn't give me a whole number between 1 and 100 :(");
    } else {
        if (guess > correctNumber) {
            alert("Too high");
        } else if (guess < correctNumber) {
            alert("Too low");
        } else {
            isPlaying = false;
            alert("Congratulations!!!");
        }
    }
}
