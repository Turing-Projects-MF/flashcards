const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('./Deck');
const Card = require('./Card');
const Round = require('./Round');

class Game {
  constructor() {}
  start() {
    let newDeck = this.createNewDeck();
    let newRound = this.startNewRound(newDeck);
    this.displayGame(newDeck, newRound);
    //how to write test?
  }
  startNewRound(deck) {
    let round = new Round(deck);
    this.currentRound = round;

    return round;
  }
  createNewDeck() {
    let cardsInDeck = [];
    let newCard;
    prototypeQuestions.forEach(card => {
      newCard = new Card(card.id, card.question, card.answers, card.correctAnswer);
      cardsInDeck.push(newCard);
    })
    let deck = new Deck(cardsInDeck);
    return deck;
  }
  displayGame(deck, round) {
    this.printMessage(deck);
    this.printQuestion(round);
  }
  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }
  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;
