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
    // this.checkGuess(guess);
    // this.updateCardDeck();
    this.deck.push(this.deck.shift());
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
  // updateCardDeck() {
  //   this.deck.push(this.deck.shift());
  // }
  // checkGuess(guess) {
  //   if (this.deck[0].correctAnswer === guess) {
  //     console.log('hi');
  //     return 'correct!';
  //   } else {
  //     return 'incorrect!';
  //   }
  // }
}


module.exports = Round;
