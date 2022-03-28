// computeAreaCircle
// computer the area of a triangle

var computeAreaOfTriangle = function (base, height) {
  // take the inputs and compute the area of a trianle
  var area = (base * height) / 2;

  // output the area
  return area;
};

//jobApplication

var generatePushyJobApplication = function (
  jobTitle,
  companyName,
  desiredSalary
) {
  // construct the message
  var message = `To Whom it may concern at ${companyName}, I want a job right now. Please hire me for the position of ${jobTitle}. I want to be paid ${desiredSalary}. This comes out to ${
    desiredSalary / 12
  } a month.`;

  return message;
};

var orangeJuiceMain = function (people) {
  // Calculate the number of oranges needed to create orange juice drinks for the guests
  var message = `For number of ${people} guests, we need to purchase ${
    people * 2 * 4
  } oranges to produce enough orange juice drinks.`;

  return message;
};

function paintMain(numRooms, numPaintCoats, priceOfPaint) {
  // calculate the price of paint per litre to pain the house's interior

  var message = `For ${numRooms} rooms and ${numPaintCoats} paint coats, the price of paint per litre will be ${
    (300 / (9 * numRooms * numPaintCoats)) * priceOfPaint
  } dollars.`;

  return message;
}

var randomDiceMain = function (input) {
  // Attempt the Random Dice Rolls exercise from the Intro to Logic and Control Flow module below with randomDiceMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var secretPhraseMain = function (input) {
  // Attempt the Secret Phrase exercise from the If, Else, Else If module below with secretPhraseMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var diceGameMain = function (input) {
  // Attempt the Dice Game exercise from the If, Else, Else If module below with diceGameMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var twiceGuessMain = function (input) {
  // Attempt the Twice the Guess exercise from the If, Else, Else If module below with twiceGuessMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
