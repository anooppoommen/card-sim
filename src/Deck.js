module.exports = class Deck {
    
    constructor() {
        this.cards = Array.from(Array(52), (x,i) => i+1);
    }

    /**
     * this function shuffles the cards in the deck
     */
    shuffle() {
        let len = this.cards.length;
        while(len) {
            // randomly choose a card and move it to the end
            // of the deck
            this.cards.push(
                this.cards.splice( Math.floor( Math.random() * len ), 1 )[0]
            )
            len -= 1
        }
    }

    /**
     * function return a card and reduces the size of the cards array by one 
     * if there are no more cards to deal the function returns -1
     * @returns {number} in range of [1, 52]
     */
    pick_a_card() {
        
        if (this.cards.length == 0) {
            return -1;
        }

        return this.cards.splice(Math.floor( Math.random() * this.cards.length ),1)[0]
    }

    /**
     * the function gives each player a certain number of cards 
     * @param {Player[]} players the list of players
     * @param {Number} num_of_cards number of cards to give a player
     */
    deal(players, num_of_cards) {

        if (this.cards.length < (players.length * num_of_cards)) {
            return false;
        }

        players.forEach(player => {
            while(player.hand.length < num_of_cards) {
                player.give( this.pick_a_card() % 13 + 1 )
            }
        });

        return true;
    }

}