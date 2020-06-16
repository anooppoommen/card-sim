const assert = require('assert')

const Player = require('../src/Player')

describe('Player test', () => {

    let test_player = new Player();

    it('should be same', () => {
        
        test_player.hand = [1,1,1];
        assert.equal(test_player.isTrail(), true);

        test_player.hand = [1,4,50];
        assert.equal(test_player.isTrail(), false)

    })

    it('Should have a pair', () => {
        test_player.hand = [1,1,2]
        assert.equal(test_player.pairs(), 1)

        test_player.hand =[1,2,2]
        assert.equal(test_player.pairs(), 2)
        
    })

    it('Should have a seq', () => {
        test_player.hand = [1,2,3]
        assert.equal(test_player.isSeq(), 6)

        test_player.hand = [1,2,4]
        assert.equal(test_player.isSeq(), 0)
    })

    it('Should only take 3 cards', () => {
        let p = new Player();
        
        let a = [ 
            p.give(1),
            p.give(7),
            p.give(8),
            p.give(6),
            p.give(2)
        ];

        assert.deepEqual(a, [true, true, true, false, false])
    
    })
})