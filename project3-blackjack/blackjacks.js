// Global Variables
var dealerSum = 0; // keep track the total point value for dealer
var yourSum = 0; // keep track the total point value for player

var dealerAceCount = 0; // how many dearer's Ace cards
var yourAceCount = 0; // how many your Ace cards

var hidden; // hidden card of dealer
var deck;

var canHit = true; // allows the player to draw while yourSum <=21

window.onload = function () {
  buildDeck();
  shuffleDeck();
  startGame();
};

function buildDeck() {
  // Creating the Deck
  let values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ]; // Card values from Ace, 2, 3, to King
  let types = ["C", "D", "H", "S"]; // Club, Diamond, Heart, Space card types
  deck = [];

  for (let i = 0; i < types.length; i++) {
    for (let j = 0; j < values.length; j++) {
      deck.push(values[j] + "-" + types[i]); // loop corresponding to the card name in folder
    }
  }
  //console.log(deck); // to check for 52 cards
}

function shuffleDeck() {
  // Shuffling the Deck
  for (let i = 0; i < deck.length; i++) {
    let j = Math.floor(Math.random() * deck.length); // (0-1) * 52 => (0-51.9999) Math.Random, then Math.Floor for integer
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
  //console.log(deck); // to check for 52 random shuffled
}

function startGame() {
  // Starting the Game Conditions
  hidden = deck.pop();
  dealerSum += getValue(hidden);
  dealerAceCount += checkAce(hidden);
  //console.log(hidden);
  //console.log(dealerSum);

  while (dealerSum < 17) {
    // if dealer card  sum is less than 17
    let cardImg = document.createElement("img"); // create an image tag
    let card = deck.pop(); // get a card from the deck
    cardImg.src = "./cards/" + card + ".png"; // set the source of the image
    dealerSum += getValue(card); // keep incrementing dealer's cards
    dealerAceCount += checkAce(card); // keep incrementing dealer's Ace cards
    document.getElementById("dealer-cards").append(cardImg); // take the image tag and append the card to dealer-cards html
  }
  console.log(dealerSum);

  for (let i = 0; i < 2; i++) {
    // Your starting cards must be 2 cards
    let cardImg = document.createElement("img"); // create an image tag
    let card = deck.pop(); // get a card from the deck
    cardImg.src = "./cards/" + card + ".png"; // set the source of the image
    yourSum += getValue(card); // keep incrementing your card
    yourAceCount += checkAce(card); // keep incrementing your Ace cards
    document.getElementById("your-cards").append(cardImg); // take the image tag and append the card to your-cards html tag
  }
  console.log(yourSum);

  document.getElementById("hit").addEventListener("click", hit);
  document.getElementById("stay").addEventListener("click", stay);
}

function hit() {
  // Hit Button Criterias
  if (!canHit) {
    return;
  }

  let cardImg = document.createElement("img"); // create an image tag
  let card = deck.pop(); // get a card from the deck
  cardImg.src = "./cards/" + card + ".png"; // set the source of the image
  yourSum += getValue(card); // keep incrementing your card
  yourAceCount += checkAce(card); // keep incrementing your Ace cards
  document.getElementById("your-cards").append(cardImg); // take the image tag and append the card to your-cards html tag

  if (reduceAce(yourSum, yourAceCount) > 21) {
    // your card sum must stop if it is more than 21
    canHit = false;
  }
}

function stay() {
  // Stay Button Criterias
  dealerSum = reduceAce(dealerSum, dealerAceCount);
  yourSum = reduceAce(yourSum, yourAceCount);

  canHit = false;
  document.getElementById("hidden").src = "./cards/" + hidden + ".png";

  // Winning and Losing conditions
  let message = "";
  if (yourSum > 21) {
    message = "You Lose!";
  } else if (dealerSum > 21) {
    message = "You Win!";
  } else if (yourSum == dealerSum) {
    message = "Tie!";
  } else if (yourSum > dealerSum) {
    message = "You Win!";
  } else if (yourSum < dealerSum) {
    message = "You Lose!";
  }
  document.getElementById("dealer-sum").innerText = dealerSum;
  document.getElementById("your-sum").innerText = yourSum;
  document.getElementById("results").innerText = message;
}

function getValue(card) {
  let data = card.split("-"); // "4-C" -> ["4","C"] from the Card Folder
  let value = data[0];

  if (isNaN(value)) {
    // must be A J Q K instead 2, 3, 4 , 5 and etc..
    if (value == "A") {
      return 11;
    }
    return 10;
  }
  return parseInt(value);
}

function checkAce(card) {
  // checking if the card is an Ace and count as 1
  if (card[0] == "A") {
    return 1;
  }
  return 0;
}

function reduceAce(playerSum, playerAceCount) {
  // reducing the Ace 11 to 1 until total sum hits 21 and/or above 21
  while (playerSum > 21 && playerAceCount > 0) {
    playerSum -= 10;
    playerAceCount -= 1;
  }
  return playerSum;
}
