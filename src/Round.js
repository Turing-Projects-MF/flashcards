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
    this.deck.push(this.deck.shift());
  }
}


module.exports = Round;
