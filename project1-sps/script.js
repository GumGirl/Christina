var main = function (input) {
  var userChoice = input;

  // Initialise the number of player wins, computer wins, and draws to 0.
  var numPlayerWins = 0;
  var numComputerWins = 0;
  var numDraws = 0;

  // Create a random generated Computer Choice results
  var computerChoice = Math.floor(Math.random() * 3) + 1;

  if (computerChoice === 1) {
    computerChoice = "rock";
  } else if (computerChoice === 2) {
    computerChoice = "scissors";
  } else if (computerChoice === 3) {
    computerChoice = "paper";
  }

  // Comparing Compture Result and User Result with 7 different scenarios:
  // 1. Same choice = ties
  // 2. rock vs. scissors = rock wins
  // 3. rock vs. paper = paper wins
  // 4. paper vs. scissors = scissors win
  // 5. paper vs. rock = paper wins
  // 6. scissor vs. paper = scissors wins
  // 7. scissors vs. rock = rock wins

  var compare = function (choice1, choice2) {
    if (choice1 === choice2) {
      // computer choice and user choice are the same, the result is a tie
      return "The result is a tie!";
    } else if (choice1 === "rock") {
      // computer choice is rock and user choice is scissors, rock wins against scissors
      if (choice2 === "scissors") {
        return "rock wins";
      } else if (choice2 === "paper") {
        // computer choice is rock and user choice is paper, paper wins against scissors
        return "paper wins";
      }
    } else if (choice1 === "paper") {
      // computer choice is paper and user choice is scissors, scissors wins against paper
      if (choice2 === "scissors") {
        return "scissors win";
      } else if (choice2 === "rock") {
        // computer choice is rock and user choice is paper, paper wins against rock
        return "paper wins";
      }
    } else if (choice1 === "scissors") {
      // computer choice is scissors and user choice is paper, scissors wins against paper
      if (choice2 === "paper") {
        return "scissors win";
      } else if (choice2 === "rock") {
        // computer choice is scissors and user choice is rock, rock wins against scissors
        return "rock wins";
      }
    }
  };
  console.log(compare(computerChoice, userChoice));

  var myOutputValue = compare(computerChoice, userChoice);
  return (
    "The computer chose " +
    computerChoice +
    " and " +
    myOutputValue +
    "!" +
    "<br> You chose " +
    userChoice +
    "."
  );
};
