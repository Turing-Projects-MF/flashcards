const Turn = require('./Turn.js');

class Round {
  constructor(roundDetails) {
    this.deck = roundDetails.cardDeck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.deck[0];
  }
  takeTurn(guess) {
    const currentCard = this.returnCurrentCard();
    //how to write this test for Turn?
    const turn = new Turn(guess, currentCard);
    const result = turn.giveFeedback();

    this.turns++;
    this.checkGuess(guess);
    this.updateCardDeck();

    return result;

  }
  updateCardDeck() {
    this.deck.push(this.deck.shift());
  }
  checkGuess(guess) {
    if (guess !== this.deck[0].correctAnswer) {
      this.incorrectGuesses.push(this.deck[0].id)
    }
  }
  calculatePercentCorrect() {
    return Math.round((this.incorrectGuesses.length / this.turns) * 100);
  }
  endRound() {
    const percentCorrect = this.calculatePercentCorrect();
    return `**Round over!** You answered ${percentCorrect}% of the questions correctly!`;
  }
}

module.exports = Round;
