// Blackjack Base Game Walkthrough
// 1. Playable game with minimum functions: creating deck, shuffling, dealing cards, evaluating winner
// 2. Ability for the player to hit or stand
// 3. Ability for the dealer to hit or stand
// 4. Variable value of Ace - either `1` or `11`

// ==== ==== Pseudo code for version 1 ===== ===== //
// 1. define plaer and dealer
// 2. create and shuffle a game deck
// 3. draw 2 cards for player and dealer respectively
// 4. win conditions
//    -- blackjack
//    -- higher hand value
// 5. display hands of both player and dealer and declare winner

// ========== Global Variables ================= //

// Declare game modes

var GAME_START = "game start";
var GAME_CARDS_DRAWN = "cards drawn";
var GAME_RESULTS_SHOWN = "results shown";
var currentGameMode = GAME_START;

// Declare variables to store player and dealer hands
// We use arrays as each hand will beholding multiple card objexts
var playerHand = [];
var dealerHand = [];

// Declare variable to hold deck of cards
var gameDeck = "empty at the start";

/* ==== DECK CREATION FUNCTIONS ===== */

// Function that creates a deck of cards, used by createNewDeck function
var createDeck = function () {
  // Initialise an empty deck array
  var cardDeck = [];
  // Initialise an array of the 4 suits in our deck. We will loop over this array.
  var suits = ["hearts", "diamonds", "clubs", "spades"];

  // Loop over the suits array
  for (var i = 0; i < suits.length; i += 1) {
    // Store the current suit in a variable
    var currentSuit = suits[i];

    // Loop from 1 to 13 to create all cards for a given suit
    // Notice rankCounter starts at 1 and not 0, and ends at 13 and not 12.
    // This is an example of a loop without an array.
    for (var rankCounter = 1; rankCounter <= 13; rankCounter += 1) {
      // By default, the card name is the same as rankCounter
      var cardName = rankCounter;

      // If rank is 1, 11, 12, or 13, set cardName to the ace or face card's name
      if (cardName == 1) {
        cardName = "ace";
      } else if (cardName == 11) {
        cardName = "jack";
      } else if (cardName == 12) {
        cardName = "queen";
      } else if (cardName == 13) {
        cardName = "king";
      }

      // Create a new card with the current name, suit, and rank
      var card = {
        name: cardName,
        suit: currentSuit,
        rank: rankCounter
      };

      // Add the new card to the deck
      cardDeck.push(card);
    }
  }

  // Return the completed card deck
  return cardDeck;
};

// Function that generates a random number, used by shuffle deck function
var getRandomIndex = function (max) {
  return Math.floor(Math.random() * max);
};

// Function that shuffles a deck, used by createNewDeck function
var shuffleCards = function (cardDeck) {
  // Loop over the card deck array once
  var currentIndex = 0;
  while (currentIndex < cardDeck.length) {
    // Select a random index in the deck
    var randomIndex = getRandomIndex(cardDeck.length);
    // Select the card that corresponds to randomIndex
    var randomCard = cardDeck[randomIndex];
    // Select the card that corresponds to currentIndex
    var currentCard = cardDeck[currentIndex];
    // Swap positions of randomCard and currentCard in the deck
    cardDeck[currentIndex] = randomCard;
    cardDeck[randomIndex] = currentCard;
    // Increment currentIndex
    currentIndex = currentIndex + 1;
  }
  // Return the shuffled deck
  return cardDeck;
};

// Function that creates and shuffles a deck
var createNewDeck = function () {
  var newDeck = createDeck();
  var shuffledDeck = shuffleCards(newDeck);
  return shuffledDeck;
};

var main = function (input) {
  // FIRST CLICK
  if (currentGameMode == GAME_START) {
    // Create the game deck
    gameDeck = createNewDeck();
    console.log(gameDeck);
    // Deal 2 cards to player and dealer respectively
    // progress the gameMode
    // write and return the approriate output message
  }
};
