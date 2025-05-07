function startGame() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    let guess;
    let attempts = 0;

    while (guess !== randomNumber) {
      guess = parseInt(prompt("Guess a number between 1 and 10:"));
      attempts++;

      if (isNaN(guess)) {
        alert("Please enter a valid number.");
      } else if (guess < randomNumber) {
        alert("Too low! Try again.");
      } else if (guess > randomNumber) {
        alert("Too high! Try again.");
      } else {
        alert(`🎉 Correct! You guessed it in ${attempts} attempts.`);
      }
    }
  }

  startGame();