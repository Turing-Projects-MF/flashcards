const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  let card;
  let turn;
  beforeEach(() => {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn = new Turn('object', card);
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a user\'s guess', function() {
    expect(turn.guess).to.equal('object');
  });

  it('should store a Card object for card in play', function() {
    expect(turn.currentCard).to.equal(card);
  })

  it('should return the guess', function() {
    const userGuess = turn.returnGuess();
    expect(userGuess).to.equal('object');
  });

  it('should return the current flash card', function() {
    const cardInPlay = turn.returnCard();
    expect(cardInPlay).to.equal(card);
  });

  it('should evaluate if the guess is true', function() {
    const guess = turn.evaluateGuess();
    expect(guess).to.be.true;
  });

  it('should evaluate if the guess is false', function() {
    const badTurn = new Turn('array', card);
    const guess = badTurn.evaluateGuess();
    expect(guess).to.be.false;
  });

  it('should return "correct!" if guess was true', function() {
    const feedback = turn.giveFeedback();
    expect(feedback).to.equal('correct!');
  });

  it('should return "incorrect!" if guess was false', function() {
    const badTurn = new Turn('array', card);
    const feedback = badTurn.giveFeedback();
    expect(feedback).to.equal('incorrect!');
  });
});
