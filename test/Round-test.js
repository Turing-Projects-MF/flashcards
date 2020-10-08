const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', function() {

  let card1;
  let card2;
  let card3;
  let deck;
  let round;
  beforeEach(() => {
    card1 = new Card(1, 'What primitave data type returns a true or false?', ['number', 'string', 'boolean'], 'boolean');
    card2 = new Card(2, 'Is Javascript dynamically or statically typed?', ['dynamically', 'statically'], 'dynamically');
    card3 = new Card(3, 'Can you use for loops in Mod 2?', ['yes', 'no'], 'no');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should start the round with a deck of cards', function() {
    expect(round.deck).to.deep.equal([card1, card2, card3]);
  });

  it('should return the current card being played', function() {
    const currentCard = round.returnCurrentCard();
    expect(currentCard).to.equal(card1);
  });

  it('should update the turn count each turn', function() {
    expect(round.turns).to.be.equal(0);
    round.takeTurn('boolean');
    expect(round.turns).to.be.equal(1);
  });

  it('should make the next card the current card', function() {
    round.takeTurn('boolean');
    const currentCard = round.returnCurrentCard();
    expect(currentCard).to.equal(card2);
  });

  it('should start with no incorrect guesses', function() {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should return "incorrect!" if failed guess', function() {
    const badGuess = round.takeTurn('number');
    expect(badGuess).to.be.equal('incorrect!');
  });

  it('should return "correct!" if correct guess', function() {
    const goodGuess = round.takeTurn('boolean');
    expect(goodGuess).to.be.equal('correct!');
  });

  it('should record incorrect guess', function() {
    round.takeTurn('number');
    expect(round.incorrectGuesses).to.deep.equal([1]);
  });

  it('should not record correct guess', function() {
    round.takeTurn('boolean');
    expect(round.incorrectGuesses).to.deep.equal([]);
  });
  
  it('should return the percent of correct guesses', function() {
    round.takeTurn('number');
    round.takeTurn('dynamically');
    round.takeTurn('no');
    const returnPercent = round.calculatePercentCorrect();
    expect(returnPercent).to.be.equal(67);
  });
});
