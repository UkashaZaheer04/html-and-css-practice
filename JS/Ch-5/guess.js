let max = prompt("Enter maximum number");
let randomNum = Math.floor(Math.random() * max) + 1;
let guess = prompt("Enter a guess or type 'quit' to exit");

while (true) {
    if (guess === 'quit') {
        console.log("You are quitting");
        break;
    }

    guess = parseInt(guess); // Convert input to an integer for comparison

    if (guess === randomNum) {
        console.log("You guessed it right!");
        break;
    } 
    else if (guess < randomNum) {
        console.log("Your guess is too low");
    } 
    else {
        console.log("Your guess is too high");
    }
    
    guess = prompt("Enter a new guess or type 'quit' to exit");
}
