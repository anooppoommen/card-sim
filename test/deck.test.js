const assert = require('assert')
const Deck = require('../Deck')

describe("Tests for Deck", () => {

    let test_deck = new Deck()

    it('have 52 elements', () => {
        assert.equal(test_deck.cards.length, 52, 'There should be 52 cards in the deck initially');
    })

    it('should have one random card remove', () => {
        let choosen_card = test_deck.pick_a_card()
        assert.equal(test_deck.cards.indexOf(choosen_card), -1)
        assert.equal(test_deck.cards.length , 51);
    })

    it("empty deck give", () => {
        test_deck.cards = []
        let choosen_card = test_deck.pick_a_card()
        assert.equal(choosen_card, -1)
    })

})