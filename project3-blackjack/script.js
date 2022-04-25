// Creating a Dictionary (various arrays)
let blackjackGame = {
  you: {
    scoreSpan: "#your-blackjack-result",
    div: "#your-box",
    boxSize: "blackjack-row-2 div",
    score: 0
  },
  dealer: {
    scoreSpan: "#dealer-blackjack-result",
    div: "#dealer-box",
    boxSize: "blackjack-row-2 div",
    score: 0
  },
  wins: 0,
  losses: 0,
  draws: 0,
  isStand: false,
  isTurnsOver: false,
  pressOnce: false
};

// Global Variables
// creating keys to access the dictionary properties
const YOU = blackjackGame["you"];
const DEALER = blackjackGame["dealer"];

// creating variables for sounds
const hitSound = new Audio("sounds/swish.m4a");
const winSound = new Audio("sounds/cash.mp3");
const loseSound = new Audio("sounds/aww.mp3");

let dealerSum = 0; // keep track the total point value for dealer
let yourSum = 0; // keep track the total point value for player

let dealerAceCount = 0; // how many dearer's Ace cards
let yourAceCount = 0; // how many your Ace cards

let hidden; // hidden card of a deck
let deck; // for the deck of cards

let winner;
let canHit = true;

// Button Event Listeneer
document.querySelector("#hit-button").addEventListener("click", blackjackHit);
document.querySelector("#stay-button").addEventListener("click", blackjackStay);
document.querySelector("#deal-button").addEventListener("click", blackjackDeal);
document
  .querySelector("#restart-button")
  .addEventListener("click", blackjackRestart);

window.onload = function () {
  buildDeck();
  shuffleDeck();
  //startGame();
};

// Preparing the Deck and shuffling
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

// Game Functions
function startGame() {
  // Starting the Game Conditions
  hidden = deck.pop();
  dealerSum += getValue(hidden);
  dealerAceCount += checkAce(hidden);

  // Player Cards
  /*for (let i = 0; i < 2; i++) {
    // Your starting cards must be 2 cards
    let cardImage = document.createElement("img"); // create an image tag
    let card = deck.pop(); // get a card from the deck
    cardImage.src = "./cards/" + card + ".png"; // set the source of the image
    yourSum += getValue(card); // keep incrementing your card
    yourAceCount += checkAce(card); // keep incrementing your Ace cards
    document.getElementById("your-box").append(cardImage); // take the image tag and append the card to your-cards html tag
    document.getElementById("your-blackjack-result").innerText = yourSum;
  }
  console.log(yourSum);*/
}

function blackjackHit() {
  // Hit Button Criterias
  if (!canHit) {
    return;
  }
  if (blackjackGame["isStand"] === false) {
    let cardImage = document.createElement("img"); // create an image tag
    let card = deck.pop(); // get a card from the deck
    cardImage.src = "./cards/" + card + ".png"; // set the source of the image
    yourSum += getValue(card); // keep incrementing your card
    yourAceCount += checkAce(card); // keep incrementing your Ace cards
    document.getElementById("your-box").append(cardImage); // take the image tag and append the card to your-cards html tag
    //document.getElementById("your-blackjack-result").innerText = yourSum;
    hitSound.play();

    if (reduceAce(yourSum, yourAceCount) > 21) {
      // your card sum must stop if it is more than 21
      canHit = false;
      document.getElementById("your-blackjack-result").innerText = "Bust!";
      document.getElementById("your-blackjack-result").style.color = "red";
    } else {
      document.getElementById("your-blackjack-result").innerText = yourSum;
    }
  }
}

function blackjackStay() {
  // Stay Button Criterias
  hitSound.play();

  if (blackjackGame.pressOnce === false) {
    blackjackGame["isStand"] = true;
    let cardImage = document.createElement("img"); // create an image tag
    let card = deck.pop(); // get a card from the deck
    cardImage.src = "./cards/" + card + ".png"; // set the source of the image
    dealerSum += getValue(card); // keep incrementing your card
    dealerAceCount += checkAce(card); // keep incrementing your Ace cards
    document.getElementById("dealer-box").append(cardImage); // take the image tag and append the card to your-cards html tag
    document.getElementById("dealer-blackjack-result").innerText = dealerSum;

    while (dealerSum < 17) {
      // if dealer card  sum is less than 17
      let cardImage = document.createElement("img"); // create an image tag
      let card = deck.pop(); // get a card from the deck
      cardImage.src = "./cards/" + card + ".png"; // set the source of the image
      dealerSum += getValue(card); // keep incrementing dealer's cards
      dealerAceCount += checkAce(card); // keep incrementing dealer's Ace cards
      document.getElementById("dealer-box").append(cardImage); // take the image tag and append the card to dealer-cards html
    }

    if (reduceAce(dealerSum, dealerAceCount) > 21) {
      // your card sum must stop if it is more than 21
      document.getElementById("dealer-blackjack-result").innerText = "Bust!";
      document.getElementById("dealer-blackjack-result").style.color = "red";
    } else {
      document.getElementById("dealer-blackjack-result").innerText = dealerSum;
    }

    blackjackGame["isTurnOver"] = true;

    computeWinner();
    showWinner(winner);
  }
  blackjackGame.pressOnce = true;
}

function computeWinner() {
  if (YOU["score"] <= 21) {
    if (YOU["score"] > DEALER["score"] || DEALER["score"] > 21) {
      winner = YOU;
    } else if (YOU["score"] < DEALER["score"]) {
      winner = DEALER;
    } else if (YOU["score"] === DEALER["score"]) {
      winner = "Draw";
    }
  } else if (YOU["score"] > 21 && DEALER["score"] < 21) {
    winner = DEALER;
  } else if (YOU["score"] > 21 && DEALER["score"] > 21) {
    winner = "None";
  }
  return winner;
}

function showWinner() {
  let message, messageColor;

  if (winner === YOU) {
    message = "You Won!";
    messageColor = "green";
    document.querySelector("#wins").textContent = blackjackGame["wins"] += 1;
    winSound.play();
  }

  if (winner === DEALER) {
    message = "You Lost!";
    messageColor = "red";
    document.querySelector("#losses").textContent = blackjackGame[
      "losses"
    ] += 1;
    loseSound.play();
  }

  if (winner === "Draw") {
    message = "You Draw!";
    messageColor = "blue";
    document.querySelector("#draws").textContent = blackjackGame["draws"] += 1;
    loseSound.play();
  }

  if (winner === "None") {
    message = "You Both Busted!";
    messageColor = "orange";
    loseSound.play();
  }
  document.querySelector("#blackjack-result").textContent = message;
  document.querySelector("#blackjack-result").style.color = messageColor;
}

function blackjackDeal() {
  hitSound.play();

  if (blackjackGame["isTurnOver"] === true) {
    let yourImages = document
      .querySelector("#your-box")
      .querySelectorAll("img");
    let dealerImages = document
      .querySelector("#dealer-box")
      .querySelectorAll("img");

    YOU["score"] = DEALER["score "] = 0;

    document.querySelector("#your-blackjack-result").textContent = 0;
    document.querySelector("#dealer-blackjack-result").textContent = 0;

    document.querySelector("#your-blackjack-result").style.color = "white";
    document.querySelector("#dealer-blackjack-result").style.color = "white";

    document.querySelector("#blackjack-result").textContent = "Let's Play";
    document.querySelector("#blackjack-result").style.color = "white";

    for (let i = 0; i < yourImages.length; i++) {
      yourImages[i].remove();
      dealerImages[i].remove();
    }

    blackjackGame["isStand"] = false;
    blackjackGame.pressOnce = false;
    blackjackGame["isTurnOver"] = false;
  }
}

function blackjackRestart() {
  hitSound.play();

  blackjackDeal();

  document.querySelector("#wins").textContent = 0;
  document.querySelector("#losses").textContent = 0;
  document.querySelector("#draw").textContent = 0;

  blackjackGame.wins = 0;
  blackjackGame.losses = 0;
  blackjackGame.draws = 0;
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
