var secretWordBaseMain = function (input) {
  // Complete the Base: Secret Word exercise below with secretWordBaseMain as the main function.

  // 3 secret words
  var secretWord1 = "banana";
  var secretWord2 = "chisel";
  var secretWord3 = "fauset";

  var userSecretWord = input;

  //Random word generator
  var randomWord = Math.floor(Math.random() * 3) + 1;

  var compareSecretWord = function (word1, word2) {};
  var myOutputValue = "hello world";
  return myOutputValue;
};

var secretWordTwiceRowMain = function (input) {
  // Complete the Comfortable: Secret Word Twice in a Row exercise below with secretWordTwiceRowMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var secretWordXRowMain = function (input) {
  // Complete the Comfortable: Secret Word X in a Row exercise below with secretWordXRowMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
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

var dice4DMain = function (input) {
  // Complete the More Comfortable: Dice 4D exercise below with dice4DeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var secretWordTwice2Main = function (input) {
  // Complete the More Comfortable: Secret Word Twice in a Row 2 exercise below with secretWordTwice2Main as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
