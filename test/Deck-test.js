const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should start with array of Card objects', function() {
    const card1 = new Card(1,'What primitave data type returns a true or false?', ['number', 'string', 'boolean'], 'boolean');
    const card2 = new Card(2, 'Is Javascript dynamically or statically typed?', ['dynamically', 'statically'], 'dynamically');
    const card3 = new Card(3, 'Can you use for loops in Mod 2?', ['yes', 'no'], 'no');
    const deck = new Deck([card1, card2, card3]);
    expect(deck.cardDeck).to.deep.equal([card1, card2, card3]);
  });
  
  it('should count how many cards are in a deck', function() {
    const card1 = new Card(1,'What primitave data type returns a true or false?', ['number', 'string', 'boolean'], 'boolean');
    const card2 = new Card(2, 'Is Javascript dynamically or statically typed?', ['dynamically', 'statically'], 'dynamically');
    const card3 = new Card(3, 'Can you use for loops in Mod 2?', ['yes', 'no'], 'no');
    const deck = new Deck([card1, card2, card3]);
    const deckCount = deck.countCards();
    expect(deckCount).to.equal(3);
  });
});
