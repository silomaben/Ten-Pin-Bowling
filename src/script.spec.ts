import { TenPinGame } from "./script";

describe('Note controllers',()=>{

    it('it should verify if no token it throws an error', async ()=>{

        const game = new TenPinGame('X X X X X X X X X X X X ');
      expect(game.getScore()).toBe(90);
    })


})
