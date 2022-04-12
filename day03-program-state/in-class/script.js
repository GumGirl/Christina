var numCorrectGuessesNeededToWin = 2;
var numCorrectGuessesSoFar = 0;

// Randomly return one of banana, chisel or faucet.
var generateSecretWord = function () {
  // Generate random number between 1 and 3
  var numPossibleWords = 3;
  var randomNum = Math.floor(Math.random() * numPossibleWords) + 1;

  // Return the word that corresponds to the relevant number
  if (randomNum == 1) {
    return `banana`;
  }
  if (randomNum == 2) {
    return `chisel`;
  }
  return `faucet`;
};

var secretWordBaseMain = function (guessedWord) {
  // Complete the Base: Secret Word exercise below with secretWordBaseMain as the main function.
  var secretWord = generateSecretWord();
  var standardMessage = `You guessed: ${guessedWord}. Secret word: ${secretWord}.`;
  if (secretWord == guessedWord) {
    numCorrectGuessesSoFar += 1;
    if (numCorrectGuessesSoFar >= numCorrectGuessesNeededToWin) {
      numCorrectGuessesSoFar = 0;
      return `${standardMessage} You guessed twice correctly. You win! Please play again.`;
    }
    return `${standardMessage} You guessed correctly. You win! Please play again.`;
  }
  var numCorrectGuessesRemainingToWin =
    numCorrectGuessesNeededToWin - numCorrectGuessesSoFar;
  return `${standardMessage} You guessed incorrectly. You need ${numCorrectGuessesNeededToWin} more correct guesses to win.`;
};

// Secret Word Twice in a Row

var secretWordTwiceRowMain = function (guessedWord) {
  // Complete the Comfortable: Secret Word Twice in a Row exercise below with secretWordTwiceRowMain as the main function.
  var secretWord = generateSecretWord();
  var standardMessage = `You guessed: ${guessedWord}. Secret word: ${secretWord}.`;

  // Guess is correct
  if (secretWord == guessedWord) {
    numCorrectGuessesSoFar += 1;

    if (numCorrectGuessesSoFar >= numCorrectGuessesNeededToWin) {
      // Reset counter of correct guesses to restart game.
      numCorrectGuessesSoFar = 0;
      return `${standardMessage} You guessed correctly ${numCorrectGuessesNeededToWin} times in a row. You win! Please play again.`;
    }

    var numCorrectGuessesRemainingToWin =
      numCorrectGuessesNeededToWin - numCorrectGuessesSoFar;

    return `${standardMessage} You guessed correct! You need ${numCorrectGuessesRemainingToWin} more correct guess to win.`;
  }
  // Guess is incorrect
  // Reset counter of correct guesses to 0 to implement twice in a row rule.
  numCorrectGuessesSoFar = 0;
  return `${standardMessage} You guessed incorrectly. You need ${numCorrectGuessesNeededToWin} more correct guesses to win.`;
};

// Secret word X in a Row

// Initialise isStartofRound to true to generate numCorrectGuessesNeededToWin
var isStartOfRound = true;

// Generate random number between 2 and 4
var generateNumCorrectGuessThreshold = function () {
  return Math.floor(Math.random() * 3) + 2;
};

var secretWordXRowMain = function (guessedWord) {
  // Complete the Comfortable: Secret Word X in a Row exercise below with secretWordXRowMain as the main function.

  // If start of round, re-generate num correct guesses needed to win.
  if (isStartOfRound) {
    numCorrectGuessesNeededToWin = generateNumCorrectGuessThreshold();
    // Set isStartOfRound to false until start of next round.
    isStartOfRound = false;
  }

  // Generate secret world without repeats
  var secretWord = generateSecretWord();
  var standardMessage = `You guessed: ${guessedWord}. Secret word: ${secretWord}. `;

  // Guess is correct
  if (secretWord == guessedWord) {
    // Use numCorrectGuessesSoFar and numCorrectGuessesNeededToWin variables from prev exercise.
    numCorrectGuessesSoFar += 1;
    if (numCorrectGuessesSoFar >= numCorrectGuessesNeededToWin) {
      // Reset counter of correct guesses to restart game.
      numCorrectGuessesSoFar = 0;
      // Reset isStartOfRound to true to generate new num correct guesses threshold the next round.
      isStartOfRound = true;
      return `${standardMessage} You guessed correctly ${numCorrectGuessesNeededToWin} times in a row. You win! Please play again.`;
    }
    var numCorrectGuessesRemainingToWin =
      numCorrectGuessesNeededToWin - numCorrectGuessesSoFar;
    return `${standardMessage} You guessed correctly! You need ${numCorrectGuessesRemainingToWin} more correct guess to win.`;
  }

  // Guess is incorrect
  // Reset counter of correct guesses to 0 to implement X in a row rule.
  numCorrectGuessesSoFar = 0;
  return `${standardMessage} You guessed incorrectly. You need ${numCorrectGuessesNeededToWin} more correct guesses to win.`;
};

/* 
Generate Comfortable Dice Within
 */

// storing the dice within
var diceWithin;

// Generate Random Dice Function
var rollDice = function () {
  // produces a decimal between 1 and 6
  var randomDice = Math.floor(Math.random() * 6) + 1;

  return randomDice;
};

// Generate within number 1 to 3
var addingWithinNumber = function () {
  // produces a decimal between 1 and 3
  var randomNumber = Math.floor(Math.random() * 3) + 1;
  return randomNumber;
};

// Create a function for dice withint 3
var diceWithinMain = function (input) {
  var randomDiceNumber = rollDice() + addingWithinNumber();

  if (randomDiceNumber == input) {
    myOutputValue = "you win";
    console.log(randomDiceNumber);
  } else {
    myOutputValue = "sorry, you lose. please try again.";
    console.log(randomDiceNumber);
  }

  return myOutputValue;
};

var diceWithin2DiceMain = function (input) {
  // Complete the More Comfortable: Dice Within with 2 Dice exercise below with diceWithin2DiceMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
