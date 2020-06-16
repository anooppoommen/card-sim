const Player = require('./Player')
const Deck = require('./Deck')


// create an array to store the players
let players = []
let deck = new Deck()

// create each player and add to the array
for(let i =0; i< 4; i++) {
    players.push(new Player(i+1))
}

deck.shuffle()
deck.deal(players, 3)

let stages = ['isTrail', 'isSeq', 'pairs', 'topCard'];
let winners = []
let stage  = 0;
let stageMin = 999;

while (stage < stages.length){
    
    players.forEach( (player, i) => {
        let val = player[stages[stage]]();
        if(val) {
            if (val < stageMin) {
                winners = [i]
                stageMin = val
            } else if (val === stageMin) {
                winners.push(i)
            }
        }
    })

    if (winners.length > 0) {
        break;
    }
    stage += 1
}

while(winners.length > 1){
    let given = Array.from(Array(winners.length), () => deck.pick_a_card() % 13 + 1 )
    let min_val = Math.min(...given);
    let occurence = []

    for(var i=0; i< given.length; i++) {
        if (given[i] == min_val) {
            occurence.push(winners[i])
        }
    }
    winners = occurence;
    
}

let p = players[winners[0]]
console.log(` ${p.name} has won. with hand ${p.hand.join(', ')}`);