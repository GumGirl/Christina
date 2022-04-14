var emojiNumberCharactersMain = function (input) {
  // Complete the Base: Emoji Drawing Number of Characters exercise below with emojiNumberCharactersMain as the main function.
  var myOutputValue = ``;
  var counter = 0;

  for (var counter = 0; counter < Number(input); counter += 1) {
    myOutputValue += `❤`;
  }

  return myOutputValue;
};

var emojiSquareMain = function (input) {
  // Complete the Base: Emoji Drawing Square exercise below with emojiSquareMain as the main function.
  var myOutputValue = ``;
  // sideLength represents the length of each side of the square
  var sideLength = Number(input);

  for (var outerCounter = 0; outerCounter < sideLength; outerCounter += 1) {
    for (var innerCounter = 0; innerCounter < sideLength; innerCounter += 1) {
      myOutputValue += "😊";
    }
    // Insert a line break to start a new row
    myOutputValue += `<br>`;
  }
  return myOutputValue;
};

var emojiTriangleMain = function (input) {
  // Complete the Comfortable: Emoji Drawing Triangle exercise below with emojiTriangleMain as the main function.
  var myOutputValue = ``;
  // sideLenght represents the lenght of each side of the suqare
  var sideLength = Number(input);
  for (var outerCounter = 0; outerCounter < sideLength; outerCounter += 1) {
    for (
      var innerCounter = 0;
      innerCounter <= outerCounter;
      innerCounter += 1
    ) {
      myOutputValue += `🌹`;
    }
    myOutputValue += `<br>`;
  }
  return myOutputValue;
};

var emojiOutlineSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Outline Square exercise below with emojiOutlineSquareMain as the main function.
  var myOutputValue = ``;

  var sideLength = Number(input);

  for (var outerCounter = 0; outerCounter < sideLength; outerCounter += 1) {
    for (var innerCounter = 0; innerCounter < sideLength; innerCounter += 1) {
      if (
        outerCounter == 0 ||
        outerCounter == sideLength - 1 ||
        innerCounter == 0 ||
        innerCounter == sideLength - 1
      ) {
        myOutputValue += `😃`;
      } else {
        myOutputValue += `😘`;
      }
    }
    myOutputValue += `<br>`;
  }
  return myOutputValue;
};

var emojiCenterSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Center Square exercise below with emojiCenterSquareMain as the main function.
  var myOutputValue = "";
  // sideLength represents the length of each side of the square
  var sideLength = Number(input);
  // Do not accept side lengths that are not odd, because
  // non-odd side lengths cannot have a centre character.
  if (sideLength % 2 != 1) {
    return "Please enter an odd number for side length";
  }
  for (var outerCounter = 0; outerCounter < sideLength; outerCounter += 1) {
    for (var innerCounter = 0; innerCounter < sideLength; innerCounter += 1) {
      var halfSideLengthIndex = Math.floor(sideLength / 2);
      // If current iteration represents a border element, draw 😒 instead.
      if (
        outerCounter == 0 ||
        outerCounter == sideLength - 1 ||
        innerCounter == 0 ||
        innerCounter == sideLength - 1
      ) {
        myOutputValue += "😒";
        // If current iteration represents the middle element, draw 😁.
      } else if (
        outerCounter === halfSideLengthIndex &&
        innerCounter === halfSideLengthIndex
      ) {
        myOutputValue += "😁";
        // Add a 😍 to the current row
      } else {
        myOutputValue += "😍";
      }
    }
    // Insert a line break to start a new row
    myOutputValue += "<br>";
  }
  return myOutputValue;
};

var multiDiceBaseMain = function (input) {
  // Complete the Base: Multi-Dice Game exercise below with multiDiceBaseMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceMultiRoundMain = function (input) {
  // Complete the More Comfortable: Multi-Round Multi-Dice Game exercise below with multiDiceMultiRoundMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceTwoPlayerMain = function (input) {
  // Complete the More Comfortable: Two Player Multi-Round Multi-Dice Game exercise below with multiDiceTwoPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceMultiPlayerMain = function (input) {
  // Complete the More Comfortable: Multi-Player Multi-Round Multi-Dice Game exercise below with multiDiceMultiPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
