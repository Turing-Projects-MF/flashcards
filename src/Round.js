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
    this.turns++;
    this.updateCardDeck();
    return this.checkGuess(guess);
  }
  updateCardDeck() {
    this.deck.push(this.deck.shift());
  }
  checkGuess(guess) {
    const endOfDeck = this.deck[this.deck.length - 1];
    if (endOfDeck.correctAnswer === guess) {
      return 'correct!';
    } else {
      this.incorrectGuesses.push(endOfDeck.id)
      return 'incorrect!';
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
