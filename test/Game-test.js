const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Game', function() {

  let game;
  beforeEach(() => {
    game = new Game();
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should keep track of the current round', function() {
    expect(game.currentRound).to.equal(null);
  });

  it('should create a new round', function() {
    const card1 = new Card(1, 'What primitave data type returns a true or false?', ['number', 'string', 'boolean'], 'boolean');
    const card2 = new Card(2, 'Is Javascript dynamically or statically typed?', ['dynamically', 'statically'], 'dynamically');
    const card3 = new Card(3, 'Can you use for loops in Mod 2?', ['yes', 'no'], 'no');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck)
    const newRound = game.startNewRound(deck);
    expect(newRound).to.be.deep.equal(round)
  });
  
  it('should create a new deck', function() {
    const cardInfo1 = {
      "id": 1,
      "question": "What primitave data type returns a true or false?",
      "answers": ['number', 'string', 'boolean'],
      "correctAnswer": "boolean"
    };
    const cardInfo2 = {
      "id": 2,
      "question": "Is Javascript dynamically or statically typed?",
      "answers": ['dynamically', 'statically'],
      "correctAnswer": "dynamically"
    };
    const cardInfo3 = {
      "id": 3,
      "question": "Can you use for loops in Mod 2?",
      "answers": ["yes", "no"],
      "correctAnswer": "no"
    };
    const card1 = new Card(1, 'What primitave data type returns a true or false?', ['number', 'string', 'boolean'], 'boolean');
    const card2 = new Card(2, 'Is Javascript dynamically or statically typed?', ['dynamically', 'statically'], 'dynamically');
    const card3 = new Card(3, 'Can you use for loops in Mod 2?', ['yes', 'no'], 'no');
    const deck = new Deck([card1, card2, card3]);
    const newData = [cardInfo1, cardInfo2, cardInfo3];
    const newDeck = game.createNewDeck(newData);
    expect(newDeck).to.deep.equal(deck);
  });
});
