const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn.js');
const Card = require('../src/Card.js');

describe('Turn', function() {

  it.skip('should be a function', function() {
    const turn = new Turn();
    expect(turn).to.be.a('function');
  });

  it.skip('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it.skip('should store a user\'s guess', function() {
    const turn = new Turn('object');
    expect(turn.guess).to.equal('object');
  });

  it.skip('should store a Card object for card in play', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(turn.currentCard).to.equal(card);
  })

  it.skip('should return the guess', function() {
    const turn = new Turn('object');
    const userGuess = turn.returnGuess();
    expect(userGuess).to.equal('object');
  });

  it.skip('should return the current flash card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    const cardInPlay = turn.returnCard();
    expect(cardInPlay).to.equal(card);
  });

  it.skip('should evaluate if the guess is true or false', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const goodTurn = new Turn('object', card);
    const badTurn = new Turn('array', card);
    const goodGuess = goodTurn.evaluateGuess();
    const badGuess = badTurn.evaluateGuess();
    expect(goodGuess).to.be.true;
    expect(badGuess).to.be.false;
  });

  it.skip('should return either correct or incorrect', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const goodTurn = new Turn('object', card);
    const badTurn = new Turn('array', card);
    const goodGuess = goodTurn.evaluteGuess();
    const badGuess = badTurn.evaluateGuess();
    expect(goodGuess).to.be.true;
    expect(badGuess).to.be.false;
    const goodFeedback = goodTurn.giveFeedback();
    const badFeedback = badTurn.giveFeedback();
    expect(goodFeedback).to.equal('correct!');
    expect(badFeedback).to.equal('incorrect!');

  });
});
