//activity of while loop 
let movieName = "Avatar";
let guess = prompt("Guess my favourite movie (type 'quit' to exit):");
let countGuess = 1;

while (guess !== movieName && guess !== 'quit') {
    countGuess++;
    guess = prompt("You guessed it wrong.");

    if (countGuess === 3) {
        console.log("You lose. Try again.");
        break;  // Exit the loop after 3 wrong guesses
    }
     
     if (guess === 'quit' && countGuess < 3) {
        console.log("You quit.");
        break;
    }
}
if (guess === movieName) {
    console.log("Congratulations! You guessed it right.");
    
}

   