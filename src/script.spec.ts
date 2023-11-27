import { TenPinGame } from "./script";

describe('check correct result scores',()=>{

    it('should pass if all rolls are strikes returns a score of 300', async ()=>{

        const game = new TenPinGame('X X X X X X X X X X X X ');
      expect(game.getScore()).toBe(300);
    })
    it('should pass if score score is 90 for 9- 9- 9- 9- 9- 9- 9- 9- 9- 9-', async ()=>{

        const game = new TenPinGame('X X X X X X X X X X X X ');
      expect(game.getScore()).toBe(90);
    })
    it('should pass if score score is 150 for 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5', async ()=>{

        const game = new TenPinGame('X X X X X X X X X X X X ');
      expect(game.getScore()).toBe(150);
    })


})
