
// Write a simple guessing game which has the user guess a selected number. Game
// should only stop when user has gotten the answer right
// hint: get a random number from 1 - 100 -> Math.floor(Math.random() * 100 + 1)



const secretNumber = Math.floor(Math.random() * 10) + 1;
let guess = null;

while (guess !== secretNumber) {
  // Ask the user to guess the number
  guess = parseInt(prompt("Guess a number between 1 and 10:"), 10);

  // Check if input is a valid number
  if (isNaN(guess)) {
    alert("That's not a valid number. Try again.");
    continue;
  }

  // Check the guess
  if (guess === secretNumber) {
    alert("Congratulations! You guessed the correct number.");
  } else {
    alert("Wrong guess. Try again!");
  }
}

