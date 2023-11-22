class BowlingGame {
    private rolls: string;
  
    constructor(rolls: string) {
      this.rolls = rolls;
    }
  
    calculateScore(): number {
      const frames: number[] = [];
  
      for (let i = 0; i < this.rolls.length; i++) {
        const roll = this.rolls[i];
  
        if (roll === 'X') {
          frames.push(10);
        } else if (roll === '/') {
          const previousRoll = this.rolls[i - 1];
          const pinsKnockedDown = 10 - BowlingGame.getRollValue(previousRoll);
          frames.push(pinsKnockedDown);
        } else if (roll === '-') {
          frames.push(0);
        } else {
          frames.push(parseInt(roll));
        }
      }
  
      let score = 0;
      let frameIndex = 0;
  
      for (let i = 0; i < 10; i++) {
        const frame = frames[frameIndex];
  
        if (frame === 10) {
          // Strike
          score += 10 + frames[frameIndex + 1] + frames[frameIndex + 2];
          frameIndex++;
        } else if (frame + frames[frameIndex + 1] === 10) {
          // Spare
          score += 10 + frames[frameIndex + 2];
          frameIndex += 2;
        } else {
          // Open frame
          score += frame + frames[frameIndex + 1];
          frameIndex += 2;
        }
      }
  
      return score;
    }
  
    private static getRollValue(roll: string): number {
      if (roll === 'X') {
        return 10;
      } else if (roll === '/') {
        return 10;
      } else if (roll === '-') {
        return 0;
      } else {
        return parseInt(roll);
      }
    }
  }
  
  // Example usage:
  const game1 = new BowlingGame('X X X X X X X X X X X X');
  console.log(game1.calculateScore()); // 300
  
  const game2 = new BowlingGame('9- 9- 9- 9- 9- 9- 9- 9- 9- 9-');
  console.log(game2.calculateScore()); // 90
  
  const game3 = new BowlingGame('5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5');
  console.log(game3.calculateScore()); // 150
  