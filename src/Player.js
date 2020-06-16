module.exports = class Player {
    constructor(name=0) {
        this.hand = []
        this.name = 'Player '+ name.toString()
    }

    /**
     * checks to see if all elements are the same
     * @returns {Boolean}
     */
    isTrail() {
        
        if (this.hand.length != 3) {
            return false
        }

        return this.hand[0] == this.hand[1] == this.hand[2]
    }

    /**
     * Check to see if the cards are a continuous sequence if so returns its sum
     * else return false
     * @returns {Number|Boolean}
     */
    isSeq() {

        if (this.hand.length != 3) {
            return false
        }

        let hand = this.hand.sort((a,b) => a-b)

        if (hand[0] + 1 == hand[1] && hand[1]+1 == hand[2]) {
            return hand.reduce((a=0,b) => a+b)
        }

        return false
    }

    /**
     * Checks to see if there is a pair in the serie if so returns the pair 
     * number else returns 0
     * @returns {Number}
     */
    pairs() {
        if (this.hand.length != 3) {
            return false
        }
        //as much as i would love to create a hashmap and generalize this
        let hand = this.hand;
        if (hand[1] == hand[0] || hand[1] == hand[2]) {
            return hand[1]
        }

        return 0;
    }

    /**
     * Gives the card with highest cost
     * since the deck is sorted it is the first element
     * @returns {Number}
     */
    topCard() {
        
        if (this.hand.length != 3) {
            return false
        }

        return this.hand[0]
    }

    /**
     * this function adds a card to the player
     * @param {Number} card a card number between 1, 13
     * @returns {Boolean} indicating if it was added or not
     */
    give(card) {
        if (this.hand.length >= 3) {
            return false
        }
        
        this.hand.push(card)
        this.hand = this.hand.sort((a,b) => a-b)
        
        return true;
    }

}