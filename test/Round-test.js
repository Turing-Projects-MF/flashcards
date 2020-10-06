const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Round', function() {

  it.skip('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it.skip('should be an instance of Deck', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it.skip('should start the round with a deck of cards', function() {
    const card1 = new Card(1,'What primitave data type returns a true or false?', ['number', 'string', 'boolean'], 'boolean');
    const card2 = new Card(2, 'Is Javascript dynamically or statically typed?', ['dynamically', 'statically'], 'dynamically');
    const card3 = new Card(3, 'Can you use for loops in Mod 2?', ['yes', 'no'], 'no');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.deck).to.deep.equal([card1, card2, card3]);
  });

  it.skip('should return the current card being played', function() {
    const card1 = new Card(1,'What primitave data type returns a true or false?', ['number', 'string', 'boolean'], 'boolean');
    const card2 = new Card(2, 'Is Javascript dynamically or statically typed?', ['dynamically', 'statically'], 'dynamically');
    const card3 = new Card(3, 'Can you use for loops in Mod 2?', ['yes', 'no'], 'no');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    const currentCard = round.returnCurrentCard();
    expect(currentCard).to.equal(card1);
  });

  // it.skip('should create new Turn instance with guess', function() {
  //   const card1 = new Card(1,'What primitave data type returns a true or false?', ['number', 'string', 'boolean'], 'boolean');
  //   const card2 = new Card(2, 'Is Javascript dynamically or statically typed?', ['dynamically', 'statically'], 'dynamically');
  //   const card3 = new Card(3, 'Can you use for loops in Mod 2?', ['yes', 'no'], 'no');
  //   const deck = new Deck([card1, card2, card3]);
  //   const round = new Round(deck);
  //   const answer = round.takeTurn('boolean');
  //   //takeTurn(guess) => new Turn(guess, currentCard)
  // });

  it.skip('should update the turn count each turn', function() {
    const card1 = new Card(1,'What primitave data type returns a true or false?', ['number', 'string', 'boolean'], 'boolean');
    const card2 = new Card(2, 'Is Javascript dynamically or statically typed?', ['dynamically', 'statically'], 'dynamically');
    const card3 = new Card(3, 'Can you use for loops in Mod 2?', ['yes', 'no'], 'no');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.turns).to.be.equal(0);
    round.takeTurn('boolean');
    expect(round.turns).to.be.equal(1);
  });

  it.skip('should make the next card the current card', function() {
    const card1 = new Card(1,'What primitave data type returns a true or false?', ['number', 'string', 'boolean'], 'boolean');
    const card2 = new Card(2, 'Is Javascript dynamically or statically typed?', ['dynamically', 'statically'], 'dynamically');
    const card3 = new Card(3, 'Can you use for loops in Mod 2?', ['yes', 'no'], 'no');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    const currentCard = round.returnCurrentCard();
    expect(currentCard).to.equal(card2);
  });

  it.skip('should start with no incorrect guesses', function() {
    const card1 = new Card(1,'What primitave data type returns a true or false?', ['number', 'string', 'boolean'], 'boolean');
    const card2 = new Card(2, 'Is Javascript dynamically or statically typed?', ['dynamically', 'statically'], 'dynamically');
    const card3 = new Card(3, 'Can you use for loops in Mod 2?', ['yes', 'no'], 'no');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it.skip('should return "incorrect!" if failed guess', function() {
    const card1 = new Card(1,'What primitave data type returns a true or false?', ['number', 'string', 'boolean'], 'boolean');
    const card2 = new Card(2, 'Is Javascript dynamically or statically typed?', ['dynamically', 'statically'], 'dynamically');
    const card3 = new Card(3, 'Can you use for loops in Mod 2?', ['yes', 'no'], 'no');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    const badGuess = round.takeTurn('number');
    expect(badGuess).to.be.equal('incorrect!');
  });

  it.skip('should return "correct!" if correct guess', function() {
    const card1 = new Card(1,'What primitave data type returns a true or false?', ['number', 'string', 'boolean'], 'boolean');
    const card2 = new Card(2, 'Is Javascript dynamically or statically typed?', ['dynamically', 'statically'], 'dynamically');
    const card3 = new Card(3, 'Can you use for loops in Mod 2?', ['yes', 'no'], 'no');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    const goodGuess = round.takeTurn('boolean');
    expect(goodGuess).to.be.equal('correct!');
  });

  it.skip('should record incorrect guess', function() {
    const card1 = new Card(1,'What primitave data type returns a true or false?', ['number', 'string', 'boolean'], 'boolean');
    const card2 = new Card(2, 'Is Javascript dynamically or statically typed?', ['dynamically', 'statically'], 'dynamically');
    const card3 = new Card(3, 'Can you use for loops in Mod 2?', ['yes', 'no'], 'no');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.takeTurn('number');
    expect(round.incorrectGuesses).to.deep.equal([card1.id]);
  });

  it.skip('should return the percent of correct guesses', function() {
    const card1 = new Card(1,'What primitave data type returns a true or false?', ['number', 'string', 'boolean'], 'boolean');
    const card2 = new Card(2, 'Is Javascript dynamically or statically typed?', ['dynamically', 'statically'], 'dynamically');
    const card3 = new Card(3, 'Can you use for loops in Mod 2?', ['yes', 'no'], 'no');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.takeTurn('number');
    round.takeTurn('dynamically');
    round.takeTurn('no');
    const returnPercent = round.calculatePercentCorrect();
    expect(returnPercent).to.be.equal(33);
  });

  it.skip('should return a message after round is over', function() {
    const card1 = new Card(1,'What primitave data type returns a true or false?', ['number', 'string', 'boolean'], 'boolean');
    const card2 = new Card(2, 'Is Javascript dynamically or statically typed?', ['dynamically', 'statically'], 'dynamically');
    const card3 = new Card(3, 'Can you use for loops in Mod 2?', ['yes', 'no'], 'no');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.takeTurn('number');
    round.takeTurn('dynamically');
    round.takeTurn('no');
    const roundOver = round.endRound();
    expect(roundOver).to.be.equal('**Round over!** You answered 33% of the questions correctly!');
});
